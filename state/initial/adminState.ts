import { Faq } from "@prisma/client"

const getLink = (label: string, href: string) => `<a href="${href}" rel="noopener noreferrer">${label}</a>`

const defaultEditFaqBody = `<p>Highlight or hover to add rich text. All keyboard shortcuts like cmd-b for <strong>bold</strong> and cmd-i for <em>italic</em> work like you'd expect. All links are relative to the root, so ${getLink("\"/\"", "/")} is home, ${getLink("\"/login\"", "/login")} is the login page... etc.</p>`


export interface FaqFormData extends Pick<Faq, "body" | "title" | "subtitle"> {
    id?: number
}


interface AdminStateType {
    editing: {
        faq: FaqFormData
    }
}

const initialAdminState: AdminStateType = {
    editing: {
        faq: {
            title: "How to sign up.",
            subtitle: "",
            body: defaultEditFaqBody
        }
    }
}


export default initialAdminState
