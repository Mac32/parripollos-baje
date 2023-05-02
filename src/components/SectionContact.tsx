import { useState } from 'react'
import TitleOfSection from './TitleOfSection'
import WhatsApp from './icons/Whatsapp'

export default function SectionContact (): JSX.Element {
  const handlerChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(event.target.value)
  }
  const [message, setMessage] = useState('Hola, ¿Podrían brindarme más información sobre su menú y horarios de atención porfavor? ¡Gracias!')
  return (
    <div id='contact' className='h-[30rem] bg-[#171717]/80'>
      <div className='p-1 mt-10'>
        <TitleOfSection>Contáctanos</TitleOfSection>
      </div>
      <div id='map'>
        Mapa
      </div>
      <div className='flex flex-col items-center mt-10'>
        <div className='flex flex-col items-center '>
          <label className='text-white font-bold mb-3'>Escribe a nuestro WhatsApp</label>
          <textarea className='rounded-md text-gray-800 p-3' onChange={handlerChange} name='' id='message' cols={40} rows={7} value={message} />
        </div>
        <div className=' flex items-center flex-col mt-5'>
          <a target='_blank' className='flex flex-nowrap items-center text-white bg-[#2ab200] hover:scale-105 transition ease-in-out duration-300 rounded-md p-1' aria-label='Chat on WhatsApp' href={`https://wa.me/584267649816?text=${message}`} rel='noreferrer'>
            <WhatsApp size={40} />
            <span className='mx-3 font-bold'>Enviar Whatsapp</span>
          </a>
        </div>
      </div>

    </div>
  )
}
