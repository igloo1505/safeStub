import React from 'react'
import Link from 'next/link';
import InstagramSocialIcon from '#/assets/social/instagram'
import FacebookSocialIcon from '#/assets/social/facebook'
import TwitterXSocialIcon from '#/assets/social/twitterX'
import { QuickLinkType } from '#/types/query';
import FooterCategory from './footerCategory';
import appConfig from "#/data/appConfig.json"
import { Route } from 'next';
import LogoWithName from '#/components/brand/logoWithName';


const getQuickLinks = () => {
    const quickLinks: QuickLinkType[] = [
        {
            category: "legal",
            label: "Privacy",
            href: "/privacy"
        },
        {
            category: "legal",
            label: "Terms of Service",
            href: "/termsOfService"
        },
        {
            category: "user",
            label: "Profile",
            href: "/profile"
        },
        {
            category: "user",
            label: "My Items",
            href: "/profile?myItems"
        },
        {
            category: "user",
            label: "Messages",
            href: "/messages"
        },
        {
            category: "navigation",
            label: "Up Coming",
            href: "/events?sort=upNext"
        },
        {
            category: "navigation",
            label: "Great Deals",
            href: "/events?sort=price"
        },

    ]

    const groupedQuickLinks: { [k in QuickLinkType['category']]?: QuickLinkType[] } = {
        legal: [],
        user: [],
        navigation: []
    }

    quickLinks.forEach((l) => {
        if (!groupedQuickLinks[l.category]) {
            groupedQuickLinks[l.category] = []
        }
        groupedQuickLinks[l.category]?.push(l)
    })

    return groupedQuickLinks
}

const iconClasses = "w-5 h-5 fill-current md:w-8 md:h-8 md:mx-2 lg:w-5 lg:h-5 lg:mx-0"

const Footer = () => {
    let groupedQuickLinks = getQuickLinks()
    return (
        <footer className="bg-background mt-4 border-t border-t-muted z-[1] relative" id="footer-panel">
            <div className="container p-6 mx-auto">
                <div className="lg:flex">
                    <div className="w-full md:-mx-6 lg:w-2/5">
                        <div className="px-6 flex flex-col md:grid md:grid-cols-[auto_1fr] lg:flex lg:flex-col">
                            <div className={"w-full flex flex-col justify-center items-center md:w-fit md:inline-block"}>
                                <Link href="/" className={"h-12 w-auto"}>
                                    <LogoWithName />
                                </Link>
                                <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Quick links to our socials</p>
                            </div>
                            <div className="w-full md:w-fit justify-center items-center flex mt-6 -mx-2 md:place-self-center lg:place-self-start md:mt-0 lg:mt-6 lg:w-fit">
                                <Link href={appConfig.twitter.url as Route}
                                    className="mx-2 transition-colors duration-300 text-foreground hover:text-muted-foreground"
                                    aria-label="Twitter">
                                    <TwitterXSocialIcon className={iconClasses} />
                                </Link>
                                <Link href={appConfig.facebook.url as Route}
                                    className="mx-2 transition-colors duration-300 text-foreground hover:text-muted-foreground"
                                    aria-label="Facebook"
                                >
                                    <FacebookSocialIcon className={iconClasses} />
                                </Link>
                                <Link href={appConfig.instagram.url as Route}
                                    className="mx-2 transition-colors duration-300 text-foreground hover:text-muted-foreground"
                                    aria-label="Instagram"
                                >
                                    <InstagramSocialIcon className={iconClasses} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-around lg:items-start lg:grid lg:gap-6 lg:grid-cols-3">
                            <FooterCategory items={groupedQuickLinks.navigation} title="Navigation" />
                            <FooterCategory items={groupedQuickLinks.legal} title="Legal" />
                            <FooterCategory items={groupedQuickLinks.user} title="Profile" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-center text-gray-500 dark:text-gray-400 mt-4">{`© Safe Stub ${new Date().getFullYear()} - All rights reserved, but do your thang`}</p>
                </div>
            </div>
        </footer>
    )
}


Footer.displayName = "Footer"


export default Footer;
