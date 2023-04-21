import Image from 'next/image'
import BackgroundHero from '../assets/Images/grilling.jpg'
import Link from 'next/link'

export default function Hero (): JSX.Element {
  return (
    <div className='w-full h-[30rem] overflow-hidden'>
      <div className='absolute w-2/5 h-[30rem] bg-[#171717]/80' />
      <div className='absolute top-[220px] left-[8.35rem] -rotate-[135deg] border-b-[#171717]/80 border-transparent border-[21.3rem]' />
      <h1 className='absolute text-5xl text-white mt-16 italic font-serif ml-14'>Parripollos <span className='block ml-20 mt-10 text-9xl'>B.A.J.E.</span></h1>

      <p className='absolute text-white text-xl font-serif mt-72 w-1/2 ml-14 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros dolor, lobortis ut diam eget, fringilla scelerisque risus. Cras non enim sit amet risus tempus sodales nec nec tellus.</p>

      <Link className='absolute text-white text-xl font-serif mt-72 w-60 text-center ml-20 bottom-10 rounded-md p-3 bg-[#F2A81D]' href={'/'} >Nuestro menu</Link>

      <Image
        src={BackgroundHero}
        alt='Grilling'
        width={1800}
        height={1080}
        className='object-cover'
      />
    </div>
  )
}
