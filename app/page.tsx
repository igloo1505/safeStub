import { getServerSession } from '#/actions/server/auth'
import PageContentWrapper from '#/components/layout/pageContentWrapper'
/* import Hero1 from '#/components/pageSpecific/landing/hero/hero1' */
/* import Hero2 from '#/components/pageSpecific/landing/hero/hero2' */
/* import Hero3 from '#/components/pageSpecific/landing/hero/hero3' */
/* import Hero4 from '#/components/pageSpecific/landing/hero/hero4' */
import Hero from '#/components/pageSpecific/landing/hero/hero5'
import "#/styles/landing.scss"


const Home = async () => {
    const session = await getServerSession()
    return (
        <PageContentWrapper noParent noNav>
            <main className={"w-full h-fit min-h-[calc(100vh-var(--nav-height))]"}>
                <Hero session={session} />
            </main>
        </PageContentWrapper>
    )
}

export default Home
