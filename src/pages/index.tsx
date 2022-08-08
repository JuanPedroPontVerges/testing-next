/* eslint-disable @next/next/no-img-element */
import { trpc } from '@/utils/trpc'
import type { NextPage } from 'next'
import Image from 'next/image';
import Dasboard from 'public/dashboard.png'
import Iphones from 'public/iphones.png'
import Marketing from 'public/marketing.png'
import People from 'public/people.png'
import GoogleReviews from 'public/google-reviews.png'
import Encuestas from 'public/encuestas.png'
import Title from '@/components/Title';
import Button from '@/components/Button';

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
              <Button>
                ¡Pedí tu prueba!
              </Button>
            </div>
          </div>
        </div>
      </div>
      { /* Flag */}
      <div className='p-4 bg-[#F88600] rounded-r-full w-2/12'>
        <div className={'ml-4 text-4xl font-bold'}>Con Cacao podés</div>
      </div>
      <div className={'flex flex-row justify-around items-center text-black text-2xl'}>
        <div className={'basis-1/3 text-center'}>
          <Image src={Marketing} alt={'Campañas'} width={249} />
          <p className='w-2/4 mx-auto'>
            <span className='mr-10'>
              Realizar publicidad dirigida
            </span>
          </p>
        </div>
        <div className={'basis-1/3 text-center'}>
          <Image src={People} alt={'Campañas'} width={262} />
          <p className='w-2/4 mx-auto'>
            Llevar un control del personal y de los estándares de la marca
          </p>
        </div>
        <div className={'basis-1/3 text-center'}>
          <Image src={GoogleReviews} alt={'Campañas'} width={293} />
          <p className='w-2/4 mx-auto'>
            Gestionar las críticas negativas y aumentar las positivas
          </p>
        </div>
      </div>
      { /* Encuestas*/}
      <div className={'flex lg:px-60 sm:px-20 justify-around'}>
        <div className='basis-2/3'>
          <Image src={Encuestas} alt={'Lugares por el cual acceder a la encuesta'} />
        </div>
        <div className='text-right basis-1/3'>
          <div className='flex flex-col justify-center h-full'>
            <div className='flex flex-col justify-around h-2/3 '>
              <div className=''>
                <Title title='Encuestas' color={'#F88600'} />
              </div>
              <div className=''>
                <p className={'text-3xl text-black'}>
                  Tus clientes acceden a una <strong>breve encuesta</strong> donde evalúan su <strong>experiencia</strong> y, a cambio, obtienen un <strong> beneficio para utilizar en su próxima compra.</strong>
                </p>
              </div>
              <div className={'text-center'} >
                <Button>Ver encuesta</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
