import React from 'react'
import Link from 'next/link';
import InstagramSocialIcon from '#/assets/social/instagram'
import FacebookSocialIcon from '#/assets/social/facebook'
import TwitterXSocialIcon from '#/assets/social/twitterX'
import { QuickLinkType } from '#/types/query';
import FooterCategory from './footerCategory';
import Logo from '#/components/brand/logo';
import appConfig from "#/data/appConfig.json"
import { Route } from 'next';
import LogoWithName from '#/components/brand/logoWithName';


const getQuickLinks = () => {
    const quickLinks: QuickLinkType[] = [
        {
            category: "docs",
            label: "Scipy",
            href: "https://scipy.org/"
        },
        {
            category: "youtube",
            label: "Professor Leonard",
            href: "https://www.youtube.com/@ProfessorLeonard"
        },
        {
            category: "youtube",
            label: "MIT",
            href: "https://www.youtube.com/@mitocw"
        },
        {
            category: "lectures",
            label: "MIT: General Relativity",
            href: "https://www.youtube.com/playlist?list=PLUl4u3cNGP629n_3fX7HmKKgin_rqGzbx"
        },
        {
            category: "lectures",
            label: "Susskind: General Relativity",
            href: "https://www.youtube.com/playlist?list=PLpGHT1n4-mAvcXwzOIz3dHnGZaQP1LEib"
        },
        {
            category: "lectures",
            label: "Susskind: Special Relativity",
            href: "https://www.youtube.com/playlist?list=PLD9DDFBDC338226CA"
        },
    ]

    const groupedQuickLinks: { [k in QuickLinkType['category']]?: QuickLinkType[] } = {
        locations: [],
        youtube: [],
        lectures: []
    }

    quickLinks.forEach((l) => {
        if (!groupedQuickLinks[l.category]) {
            groupedQuickLinks[l.category] = []
        }
        groupedQuickLinks[l.category]?.push(l)
    })

    return groupedQuickLinks
}




const Footer = () => {
    let groupedQuickLinks = getQuickLinks()
    console.log("groupedQuickLinks: ", groupedQuickLinks)
    return (
        <footer className="bg-gray-50 dark:bg-gray-950 mt-4 border-t dark:border-t-gray-800 z-[10] relative sidebarAdjust group-[.no-nav-transparent]/html:dark:bg-opacity-100" id="footer-panel">
            <div className="container p-6 mx-auto">
                <div className="lg:flex">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6">
                            <Link href="/" className={"h-12 w-auto"}>
                                <LogoWithName />
                            </Link>
                            <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Quick links to Vercel & Github</p>
                            <div className="flex mt-6 -mx-2">
                                <Link href={appConfig.twitter.url as Route}
                                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Twitter">
                                    <TwitterXSocialIcon className={"w-5 h-5 fill-current"} />
                                </Link>
                                <Link href={appConfig.facebook.url as Route}
                                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Facebook"
                                >
                                    <FacebookSocialIcon className={"w-5 h-5 fill-current"} />
                                </Link>
                                <Link href={appConfig.instagram.url as Route}
                                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                    aria-label="Instagram"
                                >
                                    <InstagramSocialIcon className={"w-5 h-5 fill-current"} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            <FooterCategory items={groupedQuickLinks.locations} title="Navigation" />
                            <FooterCategory items={groupedQuickLinks.youtube} title="Legal" />
                            <FooterCategory items={groupedQuickLinks.lectures} title="Profile" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-center text-gray-500 dark:text-gray-400 mt-2">{`© Safe Stub ${new Date().getFullYear()} - All rights reserved, but do your thang`}</p>
                </div>
            </div>
        </footer>
    )
}


Footer.displayName = "Footer"


export default Footer;
