import { allPrivacyPolicies } from '#/.contentlayer/generated';
import PageContentWrapper from '#/components/layout/pageContentWrapper';
import MarkdownDateBar from '#/components/utility/markdown/dateBar';
import MarkdownContent from '#/components/utility/markdown/markdownContent';
import { redirect } from 'next/navigation';
import React from 'react'



const PrivacyPolicyPage = () => {
    const policy = allPrivacyPolicies[0]
    if (!policy) return redirect("/")
    return (
        <PageContentWrapper>
            <MarkdownDateBar date={policy.lastUpdated} leadingText={"Last Updated on"} />
            <MarkdownContent html={policy.body.html} />
        </PageContentWrapper>
    )
}


PrivacyPolicyPage.displayName = "PrivacyPolicyPage"


export default PrivacyPolicyPage;
