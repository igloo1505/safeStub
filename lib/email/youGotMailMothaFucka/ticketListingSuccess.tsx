import 'server-only'
import TicketsListedSuccessfullyEmail, { TicketsListedSuccessfullyEmailProps } from '../templates/tsx/ticketsListedSuccessfully'
import { prisma } from '#/db/db'
import { sendMail } from '../nodeMailer'
import { render } from '@react-email/components'

export const sendTicketListingSuccessEmail = async ({ eventId, ...props }: Omit<TicketsListedSuccessfullyEmailProps, "event"> & { eventId: number }) => {
    let event = await prisma.event.findFirst({
        where: {
            id: eventId
        },
        select: {
            description: true,
            date: true
        }
    })
    let userData = await prisma.user.findFirst({
        where: {
            id: props.username
        },
        select: {
            email: true,
            name: true
        }
    })
    const _email = userData?.email ? userData.email : props.username.indexOf("@") === -1 ? null : props.username
    let _name = ""
    if (userData?.name) {
        let split = userData.name.split(" ")
        if (split.length > 1) {
            _name = split[0]
        } else {
            _name = userData.name
        }
    } else {
        _name = _email || ""
    }
    if (!event || !_email) return
    return await sendMail({
        to: _email,
        html: render(<TicketsListedSuccessfullyEmail
            {...props}
            username={_name}
            event={{
                description: event.description,
                date: event.date
            }}
        />),
        subject: `Congratulations ${_name}! Your tickets have been listed on SafeStub`
    })
}
