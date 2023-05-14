import Layout from '@/components/Layout'
import P from '@/components/P'
import TitlePage from '@/components/TitlePage'
import Head from 'next/head'
import Chef from '../../assets/Images/chef-1.jpg'
import Image from 'next/image'

export default function OurChef (): JSX.Element {
  return (
    <>
      <Head>
        <title>Nuestro Chef | Parripollos B.A.J.E</title>
      </Head>
      <Layout>
        <main>
          <TitlePage>Nuestro Chef</TitlePage>
          <section className='container mx-auto text-white bg-[#171717]/80 md:p-12 px-24 p-3'>
            <div className='lg:float-left lg:m-3 pb-6'>
              <Image
                className='object-cover mx-auto'
                alt='Chef Pedro Garcia'
                src={Chef}
                width={220}
                height={220}
              />
            </div>
            <P>
              Pedro García, desde joven, descubrió su pasión por la coctelería y comenzó trabajando como bartender en varios bares y restaurantes. Sabía cómo preparar los mejores tragos y ganó mucha experiencia en atención al cliente.
            </P>
            <P>
              Con el tiempo, Pedro decidió ampliar sus habilidades culinarias y comenzó a trabajar como mesonero. Fue en este trabajo donde descubrió su talento para la cocina y comenzó a aprender más sobre el arte de cocinar.
            </P>
            <P>
              Después de años de trabajo duro y dedicación, Pedro realizó varios cursos para perfeccionar sus habilidades culinarias. Con su pasión por la cocina y su experiencia en atención al cliente, Pedro decidió que era el momento de cumplir su sueño de tener su propio negocio.
            </P>
            <P>
              Fue entonces cuando decidió construir su propia pollería: Parripollos. Desde el primer día, Pedro se dedicó a hacer de Parripollos un lugar donde sus clientes pudieran disfrutar de la mejor comida, el mejor servicio y la mejor atención.
            </P>
            <P>
              Con su experiencia en atención al cliente, habilidades culinarias y pasión por los negocios, Pedro ha logrado hacer de Parripollos un negocio muy exitoso y querido por la comunidad. Su historia es un ejemplo de cómo la perseverancia, el trabajo duro y la pasión por lo que uno hace, pueden llevar a grandes logros.
            </P>
            <P>
              Hoy en día, Parripollos sigue siendo un lugar donde puedes encontrar la mejor comida y la atención más personalizada. Ven a visitarnos y descubre la historia detrás de nuestra deliciosa comida.
            </P>
          </section>
        </main>
      </Layout>
    </>
  )
}
