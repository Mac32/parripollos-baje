import ButtonNavBar from './ButtonNavBar'
import Logo from './Logo'
import Menu from './icons/Menu'

export default function NavBar (): JSX.Element {
  const handlerMenu = (): void => {
    document.getElementById('menu')?.classList.toggle('hidden')
  }
  return (
    <nav className='bg-[#0D0D0D]/80 h-20'>
      <ul className='flex justify-between w-11/12 mx-auto lg:justify-around pt-4 items-center'>
        <li>
          <Logo />
        </li>
        <div id='menu' className='-ml-4 flex flex-col lg:justify-around items-center space-y-6 lg:w-2/3 w-full top-20 z-50 absolute bg-[#171717]/95 py-10 hidden'>
          <ButtonNavBar href='/'>Home</ButtonNavBar>
          <ButtonNavBar href='/menu'>Menú</ButtonNavBar>
          <ButtonNavBar href='/galery'>Galería</ButtonNavBar>
          <ButtonNavBar href='/ourhistory'>Nuestra Historia</ButtonNavBar>
          <ButtonNavBar href='/ourchef'>Nuestro Chef</ButtonNavBar>
        </div>
        <button onClick={handlerMenu}>
          <Menu />
        </button>
      </ul>
    </nav>
  )
}
