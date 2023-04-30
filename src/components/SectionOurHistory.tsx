import Image from 'next/image'
import imageFire from '../assets/Images/fire.jpg'
import imageFood from '../assets/Images/meat.jpg'
import imageFood2 from '../assets/Images/meat-2.jpg'
import Link from 'next/link'
import ButtonOfSection from './ButtonOfSection'

export default function SectionOurHistory (): JSX.Element {
  return (
    <div className='flex justify-between h-[30rem] relative'>
      <div className='flex flex-col justify-center'>
        <Image
          className='absolute rotate-6 top-10 left-64'
          src={imageFood}
          alt='Image of a fire'
          width={150}
        />
        <Image
          className='absolute mr-12 left-40'
          src={imageFire}
          alt='Image of a fire'
          width={200}
        />
        <Image
          className='absolute ml-4 -rotate-6 bottom-10 left-64'
          src={imageFood2}
          alt='Image of a fire'
          width={160}
        />
      </div>
      <div className='w-[50%] mr-16'>
        <h2 className='text-[#F2A81D] text-center font-serif text-4xl mt-10'>Nuestra Historia</h2>
        <div className='text-white mt-6'>
          <p>
            Parripollos B.A.J.E. es una pollería familiar con una historia muy especial detrás de su nombre. Todo comenzó hace varios años, cuando Pedro García, un joven emprendedor, decidió iniciar su propio negocio de venta de pollos asados.
          </p>
          <p className='mt-2'>
            Pedro trabajó arduamente para construir su pollería desde cero, dedicando su tiempo y esfuerzo a cada detalle. Con el tiempo, el negocio comenzó a crecer y a prosperar, convirtiéndose en un lugar muy popular para comprar pollos asados en la zona.
          </p>
          <p className='mt-2'>
            Pero durante el difícil período de crisis en Venezuela, la pollería se vio obligada a cerrar debido a la falta de materia prima para trabajar. Fue un momento muy difícil para todos en la familia, pero nunca perdieron la fe y la esperanza de que algún día volverían a abrir las puertas de Parripollos.

          </p>
          <div className='mt-5 flex flex-col'>
            <ButtonOfSection href='/ourhistory'>Conoce mas</ButtonOfSection>
          </div>
        </div>
      </div>
    </div>
  )
}
