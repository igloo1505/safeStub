import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(relativeTime)
dayjs.extend(advancedFormat)
dayjs.extend(utc)
dayjs.extend(timezone)


const oneDay = 60 * 60 * 24 * 1000

export const dateFormatWithTime = "MM-D-YY [at] h:mm a"
export const dateFormatNoTime = "MM-D-YY"
export const formatEventDate = (dateString: string | Date) => {
    let fromNow = new Date(dateString).valueOf() - new Date().valueOf()
    if (fromNow <= oneDay) {
        return dayjs(dateString).fromNow()
    }
    return dayjs(dateString).format("dddd MMMM Do [at] h:mm a")
}


export const formatDateShort = (dateString: string | Date) => dayjs(dateString).format("M-D-YY")

export const formatDateLong = (dateString: string | Date | undefined) => {
    if (!dateString) return ""
    return dayjs(dateString).format("dddd, MMMM Do YYYY [at] h:mm A")
}

export const formatDateLongNoYear = (dateString: string | Date | undefined) => {
    if (!dateString) return ""
    return dayjs(dateString).format("dddd, MMMM Do [at] h:mm A")
}

export const dayOfWeek = (dateString: string | Date | undefined) => {
    if (!dateString) return ""
    return dayjs(dateString).format("dddd")
}


export const timeOfDay = (dateString: string | Date | undefined) => {
    if (!dateString) return ""
    return dayjs(dateString).format("h:mm A")
}

export const dayOfMonth = (dateString: string | Date | undefined) => {
    if (!dateString) return ""
    return dayjs(dateString).format("MMMM Do")
}

export const dateAndTime = (dateString: string | Date) => {
    let d = dayjs(dateString)
    return {
        day: d.format("MMM Do"),
        dow: d.format("dddd"),
        time: d.format("h:mm A")
    }
}

export const day = dayjs
