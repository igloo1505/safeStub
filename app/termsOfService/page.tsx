import { allTermsOfServices } from '#/.contentlayer/generated';
import PageContentWrapper from '#/components/layout/pageContentWrapper';
import MarkdownDateBar from '#/components/utility/markdown/dateBar';
import MarkdownContent from '#/components/utility/markdown/markdownContent';
import { redirect } from 'next/navigation';
import React from 'react'


const TermsOfServicePage = () => {
    const policy = allTermsOfServices[0]
    if (!policy) return redirect("/")
    return (
        <PageContentWrapper>
            <MarkdownDateBar date={policy.lastUpdated} leadingText={"Last Updated on"} />
            <MarkdownContent html={policy.body.html} />
        </PageContentWrapper>
    )
}


TermsOfServicePage.displayName = "TermsOfServicePage"


export default TermsOfServicePage;
