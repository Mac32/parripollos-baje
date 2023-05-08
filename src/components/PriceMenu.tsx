interface props {
  children: string
}

export default function PriceMenu ({ children }: props): JSX.Element {
  return (
    <span className='text-[#F2EAE4]'>{children}</span>
  )
}
