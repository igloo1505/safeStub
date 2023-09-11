import { USSTATE } from "@prisma/client"




export type StateByName = "Alabama" | "Alaska" | "American Samoa" | "Arizona" | "Arkansas" | "Baker Island" | "California" | "Colorado" | "Connecticut" | "Delaware" | "District of Columbia" | "Florida" | "Georgia" | "Guam" | "Hawaii" | "Howland Island" | "Idaho" | "Illinois" | "Indiana" | "Iowa" | "Jarvis Island" | "Johnston Atoll" | "Kansas" | "Kentucky" | "Kingman Reef" | "Louisiana" | "Maine" | "Maryland" | "Massachusetts" | "Michigan" | "Midway Atoll" | "Minnesota" | "Mississippi" | "Missouri" | "Montana" | "Navassa Island" | "Nebraska" | "Nevada" | "New Hampshire" | "New Jersey" | "New Mexico" | "New York" | "North Carolina" | "North Dakota" | "Northern Mariana Islands" | "Ohio" | "Oklahoma" | "Oregon" | "Palmyra Atoll" | "Pennsylvania" | "Puerto Rico" | "Rhode Island" | "South Carolina" | "South Dakota" | "Tennessee" | "Texas" | "United States Minor Outlying Islands" | "United States Virgin Islands" | "Utah" | "Vermont" | "Virginia" | "Wake Island" | "Washington" | "West Virginia" | "Wisconsin" | "Wyoming"




interface StateItem {
    name: StateByName
    // abbrev: Location['state']
    abbrev: USSTATE
}




export const states: StateItem[] = [
    { name: "Alabama", abbrev: "AL" },
    { name: "Alaska", abbrev: "AK" },
    { name: "American Samoa", abbrev: "AS" },
    { name: "Arizona", abbrev: "AZ" },
    { name: "Arkansas", abbrev: "AR" },
    { name: "Baker Island", abbrev: "UM_81" },
    { name: "California", abbrev: "CA" },
    { name: "Connecticut", abbrev: "CT" },
    { name: "Colorado", abbrev: "CO" },
    { name: "Delaware", abbrev: "DE" },
    { name: "District of Columbia", abbrev: "DC" },
    { name: "Florida", abbrev: "FL" },
    { name: "Georgia", abbrev: "GA" },
    { name: "Guam", abbrev: "GU" },
    { name: "Hawaii", abbrev: "HI" },
    { name: "Howland Island", abbrev: "UM_84" },
    { name: "Idaho", abbrev: "ID" },
    { name: "Illinois", abbrev: "IL" },
    { name: "Indiana", abbrev: "IN" },
    { name: "Iowa", abbrev: "IA" },
    { name: "Jarvis Island", abbrev: "UM_86" },
    { name: "Johnston Atoll", abbrev: "UM_67" },
    { name: "Kansas", abbrev: "KS" },
    { name: "Kentucky", abbrev: "KY" },
    { name: "Kingman Reef", abbrev: "UM_89" },
    { name: "Louisiana", abbrev: "LA" },
    { name: "Maine", abbrev: "ME" },
    { name: "Maryland", abbrev: "MD" },
    { name: "Massachusetts", abbrev: "MA" },
    { name: "Michigan", abbrev: "MI" },
    { name: "Midway Atoll", abbrev: "UM_71" },
    { name: "Minnesota", abbrev: "MN" },
    { name: "Mississippi", abbrev: "MS" },
    { name: "Missouri", abbrev: "MO" },
    { name: "Montana", abbrev: "MT" },
    { name: "Navassa Island", abbrev: "UM_76" },
    { name: "Nebraska", abbrev: "NE" },
    { name: "Nevada", abbrev: "NV" },
    { name: "New Hampshire", abbrev: "NH" },
    { name: "New Jersey", abbrev: "NJ" },
    { name: "New Mexico", abbrev: "NM" },
    { name: "New York", abbrev: "NY" },
    { name: "North Carolina", abbrev: "NC" },
    { name: "North Dakota", abbrev: "ND" },
    { name: "Northern Mariana Islands", abbrev: "MP" },
    { name: "Ohio", abbrev: "OH" },
    { name: "Oklahoma", abbrev: "OK" },
    { name: "Oregon", abbrev: "OR" },
    { name: "Palmyra Atoll", abbrev: "UM_95" },
    { name: "Pennsylvania", abbrev: "PA" },
    { name: "Puerto Rico", abbrev: "PR" },
    { name: "Rhode Island", abbrev: "RI" },
    { name: "South Carolina", abbrev: "SC" },
    { name: "South Dakota", abbrev: "SD" },
    { name: "Tennessee", abbrev: "TN" },
    { name: "Texas", abbrev: "TX" },
    { name: "United States Minor Outlying Islands", abbrev: "UM" },
    { name: "United States Virgin Islands", abbrev: "VI" },
    { name: "Utah", abbrev: "UT" },
    { name: "Vermont", abbrev: "VT" },
    { name: "Virginia", abbrev: "VA" },
    { name: "Wake Island", abbrev: "UM_79" },
    { name: "Washington", abbrev: "WA" },
    { name: "West Virginia", abbrev: "WV" },
    { name: "Wisconsin", abbrev: "WI" },
    { name: "Wyoming", abbrev: "WY" },
]


export interface CityDataType {
    longitude: string
    latitude: string
    name: string
    id: number
}

export type CityApiType = Omit<CityDataType, "latitude" | "longitude">


export interface CityFilterQueryParams {
    state: StateByName
    cityInput: string
}


export type LocationJSONData = { [k in StateByName]: {
    cities: CityDataType[],
    name: StateByName,
    id: number,
    latitude: string,
    longitude: string
    country_id: number
    state_code: USSTATE | string
}
}


