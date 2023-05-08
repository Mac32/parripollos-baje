interface props {
  children: string
}

export default function TitlePage ({ children }: props): JSX.Element {
  return (
    <h1 className='text-white text-center text-6xl my-6'>{children}</h1>

  )
}
