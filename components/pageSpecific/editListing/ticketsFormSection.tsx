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
            <div className={"pl-6 gap-3 grid w-full grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(500px,1fr))]"}
            >
                {tickets.map((t, i) => {
                    return <TicketFormItem key={`ticket-form-item-${i}`} form={form} index={i} isLast={i === tickets.length - 1} />
                })}
            </div>
        </>
    )
}


EditTransactionTicketsSection.displayName = "EditTransactionTicketsSection"


export default EditTransactionTicketsSection;
