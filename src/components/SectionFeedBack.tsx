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

        <h2 className='text-white text-center font-serif text-4xl pt-10'>LO QUE DICEN DE NOSOTROS</h2>

        <div id='effect' className='flex gap-10 justify-center mt-10 overflow-hidden h-48 transition duration-150 ease-out'>
          <div className='rounded-full overflow-hidden flex'>
            <Image
              alt='is a woman'
              src={comments[Math.abs(currentIndex)].image}
              width={200}
              height={200}
            />
          </div>
          <div className='text-white w-1/2 justify-center items-center flex flex-col'>
            <p className='text-2xl italic'>
              {comments[Math.abs(currentIndex)].comment}
            </p>
            <p className='font-bold text-3xl mt-6 italic underline'>{comments[Math.abs(currentIndex)].name}</p>
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
