import Image from 'next/image'
import { useState } from 'react'
import FeedbackNavigation from './FeedbackNavigation'
import { comments } from '../data/comments'
import { BlurEffect } from '../tools/BlurEffect'

export default function SectionFeedback (): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleBeforeComment = (): void => {
    if (currentIndex <= 0) {
      setCurrentIndex(comments.length - 1)
    } else {
      setCurrentIndex((currentIndex - 1) % comments.length)
      BlurEffect('effect', 100)
    }
  }

  const handleNextComment = (): void => {
    setCurrentIndex((currentIndex + 1) % comments.length)
    BlurEffect('effect', 100)
  }

  const handleDotClick = (index: number): void => {
    setCurrentIndex(index)
    BlurEffect('effect', 100)
  }

  return (
    <div id='feedback' className='h-[30rem] mt-10'>
      <div className='h-[30rem] bg-[#171717]/80 relative'>

        <h2 className='text-white text-center font-serif text-2xl lg:text-4xl pt-10'>LO QUE DICEN DE NOSOTROS</h2>

        <div id='effect' className='flex flex-col gap-10 justify-center mt-10 lg:overflow-hidden h-48 transition duration-150 ease-out lg:flex-row lg:w-2/3 lg:mx-auto'>
          <div className='rounded-full lg:overflow-hidden flex lg:h-full'>
            <Image
              className='w-36 m-auto rounded-full mt-6'
              alt='is a woman'
              src={comments[Math.abs(currentIndex)].image}
              width={200}
              height={200}
            />
          </div>
          <div className='text-white w-11/12 mx-auto lg:w-1/2 justify-center items-center flex flex-col lg:flex-1'>
            <p className='lg:text-2xl italic h-20'>
              {comments[Math.abs(currentIndex)].comment}
            </p>
            <p className='font-bold lg:text-3xl mt-3 lg:mt-8 italic underline'>{comments[Math.abs(currentIndex)].name}</p>
          </div>
        </div>

        <FeedbackNavigation
          currentIndex={currentIndex}
          totalComments={comments.length}
          onBeforeComment={handleBeforeComment}
          onNextComment={handleNextComment}
          onDotClick={handleDotClick}
        />

      </div>
    </div>
  )
}
