import Image from 'next/image'
import chef from '../assets/Images/chef.jpg'
import TitleOfSection from './TitleOfSection'
import Link from 'next/link'
import ButtonOfSection from './ButtonOfSection'

export default function SectionOurCheft (): JSX.Element {
  return (
    <div className='flex justify-around pl-32 h-[30rem] bg-[#171717]/80'>
      <div className='flex flex-col justify-center'>
        <Image
          className=' w-4/5 mx-auto'
          src={chef}
          alt='Image of a fire'
          width={350}
        />
      </div>
      <div className='w-[56%] mr-16'>
        <TitleOfSection>Nuestro Chef</TitleOfSection>
        <div className='text-white mt-6'>
          <p>
            Pedro García, desde joven, descubrió su pasión por la coctelería y comenzó trabajando como bartender en varios bares y restaurantes. Sabía cómo preparar los mejores tragos y ganó mucha experiencia en atención al cliente.
          </p>
          <p className='mt-2'>
            Con el tiempo, Pedro decidió ampliar sus habilidades culinarias y comenzó a trabajar como mesonero. Fue en este trabajo donde descubrió su talento para la cocina y comenzó a aprender más sobre el arte de cocinar.
          </p>
          <p className='mt-2'>
            Después de años de trabajo duro y dedicación, Pedro realizó varios cursos para perfeccionar sus habilidades culinarias. Con su pasión por la cocina y su experiencia en atención al cliente, Pedro decidió que era el momento de cumplir su sueño de tener su propio negocio.
          </p>
          <div className='flex flex-col mt-8'>
            <ButtonOfSection href='/ourchef'>Conoce mas</ButtonOfSection>
          </div>
        </div>
      </div>
    </div>
  )
}
