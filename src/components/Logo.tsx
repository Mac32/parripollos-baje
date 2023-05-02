import Image from 'next/image'
import Logotipo from '../assets/Images/Logo.png'
import Link from 'next/link'

interface props {
  size?: number
}

export default function Logo ({ size = 48 }: props): JSX.Element {
  return (
    <Link href='/'>
      <Image
        src={Logotipo}
        alt='Logo de la pagina'
        width={size}
        height={size}
      />
    </Link>

  )
}
