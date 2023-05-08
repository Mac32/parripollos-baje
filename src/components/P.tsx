interface props {
  children: string
}

export default function P ({ children }: props): JSX.Element {
  return (
    <p className='my-2 text-justify text-lg'>
      {children}
    </p>
  )
}
