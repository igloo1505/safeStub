"use client"
import React, { useEffect, useState } from 'react'
import { UserProfileDetails } from '../../profilePageContainer'
import ProfileItemCard from './cardContainer'
import { ProfileContentBaseProps } from './contentBaseProps'
import PaymentHistoryTable from './paymentHistoryTable'
import { formatPaymentHistoryForTable } from '#/lib/formatting/formatPaymentHistoryForTable'
import { PaymentHistoryItem, transactionStatusLabelMap } from '#/types/profile'
import { TRANSACTIONSTATUS } from '@prisma/client'
import SelectActiveListingFilter from './selectActiveListingFilter'



interface PaymentHistoryProfileCardProps extends ProfileContentBaseProps {
    user: UserProfileDetails
}


const PaymentHistoryProfileCard = ({ user, className, delay, show }: PaymentHistoryProfileCardProps) => {

    const [data, setData] = useState<PaymentHistoryItem[]>([])
    const [allData, setAllData] = useState<PaymentHistoryItem[]>([])
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)
    const perPage = 10

    const setCurrentData = (data: typeof allData) => {
        const newMin = perPage * (page - 1)
        setData(allData.slice(newMin, Math.min(data.length, newMin + perPage)).sort((a, b) => new Date(b.date).valueOf() - new Date(a.date.valueOf()).valueOf()))
    }
    useEffect(() => {
        setCurrentData(allData)
    }, [page])

    useEffect(() => {
        const d = formatPaymentHistoryForTable(user?.purchaseHistory)
        setAllData(d)
        setMaxPage(Math.ceil(d.length / perPage))
        const min = perPage * (page - 1)
        setData(d.slice(min, Math.min(d.length, min + perPage)))
    }, [])

    const nextPage = () => {
        if (page < maxPage) {
            setPage(page + 1)
        }
    }

    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const setActiveFilter = (val: TRANSACTIONSTATUS | "all" | "sold" | "bought" | null) => {
        if (val === null) {
            return setCurrentData(allData)
        }
        if (val === "bought") {
            return setCurrentData(allData.filter((d) => d.type === "bought"))
        }
        if (val === "sold") {
            return setCurrentData(allData.filter((d) => d.type === "sold"))
        }
        setCurrentData(allData.filter((f) => f.transactionStatus === transactionStatusLabelMap[val as keyof typeof transactionStatusLabelMap]))
    }
    return (
        <ProfileItemCard
            title="Payment History"
            className={className}
            delay={delay}
            show={show}
            titleClasses={"pr-16"}
            titleRight={<SelectActiveListingFilter
                setActiveFilter={setActiveFilter}
                className={""}
                extraItems={[
                    {
                        value: "sold",
                        label: "Seller"
                    },
                    {
                        value: "bought",
                        label: "Buyer"
                    }
                ]}
            />}
        >
            <PaymentHistoryTable
                data={data}
                page={page}
                perPage={perPage}
                maxPage={maxPage}
                nextPage={nextPage}
                previousPage={previousPage}
                allDataLength={allData.length}
            />
        </ProfileItemCard>
    )
}


PaymentHistoryProfileCard.displayName = "PaymentHistoryProfileCard"


export default PaymentHistoryProfileCard;
