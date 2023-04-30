import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import SectionFeedBack from '@/components/SectionFeedBack'
import SectionGalery from '@/components/SectionGalery'
import SectionOurChef from '@/components/SectionOurChef'
import SectionOurHistory from '@/components/SectionOurHistory'

export default function Home (): JSX.Element {
  return (
    <Layout>
      <>
        <Hero />
        <SectionOurHistory />
        <SectionOurChef />
        <SectionGalery />
        <SectionFeedBack />
      </>

    </Layout>
  )
}
