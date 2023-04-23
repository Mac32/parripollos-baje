import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import SectionOurChef from '@/components/SectionOurChef'
import SectionOurHistory from '@/components/SectionOurHistory'

export default function Home (): JSX.Element {
  return (
    <Layout>
      <>
        <Hero />
        <SectionOurHistory />
        <SectionOurChef />
      </>

    </Layout>
  )
}
