import Image from 'next/image'
import imageFire from '../assets/Images/fire.jpg'
import imageFood from '../assets/Images/meat.jpg'
import imageFood2 from '../assets/Images/meat-2.jpg'

export default function SectionOurHistory (): JSX.Element {
  return (
    <div className='flex justify-between h-[30rem] relative'>
      <div className='flex flex-col justify-center'>
        <Image
          className='absolute rotate-6 top-10 left-64'
          src={imageFood}
          alt='Image of a fire'
          width={150}
        />
        <Image
          className='absolute mr-12 left-40'
          src={imageFire}
          alt='Image of a fire'
          width={200}
        />
        <Image
          className='absolute ml-4 -rotate-6 bottom-10 left-64'
          src={imageFood2}
          alt='Image of a fire'
          width={160}
        />
      </div>
      <div className='w-[50%] mr-16'>
        <h2 className='text-[#F2A81D] text-center font-serif text-4xl mt-10'>Nuestra Historia</h2>
        <div className='text-white mt-6'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae debitis aliquam quod id asperiores commodi fugit, reiciendis praesentium consequatur! Quam, rem aut obcaecati placeat tempore labore laudantium perferendis laboriosam animi.</p>
          <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quaerat molestiae temporibus nesciunt rem quia consequuntur sint, magnam velit, ut consectetur, veritatis tempora maiores error? Alias perspiciatis autem iusto amet.
          </p>
          <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quaerat molestiae temporibus nesciunt rem quia consequuntur sint, magnam velit, ut consectetur, veritatis tempora maiores error? Alias perspiciatis autem iusto amet.
          </p>
        </div>
      </div>
    </div>
  )
}
