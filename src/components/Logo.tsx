import Image from 'next/image'
import Logotipo from '../assets/Images/Logo.png'
import Link from 'next/link'

export default function Logo (): JSX.Element {
  return (
    <Link href='/'>
      <Image
        src={Logotipo}
        alt='Logo de la pagina'
        width={48}
        height={48}
      />
    </Link>

  )
}
