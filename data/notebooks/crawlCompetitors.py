from abc import abstractmethod, abstractproperty
import re
from typing import List
import bs4
import requests
from enum import Enum
from bs4 import BeautifulSoup, PageElement, Tag
from icecream import ic
from datetime import datetime
from dataclasses import dataclass, field

shadyHeaders = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
    "origin": "https://www.ticketmaster.com",
}

s = requests.Session()
s.headers.update(shadyHeaders)


@dataclass
class LeagueEnum(Enum):
    nfl = "NFL"
    mlb = "MLB"
    nba = "NBA"


@dataclass
class Event:
    league: LeagueEnum
    date: datetime
    teams: List[str]


@dataclass
class TicketData:
    event: Event
    section: str
    seat: str
    row: str
    price: float
    retrievedOn: datetime


@dataclass
class AbstractCrawlTarget:
    event: Event
    html: requests.Response = field(init=False)
    soup: BeautifulSoup = field(init=False)

    def doesContainClass(self, d: Tag, className: str):
        regex = re.compile(className, re.IGNORECASE | re.MULTILINE)
        return d.has_attr("class") and any([regex.search(x) for x in d["class"]])

    @abstractmethod
    def getFormattedEventUrl(self) -> str:
        pass

    def pingForHeaderUpdate(self):
        s.get(self.baseUrl)

    @abstractmethod
    def gatherHtml(self) -> requests.Response:
        return s.get(self.getFormattedEventUrl())

    @abstractmethod
    def parseContainers(self) -> List[TicketData]:
        pass


@dataclass
class TicketMaster(AbstractCrawlTarget):
    event: Event
    name = "Ticket Master"
    baseUrl = "https://www.ticketmaster.com"

    def __post_init__(self):
        self.pingForHeaderUpdate()
        self.html = self.gatherHtml()
        self.soup = BeautifulSoup(self.html.content, "html.parser")

    def getFormattedEventUrl(self) -> str:
        temporaryHardcodedUrl = "green-bay-packers-vs-tampa-bay-green-bay-wisconsin-12-17-2023/event/07005E94A18C1942"
        return f"{self.baseUrl}/{temporaryHardcodedUrl}"

    def gatherHtml(self) -> requests.Response:
        return super().gatherHtml()

    def parseContainers(self) -> List[TicketData]:
        tickets: List[TicketData] = []
        ul = self.soup.select("ul[aria-label='Ticket List']")
        ic(ul)
        return tickets


@dataclass
class VividSeats(AbstractCrawlTarget):
    event: Event
    name = "Vivid Seats"
    baseUrl = "https://www.vividseats.com"

    def __post_init__(self):
        self.pingForHeaderUpdate()
        self.html = self.gatherHtml()
        self.soup = BeautifulSoup(self.html.content, "html.parser")
        self.parseContainers()

    def getFormattedEventUrl(self) -> str:
        temporaryHardcodedUrl = "green-bay-packers-tickets-lambeau-field-3-8-2024--sports-nfl-football/production/4311801"
        target_url = f"{self.baseUrl}/{temporaryHardcodedUrl}"
        ic(target_url)
        return target_url

    def gatherHtml(self) -> requests.Response:
        return super().gatherHtml()

    def getTicketDataFromRowDiv(self, row) -> TicketData:
        ic(row)

    def getTicketListEms(self):
        listRegex = re.compile("listingsList", re.IGNORECASE | re.MULTILINE)
        ticketListItems: List[Tag] = []
        divs = self.soup.select("div")
        for d in divs:
            if d.has_attr("class"):
                matches = [listRegex.search(x) for x in d["class"]]
                if any(matches):
                    ticketListItems.append(d)
        return ticketListItems

    def getTicketListRows(self, l: Tag):
        rows = []
        print(l.prettify())
        # for c in l.children:
        #     ic(c)
        # ic(l)
        return

    def parseContainers(self) -> List[TicketData]:
        ticketListItems = self.getTicketListEms()
        ticketRowItems = [self.getTicketListRows(_list) for _list in ticketListItems]
        # ic(ticketRowItems)
        tickets: List[TicketData] = []
        # rowClass = "listingRowContainer"
        # regex = re.compile("listingRowContainer")
        # rowRegex = re.compile("listingRow", re.IGNORECASE | re.MULTILINE)
        # divs = self.soup.select("div")
        # for d in divs:
        #     if d.has_attr("class"):
        #         ic(d["class"])
        #         matches = [listRegex.search(x) for x in d["class"]]
        #         if any(matches):
        #             ticketRowItems.append(d)
        # print(d["class"], matches)
        # for t in d.children:
        #     t.find_next_siblings
        # t.unwrap()
        # ic()
        # if self.doesContainClass(t, "listingRowContainer"):
        #     ic(t)
        #     ticketRowItems.append(t)
        # ic(ticketRowItems)
        # ul = self.soup.select("ul[aria-label='Ticket List']")
        # ic(ul)
        return tickets


events: List[Event] = [
    Event(
        LeagueEnum.nfl,
        datetime(2023, 12, 17),
        ["Green Bay Packers", "Tampa Bay Buccaneers"],
    )
]
sources: List[AbstractCrawlTarget] = []

for e in events:
    sources.append(TicketMaster(e))
    sources.append(VividSeats(e))

ic(sources)
