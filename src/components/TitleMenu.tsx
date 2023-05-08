
interface props {
  children: string
}

export default function TitleMenu ({ children }: props): JSX.Element {
  return (
    <h2 className='underline font-bold italic text-4xl text-[#A65A2E] mb-3'>{children}</h2>
  )
}
