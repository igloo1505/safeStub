# To Do

- [ ] Chose a component library
  - Google 'react component libraries', 'awesome tailwind' or 'awesome react'
- [ ] Choose a color theme
  - Install eyepicker or another color picker.
  - Use a online color palette generator
- [ ] Draw up some mockups with just boxes saying 'navbar here with buttons login, profile' or 'sign up card with inputs name, email and step2: location, team' etc

**Lists of React, CSS, and Tailwind related stuff** Definitely the best place to start.
https://github.com/enaqx/awesome-react
https://github.com/aniftyco/awesome-tailwindcss (Also has some useful color palette stuff)

**Collections of designs and components that won awards and shit to cruise and find things you want to integrate**
https://codepen.io/search/pens?q=card
https://www.awwwards.com/inspiration_search/?text=ticket
https://dribbble.com/shots/popular/web-design
https://dribbble.com/shots/popular/mobile

**Tailwind templates**
These are tailwind template libraries. The styles for these tend to be more generic than actual component libraries, and we don't need to import and run a bunch of extra code to make them work which would slow down the app so using just one or two of these components with an actual component library is no big deal. Using just one component from an entire component library on the other hand usually requires running enough code to initialize the entire library regardless of how many components we use. That wouldn't make a huge difference but for people with older devices it could be noticable.

Meraki (where we found that layout)
https://merakiui.com/components

FlowBite
https://flowbite.com/docs/components

Sira
https://www.sira-design.party/docs/components/overview

Ripple UI
https://www.ripple-ui.com/docs/components/

Preline
https://preline.co/docs/index.html

Tailwind UI (Actually built by the same dudes from tailwind, except they charge for pretty much all of it. We can still use it for designs and I'll build it myself.)
https://tailwindui.com

**Component Libraries**

Material UI (By Google... so it feels like Youtube and Gmail but still one of the best libraries out there.)
https://mui.com/material-ui/getting-started/templates/
https://mui.com/material-ui/getting-started/

Chakra UI
https://chakra-ui.com/docs/components

Ant Design
https://ant.design/components/overview

Atlassian
https://atlassian.design/components

Evergreen
https://evergreen.segment.com/components

Mantine
https://ui.mantine.dev/#main

**Component Libraries that are more generic and don't cater to a single theme**

Prime React (A superrrr solid themable library with a UI for you to play around with the themes.)
https://primereact.org

Radix UI (Can be installed as single components so this won't create the issue of running tons of unneeded code.)
https://www.radix-ui.com/primitives

```ts
const Event1 = {
    date: 1693954615230,
    league: "NFL",
    teams: ["t123", "t1234"],
    tickets: ["t1234", "t12345", ...]
}

const Ticket1 = {
    id: "t1234"
    seat: "4a",
    section: "B",
    event: Event1,
    status: "Sold",
    purchaser: "u123456"
}

const User1 = {
    id: "u12345",
    email: someUser@gmail.com,
    userName: someUser,
    name: {
        first: "Allen",
        mi: "C",
        last: "Turring"
    },
    verified: 1,
    ticketsPosted: ["t1234", "t12345", "t123456", ...]
}
```
