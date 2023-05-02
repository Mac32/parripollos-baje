import ButtonNavBar from './ButonNavBar'
import Logo from './Logo'

export default function SectionFooter (): JSX.Element {
  return (
    <div className='h-40 text-white flex justify-around items-center bg-[#171717] mt-10'>
      <div>
        <Logo size={90} />
      </div>
      <div className='flex list-none justify-around gap-40'>
        <div className='flex flex-col flex-nowrap gap-10 items-center'>
          <ButtonNavBar href='/menu'>Menu</ButtonNavBar>
          <a target='_blank' href='https://www.facebook.com/profile.php?id=100090846833753' className='hover:scale-105 ease-in-out duration-300 text-white border-b-2 border-b-[#F2A81D] px-4 py-2 mt-2 hover:bg-slate-800/50 rounded-md' rel='noreferrer'>
            Facebook
          </a>
        </div>
        <div className='flex flex-col flex-nowrap gap-10 items-center'>
          <ButtonNavBar href='#galery'>Galeria</ButtonNavBar>
        </div>
        <div className='flex flex-col gap-10 items-center flex-nowrap'>
          <ButtonNavBar href='#contact'>Contacto</ButtonNavBar>

        </div>

      </div>
    </div>
  )
}
