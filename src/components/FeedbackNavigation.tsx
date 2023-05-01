import FeedbackDots from './FeedBackDots'
import ArrowLeft from './icons/ArrowLeft'
import ArrowRight from './icons/ArrowRight'

interface props {
  currentIndex: number
  totalComments: number
  onBeforeComment: (currentIndex: number) => void
  onNextComment: (currentIndex: number) => void
  onDotClick: (currentIndex: number) => void
}

export default function FeedbackNavigation ({ currentIndex, totalComments, onBeforeComment, onNextComment, onDotClick }: props): JSX.Element {
  const handleBeforeClick = (): void => {
    if (currentIndex <= 0) {
      onBeforeComment(totalComments)
    } else {
      onBeforeComment(currentIndex)
    }
  }

  const handleNextClick = (): void => {
    onNextComment(currentIndex)
  }

  return (
    <div className='absolute h-full top-0 left-0 right-0 flex justify-between items-center'>
      <button className='hover:-translate-x-1 transition ease-in-out duration-300 h-full w-1/6 flex justify-center items-center flex-col' onClick={handleBeforeClick}>
        <ArrowLeft />
      </button>
      <FeedbackDots
        currentIndex={currentIndex}
        totalComments={totalComments}
        onDotClick={onDotClick}
      />
      <button className='hover:translate-x-1 transition ease-in-out duration-300 h-full w-1/6 flex justify-center items-center flex-col' onClick={handleNextClick}>
        <ArrowRight />
      </button>
    </div>
  )
}
