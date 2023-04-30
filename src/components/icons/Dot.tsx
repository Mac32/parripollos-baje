interface props {
  color?: string
  size?: number
}

export default function Dot ({ color = 'fill-white', size = 5 }: props): JSX.Element {
  return (

    <svg
      width={size * 2}
      height={size * 2}
      xmlns='http://www.w3.org/2000/svg'

    >
      <circle
        className={color}
        cx={`${size}`}
        cy={`${size}`}
        r={`${size}`}
      />

    </svg>
  )
}
