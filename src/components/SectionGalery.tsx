import TitleOfSection from './TitleOfSection'
import Image from 'next/image'
import meet2 from '../assets/Images/meat-2.jpg'
import meet from '../assets/Images/meat.jpg'

export default function SectionGalery (): JSX.Element {
  return (
    <div className=''>
      <TitleOfSection>GALERIA</TitleOfSection>
      <div className='mt-10 flex flex-wrap gap-4 w-11/12 mx-auto '>
        <div className=' w-64 h-64 '>
          <Image
            className=''
            alt='Chef cooking'
            src={meet2}
          />
        </div>
        <div className='overflow-hidden w-64 h-64'>
          <Image
            className=''
            alt='Fire'
            src={meet}
          />
        </div>
        <div className='overflow-hidden w-64 h-64 '>
          <Image
            className=''
            alt='Chef cooking'
            src={meet2}
          />
        </div>
        <div className='overflow-hidden w-64 h-64 '>
          <Image
            className=''
            alt='Meet image'
            src={meet2}
          />
        </div>
        <div className='overflow-hidden w-64 h-64 '>
          <Image
            className=''
            alt='Meet image'
            src={meet}
          />
        </div>
        <div className='overflow-hidden w-64 h-64'>
          <Image
            className=''
            alt='Meet image'
            src={meet2}
          />
        </div>

      </div>
    </div>
  )
}
