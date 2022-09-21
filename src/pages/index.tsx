import type { NextPage } from 'next'
import Image from 'next/image';
/* Images */
import Dasboard from 'public/assets/dashboard.png'
import Iphones from 'public/assets/iphones.png'
import Encuestas from 'public/assets/encuestas.png'
/* Components */
import Button from '@/components/Button';
import Line from '@/components/Line';
import ResponsiveLineBreak from '@/components/ResponsiveLineBreak';
import Form from '@/components/Form';
import Head from 'next/head';
import Carrousel from '@/components/Carrousel';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cacao</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={'bg-c-blue'}>
        {/* Banner */}
        <div className="container mx-auto pt-14">
          <div className='flex justify-around p-4 md:p-0'>
            <h2 className='text-c-yellow text-4xl font-extrabold pt-20'>
              Tu cliente, con vos
            </h2>
          </div>
          <div className='flex justify-around'>
            <h1 className={"uppercase font-bold text-1xl"}>Plataforma web para vendedores</h1>
          </div>
          <div className='mt-20 text-center'>
            <Image src={Dasboard} alt={'Cacao métricas'} quality={100} />
          </div>
        </div>
      </div>
      <div className='m-20' />
      {/* Request your demo */}
      <div className={'bg-white container mx-auto'}>
        <div className='flex flex-col text-center p-4 md:p-0'>
          <h2 className='text-4xl font-extrabold'>
            <span className='text-c-blue'>
              Todo lo que tú{' '}
              <ResponsiveLineBreak />
              comercio necesita
            </span>
            <ResponsiveLineBreak />
          </h2>
        </div>
        <div className='m-20' />
        <div className='flex justify-center'>
          <div>
            <Image src={Iphones} alt={'Iphones'} />
          </div>
        </div>
        <div className='flex justify-center my-12'>
          <Button>
            ¡Pedí tu prueba!
          </Button>
        </div>
      </div>
      <div className={'container my-28'}>
        <div className={'p-4 md:p-0'}>
          <h2 className='text-c-blue text-center text-4xl font-extrabold pb-10'>
            Con Cacao podés
          </h2>
          <div className={'flex justify-center gap-4 my-16'}>
            <div className={'text-center'}>
              <span className='mdi mdi-bullseye-arrow text-white bg-c-blue text-6xl rounded p-4' />
              <div className='my-14'>
                <p className='text-c-blue font-medium text-1xl'>
                  Realizar publicidad dirigida
                  <ResponsiveLineBreak />
                  {/* Aca debriamos poner 'y ...' */}
                </p>
              </div>
            </div>
          </div>
          <div className={'flex justify-center my-16'}>
            <div className={'text-center'}>
              <span className='mdi mdi-account-supervisor-circle text-white bg-c-blue text-6xl rounded p-4' />
              <div className='my-14'>
                <p className='text-c-blue font-medium text-1xl'>
                  Llevar un control del personal y de los estándares de la marca
                </p>
              </div>
            </div>
          </div>
          <div className={'flex justify-center'}>
            <div className={'text-center'}>
              <span className='mdi mdi-map-marker-star text-white bg-c-blue text-6xl rounded p-4' />
              <div className='my-14'>
                <p className='mx-auto text-c-blue font-medium text-1xl'>
                  Gestionar las críticas negativas y aumentar las positivas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      { /* Encuestas*/}
      <section className={'bg-white container mx-auto'}>
        <div className='p-4 md:p-0'>
          <div className='flex flex-col text-center gap-y-6'>
            <h2 className='text-c-yellow text-4xl font-extrabold text-center'>
              Encuestas
            </h2>
            <div className={'flex justify-center'}>
              <p className={'text-1xl text-black text-center'}>
                Tus clientes acceden a una <strong>breve encuesta</strong>{' '}
                <ResponsiveLineBreak />donde <strong>evalúan su experiencia</strong> y, a cambio,<ResponsiveLineBreak />
                <strong> obtienen un beneficio </strong> para utilizar <ResponsiveLineBreak /> en su próxima compra.
              </p>
            </div>
          </div>
          <div className='m-20' />
          <div className='flex justify-center'>
            <Image src={Encuestas} alt={'Lugares por el cual acceder a la encuesta'} quality={100} />
          </div>
          <div className='flex justify-center my-12'>
            <Button>
              ¡Pedí tu prueba!
            </Button>
          </div>
        </div>
      </section>
      {/* Carrousel customers */}
      <section className='container'>
        <Carrousel title='Algunos de nuestros clientes' />
      </section>
      {/* Pricing */}
      <section className="container">
        <div className={'flex flex-col bg-[#27253B] gap-y-6 py-12 text-center '}>
          <div>
            <h2 className={'font-black text-3xl text-center text-white'}>Hasta $4999 al mes</h2>
          </div>
          <div className={'mx-auto'}>
            <Line className='w-24 border-4 border-[#F08619]/[.30]' />
          </div>
          <div>
            <h3 className={'font-black text-2xl'}>1 mes de garantía</h3>
          </div>
          <div>
            <Button>¡Pedí tu prueba!</Button>
          </div>
        </div>
      </section>
      {/* Form */}
      <div className="my-20" />
      <Form />
    </>
  )
}

export default Home;
