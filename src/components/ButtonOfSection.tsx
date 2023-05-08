import Link from 'next/link'

interface props {
  href: string
  children: string
}
export default function ButtonOfSection ({ href, children }: props): JSX.Element {
  return (
    <Link className='text-white self-center text-xl font-serif w-60 text-center rounded-md p-3 hover:bg-[#F2A81D]/80 border hover:scale-105 duration-300 ease-in-out border-[#F2A81D]' href={href}>{children}</Link>
  )
}
