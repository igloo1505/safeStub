import PageContentWrapper from '#/components/layout/pageContentWrapper'
import Hero from '#/components/pageSpecific/landing/hero'

export default function Home() {
    return (
        <PageContentWrapper noParent>
            <main className={"w-full h-fit min-h-[calc(100vh-var(--nav-height))]"}>
                <Hero />
            </main>
        </PageContentWrapper>
    )
}
