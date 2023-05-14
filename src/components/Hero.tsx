import Image from 'next/image'
import BackgroundHero from '../assets/Images/grilling.jpg'
import Link from 'next/link'

export default function Hero (): JSX.Element {
  return (
    <header className='w-full lg:h-[30rem] overflow-hidden snap-center'>
      <div className='md:absolute md:w-64 lg:w-2/5 md:h-[32rem] lg:h-[30rem] bg-[#171717]/80 lg:block' />
      <div className='hidden md:block absolute md:top-[230px] lg:top-[220px] lg:left-[8.35rem] md:-left-[6.5rem] -rotate-[135deg] border-b-[#171717]/80 border-transparent lg:border-[21.3rem] md:border-[22.55rem] sm:hidden' />
      <h1 className='md:bg-transparent bg-[#171717]/80  w-full absolute pt-3 pl-3 text-2xl md:text-5xl text-white md:mt-16 italic font-serif lg:ml-14'>Parripollos <span className='block text-3xl ml-20 md:mt-10 md:text-7xl lg:text-9xl'>B.A.J.E.</span></h1>

      <p className='w-full md:bg-transparent bg-[#171717]/80 absolute mt-20 px-1 italic text-white md:text-2xl underline font-serif md:mt-60 lg:mt-72 md:w-1/2 md:ml-28 '>Donde la calidad y el buen servicio se unen haciendo tus comidas especiales, descubre el sabor en cada bocado.</p>

      <Link className='absolute text-white md:text-xl font-serif md:mt-96 lg:mt-72 md:w-60 text-center lg:ml-28 mt-[9.8rem] ml-24 lg:bottom-10 rounded-md p-3 border border-[#F2A81D] hover:scale-105 hover:bg-[#F2A81D]/50 ease-in-out duration-300' href='/menu'>Nuestro menu</Link>

      <Image
        src={BackgroundHero}
        alt='Grilling'
        width={1800}
        height={1080}
        className='object-cover'
      />
    </header>
  )
}
