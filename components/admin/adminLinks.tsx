import React from 'react'
import MarkdownContent from '../utility/markdown/markdownContent';
import { allAdminLinks } from '#/.contentlayer/generated/index.mjs';


interface AdminLinksProps {

}

const AdminLinks = (props: AdminLinksProps) => {
    const content = allAdminLinks[0]
    return (
        <div className={"w-full h-fit flex flex-col justify-center items-start mt-3 px-4 md:px-6"}>
            <MarkdownContent html={content.body.html} />
        </div>
    )
}


AdminLinks.displayName = "AdminLinks"


export default AdminLinks;
