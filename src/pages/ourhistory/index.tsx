import Layout from '@/components/Layout'
import Logo from '@/components/Logo'
import P from '@/components/P'
import TitlePage from '@/components/TitlePage'
import Head from 'next/head'

export default function OurHistory (): JSX.Element {
  return (
    <Layout>
      <>
        <Head>
          <title>Nuestra Historia | Parripollos B.A.J.E.</title>
        </Head>
        <main className='container mx-auto'>
          <TitlePage>Nuestra Historia</TitlePage>
          <section className='text-white bg-[#171717]/80 p-12 px-28'>
            <div className='float-left mr-3'>
              <Logo size={200} />
            </div>
            <P>
              Parripollos es una pollería familiar con una historia muy especial detrás de su nombre. Todo comenzó hace varios años, cuando Pedro García, un joven emprendedor, decidió iniciar su propio negocio de venta de pollos asados en Venezuela.
            </P>
            <P>
              Pedro trabajó arduamente para construir su pollería desde cero, dedicando su tiempo y esfuerzo a cada detalle. Con el tiempo, el negocio comenzó a crecer y a prosperar, convirtiéndose en un lugar muy popular para comprar pollos asados en la zona.
            </P>
            <P>
              Pero durante el difícil período de crisis en Venezuela, la pollería se vio obligada a cerrar debido a la falta de materia prima para trabajar. Fue un momento muy difícil para todos en la familia, pero nunca perdieron la fe y la esperanza de que algún día volverían a abrir las puertas de Parripollos.
            </P>
            <P>
              Después de varios años de trabajo duro y perseverancia, finalmente llegó el momento en que Parripollos pudo reabrir sus puertas al público. Y lo más sorprendente es que muchas personas que habían sido clientes fieles de la pollería en el pasado, regresaron de nuevo para comprar los productos de calidad que tanto los caracterizan.
            </P>
            <P>
              Hoy en día, Parripollos sigue siendo una pollería muy exitosa y un lugar muy querido por la comunidad. El nombre de Parripollos, que proviene de las iniciales de los hijos de Pedro García: Benitza, Ángel, Jesús y Emmanuel, es un reflejo de la dedicación y el amor que la familia ha puesto en este negocio desde el principio.
            </P>
            <P>
              Si buscas un lugar donde encontrar productos de calidad y atención personalizada, Parripollos es la opción perfecta. Ven a visitarnos y descubre la historia detrás de nuestra deliciosa comida.
            </P>
          </section>
        </main>
      </>
    </Layout>
  )
}
