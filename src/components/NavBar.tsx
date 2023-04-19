import ButtonNavBar from './ButonNavBar'
import Logo from './Logo'

export default function NavBar (): JSX.Element {
  return (
    <nav className='bg-[#0D0D0D]/80 h-20'>
      <ul className='flex justify-around pt-4'>
        <li>
          <Logo />
        </li>
        <ButtonNavBar>Home</ButtonNavBar>
        <ButtonNavBar>Menu</ButtonNavBar>
        <ButtonNavBar>Galeria</ButtonNavBar>
        <ButtonNavBar>Contacto</ButtonNavBar>
      </ul>
    </nav>
  )
}
