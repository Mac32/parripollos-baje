interface params {
  children: string
}

export default function TitleOfSection ({ children }: params): JSX.Element {
  return (
    <h2 className='text-[#F2A81D] text-center font-serif text-4xl mt-10'>{children}</h2>
  )
}
