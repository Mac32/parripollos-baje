import React from 'react'
import Dot from './icons/Dot'

interface props {
  totalComments: number
  currentIndex: number
  onDotClick: (currentIndex: number) => void
}

export default function FeedbackDots ({ totalComments, currentIndex, onDotClick }: props): JSX.Element {
  const handlerDotClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    onDotClick(Number(event.currentTarget.value))
  }
  return (
    <div className='flex flex-nowrap gap-6 justify-center items-center mx-auto mt-96'>
      {
      Array.from({ length: totalComments }).map((_, index) => (
        <button value={index} key={index} className='w-1' onClick={handlerDotClick}>
          <Dot color={index === currentIndex ? 'fill-white' : 'fill-white/50'} />
        </button>
      ))
      }
    </div>
  )
}
