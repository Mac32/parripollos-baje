import Link from 'next/link'

interface props {
  href: string
  children: string
}
export default function ButtonOfSection ({ href, children }: props): JSX.Element {
  return (
    <Link className='text-white self-center text-xl font-serif w-60 text-center rounded-md p-3 bg-[#F2A81D]' href={href}>{children}</Link>
  )
}
