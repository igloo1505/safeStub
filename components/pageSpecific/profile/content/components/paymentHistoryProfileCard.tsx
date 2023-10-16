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
    const [currentFilter, setCurrentFilter] = useState<TRANSACTIONSTATUS | "all" | "sold" | "bought" | null>("all")
    const [dataLength, setDataLength] = useState(0)
    const perPage = 10

    const setCurrentData = (_data: typeof allData) => {
        console.log("data: ", _data)
        setDataLength(_data.length)
        const newMin = perPage * (page - 1)
        setData(_data.slice(newMin, Math.min(_data.length, newMin + perPage)).sort((a, b) => new Date(b.date).valueOf() - new Date(a.date.valueOf()).valueOf()))
    }

    const applyActiveFilter = (d: typeof allData, filter: typeof currentFilter) => {
        console.log("filter: ", filter)
        if (filter === null) {
            return setCurrentData(d)
        }
        if (filter === "bought") {
            return setCurrentData(d.filter((d) => d.type === "bought"))
        }
        if (filter === "sold") {
            return setCurrentData(d.filter((d) => d.type === "sold"))
        }

        if (filter === "inProgress") {
            return setCurrentData(d.filter((d) => d.transactionStatus === "Awaiting Transfer"))
        }
        setCurrentData(d.filter((f) => f.transactionStatus === transactionStatusLabelMap[filter as keyof typeof transactionStatusLabelMap]))
    }

    useEffect(() => {
        applyActiveFilter(allData, currentFilter)
    }, [page, currentFilter])

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

    return (
        <ProfileItemCard
            title="Payment History"
            className={className}
            delay={delay}
            show={show}
            titleClasses={"pr-16"}
            titleRight={<SelectActiveListingFilter
                setActiveFilter={(value) => {
                    setPage(1)
                    setCurrentFilter(value)
                }}
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
                allDataLength={dataLength}
            />
        </ProfileItemCard>
    )
}


PaymentHistoryProfileCard.displayName = "PaymentHistoryProfileCard"


export default PaymentHistoryProfileCard;
