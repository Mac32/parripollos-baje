import Link from 'next/link'

interface props {
  children: string
}

export default function ButtonNavBar ({ children }: props): JSX.Element {
  return (
    <li className='hover:scale-105 ease-in-out duration-300'>
      <Link className='text-white border-b-2 border-b-[#F2A81D] px-4 py-2 mt-2 hover:bg-slate-800/50 rounded-md' href='/'>{children}</Link>
    </li>
  )
}
