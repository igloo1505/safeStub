import React from 'react'
import { EditTransactionFormType } from './editListingFormContext'
import TicketFormItem from './ticketFormItem'
import EditListingFormHeader from './EditListingFormHeader'



interface EditTransactionTicketsSectionProps {
    form: EditTransactionFormType
}

const EditTransactionTicketsSection = ({ form }: EditTransactionTicketsSectionProps) => {
    const tickets = form.watch("tickets")
    return (
        <>
            <EditListingFormHeader>Tickets</EditListingFormHeader>
            <div className={"pl-6 flex flex-col justify-center items-start gap-3"}>
                {tickets.map((t, i) => {
                    return <TicketFormItem key={`ticket-form-item-${i}`} form={form} index={i} isLast={i === tickets.length - 1} />
                })}
            </div>
        </>
    )
}


EditTransactionTicketsSection.displayName = "EditTransactionTicketsSection"


export default EditTransactionTicketsSection;
