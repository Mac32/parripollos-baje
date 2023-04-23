import Image from 'next/image'
import chef from '../assets/Images/chef.jpg'

export default function SectionOurCheft (): JSX.Element {
  return (
    <div className='flex justify-around pl-32 h-[30rem] bg-[#171717]/80'>
      <div className='flex flex-col justify-center'>
        <Image
          className=' w-4/5 mx-auto'
          src={chef}
          alt='Image of a fire'
          width={350}
        />
      </div>
      <div className='w-[56%] mr-16'>
        <h2 className='text-[#F2A81D] text-center font-serif text-4xl mt-10'>Nuestro Chef</h2>
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
