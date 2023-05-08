import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import SectionContact from '@/components/SectionContact'
import SectionFeedBack from '@/components/SectionFeedBack'
import SectionGalery from '@/components/SectionGalery'
import SectionOurChef from '@/components/SectionOurChef'
import SectionOurHistory from '@/components/SectionOurHistory'
import Head from 'next/head'

export default function Home (): JSX.Element {
  return (
    <>
      <Head>
        <title>Parripollos B.A.J.E.</title>
      </Head>
      <Layout>
        <div className='snap-proximity snap-y'>
          <Hero />
          <SectionOurHistory />
          <SectionOurChef />
          <SectionGalery />
          <SectionFeedBack />
          <SectionContact />
        </div>

      </Layout>
    </>
  )
}
