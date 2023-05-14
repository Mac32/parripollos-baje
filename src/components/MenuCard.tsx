import Image, { StaticImageData } from 'next/image'
import TitleMenu from './TitleMenu'

interface props {
  children: JSX.Element
  title: string
  image: StaticImageData | string
  variation?: 1 | 2
}

export default function MenuCard ({ children, title, image, variation = 1 }: props): JSX.Element {
  if (variation === 1) {
    return (
      <div className='flex md:flex-row flex-col justify-around'>
        <div className='flex flex-col justify-center flex-1 items-center py-3'>
          <TitleMenu>{title}</TitleMenu>
          {children}
        </div>
        <Image
          src={image}
          className='object-cover flex-1'
          alt='Imagen de pollo asado'
          width={400}
          height={400}
        />
      </div>
    )
  } else {
    return (
      <div className='flex md:flex-row flex-col-reverse justify-around'>
        <Image
          src={image}
          className='object-cover flex-1'
          alt='Imagen de pollo asado'
          width={400}
          height={400}
        />
        <div className='flex flex-col justify-center items-center flex-1 py-3'>
          <TitleMenu>{title}</TitleMenu>
          {children}
        </div>

      </div>
    )
  }
}
