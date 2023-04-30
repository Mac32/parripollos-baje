import Image from 'next/image'
import { useState } from 'react'
import { comments } from '../data/comments'
import ArrowLeft from './icons/ArrowLeft'
import ArrowRigth from './icons/ArrowRight'
export default function SectionFeedBack (): JSX.Element {
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0)

  const beforComment = (): void => {
    if (currentCommentIndex <= 0) {
      setCurrentCommentIndex(3)
    }
    setCurrentCommentIndex(
      (currentCommentIndex - 1) % 3
    )
  }

  const nextComment = (): void => {
    setCurrentCommentIndex(
      (currentCommentIndex + 1) % 3
    )
  }

  return (
    <div id='feedback' className='h-[30rem] mt-10'>
      <div className='h-[30rem] bg-[#171717]/80 relative'>

        <h2 className='text-white text-center font-serif text-4xl pt-10'>QUE DICEN DE NOSOTROS</h2>
        <div className='flex gap-10 justify-center mt-10'>
          <div className='rounded-full overflow-hidden flex'>
            <Image
              alt='is a woman'
              src={comments[Math.abs(currentCommentIndex)].image}
              width={200}
              height={200}
            />
          </div>
          <div className='text-white w-1/2 flex justify-center items-center'>
            <p>
              {comments[Math.abs(currentCommentIndex)].comment}
            </p>
          </div>
        </div>
        <button className='absolute h-full top-0 w-1/6 flex justify-center items-center flex-col' onClick={beforComment}><ArrowLeft /></button>
        <button className='absolute h-full top-0 w-1/6 flex justify-center items-center flex-col right-0' onClick={nextComment}><ArrowRigth /></button>
      </div>
    </div>
  )
}
