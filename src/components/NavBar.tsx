import ButtonNavBar from './ButonNavBar'
import Logo from './Logo'

export default function NavBar (): JSX.Element {
  return (
    <nav className='bg-[#0D0D0D]/80 h-20'>
      <ul className='flex justify-around pt-4'>
        <li>
          <Logo />
        </li>
        <ButtonNavBar href='/'>Home</ButtonNavBar>
        <ButtonNavBar href='/menu'>Menu</ButtonNavBar>
        <ButtonNavBar href='#galery'>Galeria</ButtonNavBar>
        <ButtonNavBar href='#contact'>Contacto</ButtonNavBar>
      </ul>
    </nav>
  )
}
