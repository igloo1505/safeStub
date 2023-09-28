import { ProfileActiveType } from "#/types/profile"
import { UserIcon, CreditCardIcon, DollarSignIcon, BookOpenIcon, UsersIcon, SettingsIcon, LogOutIcon } from "lucide-react"
import { UserProfileDetails } from "./profilePageContainer"
import { SidePanelItemProps } from "./sidePanelItem"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"



export interface ProfilePageContainerProps {
    user: UserProfileDetails
    type: ProfileActiveType
}


export const profileNavItems: SidePanelItemProps[] = [
    {
        label: "Profile",
        Icon: ({ className }: { className: string }) => <UserIcon className={className} />,
        clickClass: "profile",
    }, {
        label: "Orders",
        Icon: ({ className }: { className: string }) => <CreditCardIcon className={className} />,
        clickClass: "orders",
    }, {
        label: "Sales",
        Icon: ({ className }: { className: string }) => <DollarSignIcon className={className} />,
        clickClass: "sales",
    }, {
        label: "Active Listings",
        Icon: ({ className }: { className: string }) => <BookOpenIcon className={className} />,
        clickClass: "listings",
    }, {
        label: "Payments",
        Icon: ({ className }: { className: string }) => <UsersIcon className={className} />,
        clickClass: "payments",
    }, {
        label: "Settings",
        Icon: ({ className }: { className: string }) => <SettingsIcon className={className} />,
        clickClass: "settings",
    }, {
        label: "Log Out",
        Icon: ({ className }: { className: string }) => <LogOutIcon className={className} />,
        clickClass: "signout",
    }
]




export const stateClasses = ["sales", "settings", "profile", "payments", "activeListings", "orders"]

export const handleStateToggle = (_class: typeof stateClasses[number], router: AppRouterInstance) => {
    router.push(`/profile?t=${_class}`)
}
