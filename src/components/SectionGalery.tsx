import TitleOfSection from './TitleOfSection'
import Image from 'next/image'
import cliente1 from '../assets/Images/cliente-1.jpg'
import cliente2 from '../assets/Images/cliente-2.jpg'
import cheft from '../assets/Images/chef-1.jpg'
import parrilla2 from '../assets/Images/parrilla-2.jpg'
import parrilla3 from '../assets/Images/parrilla-3.jpg'
import parrilla4 from '../assets/Images/parrilla-4.jpg'

export default function SectionGalery (): JSX.Element {
  return (
    <div id='galery' className='mx-auto lg:px-32 '>
      <div className='mb-5'>
        <TitleOfSection>Galería</TitleOfSection>
      </div>
      <div className='flex flex-wrap md:-m-2'>
        <div className='flex w-1/2 flex-wrap'>
          <div className='w-1/2 p-1 md:p-2'>
            <Image
              alt='Cliente de parripollos BAJE'
              className='block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-300'
              src={cliente1}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2'>
            <Image
              alt='Cliente de parripollos BAJE'
              className='block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-300'
              src={cliente2}
            />
          </div>
          <div className='w-full p-1 md:p-2'>
            <Image
              alt='parrilla de parripollos BAJE'
              className='block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-300'
              src={cheft}
            />
          </div>
        </div>
        <div className='flex w-1/2 flex-wrap'>
          <div className='w-full p-1 md:p-2'>
            <Image
              alt='Parrilla de parripollos BAJE'
              className='block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-300'
              src={parrilla2}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2'>
            <Image
              alt='Parrilla de parripollos BAJE'
              className='block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-300'
              src={parrilla3}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2'>
            <Image
              alt='Parrilla de parripollos BAJE'
              className='block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-300'
              src={parrilla4}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
