"use client"
import { client } from "#/trpc/client"
import { base64ToUint8Array } from "#/utils/base64ToUInt"
import { useEffect, useState } from "react"
import '@ducanh2912/next-pwa/workbox'


export const useGCMSubscription = (userId?: string | null) => {
    const [subscription, setSubscription] = useState<PushSubscription | null>(null)
    const [subscribed, setIsSubscribed] = useState(false)
    const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)

    const getRemoteGCMSubscription = async () => {
        if (!userId) return
        let sub = await client.getGcmSubscription.query(userId)
        sub ? setSubscription(typeof sub === "string" ? JSON.parse(sub) : sub) : setSubscription(null)
    }

    useEffect(() => {
        if (userId) {
            getRemoteGCMSubscription()
        }
    }, [userId])

    useEffect(() => {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window?.workbox !== undefined) {
            // run only in browser
            navigator.serviceWorker.ready.then(reg => {
                reg.pushManager.getSubscription().then(sub => {
                    if (sub && !(sub.expirationTime && Date.now() > sub.expirationTime - 5 * 60 * 1000)) {
                        setSubscription(sub)
                        setIsSubscribed(true)
                    }
                })
                setRegistration(reg)
            })
        }
    }, [])
    const subscribeOnClick = async (e: Event) => {
        e.preventDefault()
        const sub = await registration?.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: base64ToUint8Array(process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY!)
        })
        // TODO: you should call your API to save subscription data on server in order to send web push notification from server
        if (sub && userId) {
            setSubscription(sub)
            client.setUserGCMRegistration.mutate({ id: userId, gcmSubscription: sub })
            setIsSubscribed(true)
            console.log('web push subscribed!')
            console.log(sub)
        }
    }

    const unsubscribeOnClick = async (e: Event) => {
        e.preventDefault()
        await subscription?.unsubscribe()
        // TODO: you should call your API to delete or invalidate subscription data on server
        setSubscription(null)
        setIsSubscribed(false)
        console.log('web push unsubscribed!')
    }
    return {
        subscription,
        subscribed,
        registration,
        subscribeOnClick
    }
}


