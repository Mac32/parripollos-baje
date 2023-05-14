import ButtonNavBar from './ButtonNavBar'
import Logo from './Logo'
import Menu from './icons/Menu'

export default function NavBar (): JSX.Element {
  const handlerMenu = (): void => {
    document.getElementById('menu')?.classList.toggle('hidden')
  }
  return (
    <nav className='bg-[#0D0D0D]/80 h-20'>
      <ul className='flex w-11/12 mx-auto justify-around lg:flex-row lg:pt-0 pt-4 items-center'>
        <li>
          <Logo />
        </li>
        <div id='menu' className='-ml-8 lg:flex lg:static lg:flex-row flex flex-col lg:justify-around items-center space-y-6 lg:space-y-0 lg:w-3/4 w-full top-20 lg:top-0 z-50 absolute lg:bg-transparent bg-[#171717]/95 py-10 lg:py-[1.61rem] hidden'>
          <ButtonNavBar href='/'>Home</ButtonNavBar>
          <ButtonNavBar href='/menu'>Menú</ButtonNavBar>
          <ButtonNavBar href='/galery'>Galería</ButtonNavBar>
          <ButtonNavBar href='/ourhistory'>Nuestra Historia</ButtonNavBar>
          <ButtonNavBar href='/ourchef'>Nuestro Chef</ButtonNavBar>
        </div>
        <button className='lg:hidden' onClick={handlerMenu}>
          <Menu />
        </button>
      </ul>
    </nav>
  )
}
