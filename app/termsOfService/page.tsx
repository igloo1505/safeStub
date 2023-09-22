import { allTermsOfServices } from '#/.contentlayer/generated';
import PageContentWrapper from '#/components/layout/pageContentWrapper';
import { redirect } from 'next/navigation';
import React from 'react'



interface TermsOfServicePageProps {

}


const TermsOfServicePage = (props: TermsOfServicePageProps) => {
    const policy = allTermsOfServices[0]
    if (!policy) return redirect("/")
    return (
        <PageContentWrapper>
            <div className="[&>*]:mb-3 [&>*:last-child]:mb-0  w-5/6 max-w-screen-md" dangerouslySetInnerHTML={{ __html: policy.body.html }} />
        </PageContentWrapper>
    )
}


TermsOfServicePage.displayName = "TermsOfServicePage"


export default TermsOfServicePage;
