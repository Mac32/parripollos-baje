import Layout from '@/components/Layout'
import TitlePage from '@/components/TitlePage'
import { images } from '@/data/images'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const ImageGalery = dynamic(async () => await import('../../components/ImageGalery'), {
  loading: () => <p>Loading...</p>
})

export default function Galery (): JSX.Element {
  return (
    <>
      <Head>
        <title>Galería | Parripollos B.A.J.E.</title>
      </Head>
      <Layout>
        <main className='w-11/12 mx-auto'>
          <TitlePage>Galería</TitlePage>
          <section className='grid lg:grid-cols-4 gap-3 bg-[#171717]/80 p-6'>
            {
            images !== null && images !== undefined
              ? images.map((current, index) => {
                return (
                  <ImageGalery key={index} src={current.src} alt={current.alt} />
                )
              })
              : null
          }
          </section>
        </main>
      </Layout>
    </>
  )
}
