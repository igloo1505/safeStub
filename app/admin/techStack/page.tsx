import { allTechStacks } from '#/.contentlayer/generated/index.mjs'
import PageContentWrapper from '#/components/layout/pageContentWrapper'
import MarkdownContent from '#/components/utility/markdown/markdownContent'
import { isAdminServer } from '#/lib/auth/isAdminServer'
import { redirect } from 'next/navigation'
import React from 'react'
import "#/styles/documentationMarkdown.scss"


const TechStack = async () => {
    const isAdmin = await isAdminServer()
    if (!isAdmin) {
        return redirect("/")
    }
    const techstackData = allTechStacks[0]
    return (
        <PageContentWrapper>
            <div className={"w-5/6 max-w-screen-xl documentation"}>
                <MarkdownContent html={techstackData.body.html} />
            </div>
        </PageContentWrapper>
    )
}


TechStack.displayName = "TechStack"


export default TechStack;
