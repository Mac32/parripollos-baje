import ButtonNavBar from './ButtonNavBar'
import Logo from './Logo'

export default function NavBar (): JSX.Element {
  return (
    <nav className='bg-[#0D0D0D]/80 h-20'>
      <ul className='flex justify-around pt-4'>
        <li>
          <Logo />
        </li>
        <div className='lg:flex justify-around w-2/3 hidden'>
          <ButtonNavBar href='/'>Home</ButtonNavBar>
          <ButtonNavBar href='/menu'>Menú</ButtonNavBar>
          <ButtonNavBar href='/galery'>Galería</ButtonNavBar>
          <ButtonNavBar href='/ourhistory'>Nuestra Historia</ButtonNavBar>
          <ButtonNavBar href='/ourchef'>Nuestro Chef</ButtonNavBar>
        </div>
      </ul>
    </nav>
  )
}
