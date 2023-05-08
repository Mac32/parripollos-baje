import NavBar from './NavBar'
import SectionFooter from './SectionFooter'

interface prop {
  children: JSX.Element
}

export default function Layout ({ children }: prop): JSX.Element {
  return (
    <>
      <NavBar />
      <div className='scroll-smooth'>
        {children}
      </div>
      <SectionFooter />
    </>
  )
}
