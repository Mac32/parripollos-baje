import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import SectionOurHistory from '@/components/SectionOurHistory'

export default function Home (): JSX.Element {
  return (
    <Layout>
      <>
        <Hero />
        <SectionOurHistory />
      </>

    </Layout>
  )
}
