import PageContentWrapper from '#/components/layout/pageContentWrapper';
import AboutUsProcess from '#/components/pageSpecific/about/aboutUsProcess';
import AboutUsHero from '#/components/pageSpecific/about/hero';
import React from 'react'



const AboutUsPage = () => {
    return (
        <PageContentWrapper>
            <AboutUsHero />
            <AboutUsProcess />
        </PageContentWrapper>
    )
}


AboutUsPage.displayName = "AboutUsPage"


export default AboutUsPage;
