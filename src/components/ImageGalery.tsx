import Image, { StaticImageData } from 'next/image'

interface props {
  src: StaticImageData | string
  alt: string
  size?: number
}

export default function ImageGalery ({ src, alt, size = 200 }: props): JSX.Element {
  return (
    <Image
      className=' object-contain aspect-square  hover:scale-105 ease-in-out duration-300 rounded-lg hover:bg-[#F2A81D]/80 p-2 w-full'
      src={src}
      alt={alt}
      width={size}
      height={size}
    />
  )
}
