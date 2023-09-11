import { getServerSession } from '#/actions/server/auth'
import PageContentWrapper from '#/components/layout/pageContentWrapper'
import FeaturedSection from '#/components/pageSpecific/landing/featured/featuredSection'
import Hero from '#/components/pageSpecific/landing/hero/hero'
import "#/styles/landing.scss"


const Home = async () => {
    const session = await getServerSession()
    return (
        <PageContentWrapper noParent noNav>
            <main className={"w-full h-fit"}>
                <Hero session={session} />
                <FeaturedSection />
            </main>
        </PageContentWrapper>
    )
}

export default Home
