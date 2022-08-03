/* eslint-disable @next/next/no-img-element */
import { trpc } from '@/utils/trpc'
import type { NextPage } from 'next'
import Image from 'next/image';
import Dasboard from 'public/dashboard.png'
import Iphones from 'public/iphones.png'
import Marketing from 'public/marketing.png'
import People from 'public/people.png'
import GoogleReviews from 'public/google-reviews.png'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col gap-y-14'>
      <div className={'lg:px-54 sm:px-20  bg-[#27253B]'}>
        {/* Banner */}
        <div className='flex flex-row justify-between'>
          <div className={"flex flex-col pt-20"}>
            <div>
              <h1 className={"uppercase font-bold text-2xl"}>Plataforma web para
                <br />vendedores
              </h1>
            </div>
            <div>
              <h2 className='text-[#F88600] text-8xl font-extrabold pt-20'>
                Tu cliente, <br /> con vos
              </h2>
            </div>
          </div>
          <div className='pt-20'>
            <Image src={Dasboard} alt={'Cacao métricas'} />
          </div>
        </div>
      </div>
      <div className={'lg:px-60 sm:px-20  bg-white'}>
        {/* Request your demo */}
        <div className='flex flex-row justify-between'>
          <div className='basis-1/2'>
            <Image src={Iphones} alt={'Iphones'} />
          </div>
          <div className='basis-1/2 flex flex-col items-center gap-y-32'>
            <h2 className='text-6xl font-extrabold text-right'>
              <span className='text-[#27253B]'>
                Todo lo que tu
                <br />
                comercio necesita
              </span>
              <br />
              <span className='text-[#F88600]'>
                para incrementar
                <br />
                ventas
              </span>
            </h2>
            <div>
              <button className={'rounded-lg p-4 px-10 text-white bg-[#F88600] font-bold'}>¡Pedí tu prueba!</button>
            </div>
          </div>
        </div>
      </div>
      { /* Flag */}
      <div className='p-2 bg-[#F88600] rounded-r-lg w-1/12'>
        <div className={''}>Con Cacao podés</div>
      </div>
      <div className={'flex flex-row justify-around items-center text-black text-2xl'}>
        <div className={'actions-container basis-1/2'}>
          <Image src={Marketing} alt={'Campañas'} />
          <p className='w-2/4'>
            Realizar publicidad dirigida
          </p>
        </div>
        <div className={'actions-container basis-1/2'}>
          <Image src={People} alt={'Campañas'} />
          <p className='w-2/4'>
            Llevar un control del personal y de los estándares de la marca
          </p>
        </div>
        <div className={'actions-container basis-1/2'}>
          <Image src={GoogleReviews} alt={'Campañas'} />
          <p className='w-2/4'>
            Gestionar las críticas negativas y aumentar las positivas
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
