import { Location } from "@prisma/client";
import urlencode from 'urlencode';


// TODO: Use this to direct to google maps, but it's unusable until the detailed location of arenas is in the database.
export const formatGoogleMapsQuery = (location: Location) => {
    return urlencode(`${location.street ? `${location.street},` : ""}${location.city ? `${location.city},` : ""}${location.state ? `${location.state},` : ""}${location.zip ? `${location.zip}` : ""}`)
}




