import Layout from '@/components/Layout'
import PriceMenu from '@/components/PriceMenu'
import Grillin from '../../assets/Images/barbecue.jpg'
import Pollo from '../../assets/Images/pollo.jpg'
import Parrilla from '../../assets/Images/parrilla.jpg'
import Raciones from '../../assets/Images/yuca.jpg'
import MenuCard from '@/components/MenuCard'
import Bebidas from '../../assets/Images/fruits.jpg'
import TitlePage from '@/components/TitlePage'
import Head from 'next/head'

export default function Menu (): JSX.Element {
  return (
    <>
      <Head>
        <title>Menú | Parripollos B.A.J.E.</title>
      </Head>
      <Layout>
        <>
          <TitlePage>Nuestro Menú</TitlePage>
          <main>
            <section className='text-[#F2A81D] bg-[#171717]/80 text-2xl flex flex-col'>
              <MenuCard title='Pollo' image={Pollo}>
                <ul>
                  <li>1/4 de pollo = <PriceMenu>90 Bs</PriceMenu></li>
                  <li>2/4 de pollo = <PriceMenu>180 Bs</PriceMenu></li>
                  <li>3/4 de pollo = <PriceMenu>270 Bs</PriceMenu></li>
                  <li>1 pollo = <PriceMenu>360 Bs</PriceMenu></li>
                </ul>
              </MenuCard>
              <MenuCard title='Parripollos' image={Grillin} variation={2}>
                <>
                  <ul>
                    <li>Parripollo para 1 persona =<PriceMenu>180 Bs</PriceMenu></li>
                    <li>Parripollo para 2 personas =<PriceMenu>360 Bs</PriceMenu></li>
                    <li>Parripollo para 3 persona =<PriceMenu>540 Bs</PriceMenu></li>
                  </ul>
                </>
              </MenuCard>
              <MenuCard title='Parrillas' image={Parrilla}>
                <ul>
                  <li>1 Parrilla = <PriceMenu>160 Bs</PriceMenu></li>
                </ul>
              </MenuCard>
              <MenuCard title='Raciones' image={Raciones} variation={2}>
                <ul>
                  <li>Racion de Chorizo =<PriceMenu>80 Bs</PriceMenu></li>
                  <li>Racion de Yuca =<PriceMenu>25 Bs</PriceMenu></li>
                </ul>
              </MenuCard>
              <MenuCard title='Bebidas' image={Bebidas}>
                <ul>
                  <li>Jugos Naturales =<PriceMenu>20 Bs</PriceMenu></li>
                </ul>
              </MenuCard>
            </section>
          </main>
        </>
      </Layout>
    </>
  )
}
