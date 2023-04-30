import Image from 'next/image'
import { useState } from 'react'
import FeedbackNavigation from './FeedbackNavigation'
import { comments } from '@/data/comments'

export default function SectionFeedback (): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleBeforeComment = (): void => {
    setCurrentIndex((currentIndex - 1) % comments.length)
  }

  const handleNextComment = (): void => {
    setCurrentIndex((currentIndex + 1) % comments.length)
  }

  const handleDotClick = (index: number): void => {
    setCurrentIndex(index)
  }

  return (
    <div id='feedback' className='h-[30rem] mt-10'>
      <div className='h-[30rem] bg-[#171717]/80 relative'>

        <h2 className='text-white text-center font-serif text-4xl pt-10'>QUE DICEN DE NOSOTROS</h2>

        <div className='flex gap-10 justify-center mt-10 overflow-hidden h-48'>
          <div className='rounded-full overflow-hidden flex'>
            <Image
              alt='is a woman'
              src={comments[Math.abs(currentIndex)].image}
              width={200}
              height={200}
            />
          </div>
          <div className='text-white w-1/2 flex justify-center items-center'>
            <p>
              {comments[Math.abs(currentIndex)].comment}
            </p>
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
