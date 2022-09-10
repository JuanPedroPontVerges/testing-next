import type { NextPage } from 'next'
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
/* Images */
import Dasboard from 'public/assets/dashboard.svg'
import Iphones from 'public/assets/iphones.png'
import Encuestas from 'public/assets/img-compras.png'
import GoogleReviewsYellow from 'public/assets/google-reviews-yellow.png'
import VideoPreview from 'public/assets/preview-video.png';
import WhatsappScreens from 'public/assets/pantallas-whatsapp.png';
import Macbook from 'public/assets/macbook.png';
import HumanInCircle from 'public/assets/persona-en-circulo.png';
import MotorcycleInCircle from 'public/assets/moto-en-circulo.png';
import TrendingArrow from 'public/assets/flecha-tendencia.png';
import HandWithCoin from 'public/assets/mano-con-moneda.png';
import Community from 'public/assets/comunidad.png';
/* Components */
import Title from '@/components/Title';
import Button from '@/components/Button';
import Line from '@/components/Line';
import ResponsiveLineBreak from '@/components/ResponsiveLineBreak';
import Form from '@/components/Form';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cacao</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={'bg-c-blue'}>
        {/* Banner */}
        <div className='flex flex-row justify-around'>
          <div className={"flex flex-col pt-20"}>
            <div>
              <h1 className={"uppercase font-bold text-2xl"}>Plataforma web para vendedores</h1>
            </div>
            <div>
              <h2 className='text-c-yellow text-8xl font-extrabold pt-20'>
                Tu cliente, <br /> con vos
              </h2>
            </div>
          </div>
          <div className='pt-20'>
            <Image src={Dasboard} alt={'Cacao métricas'} />
          </div>
        </div>
      </div>
      <div className='p-4' />
      {/* Request your demo */}
      <div className={'bg-white container mx-auto'}>
        <div className='flex flex-row justify-around items-center'>
          <div>
            <Image src={Iphones} alt={'Iphones'} />
          </div>
          <div className='flex flex-col'>
            <h2 className='text-6xl font-extrabold text-left'>
              <span className='text-c-blue'>
                Todo lo que tu
                <ResponsiveLineBreak />
                comercio necesita
              </span>
              <ResponsiveLineBreak />
            </h2>
            <div className='bg-c-blue p-2 rounded fit-content'>
              <h2 className='text-white text-6xl font-extrabold text-left'>
                para incrementar ventas
              </h2>
            </div>
            <div className='py-4'>
              <Button>
                ¡Pedí tu prueba!
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={'container md:my-28'}>
        <div className='mb-16'>
          <h2 className='text-c-blue text-center text-6xl font-extrabold pb-6'>
            Con cacao podés
          </h2>
        </div>
        <div className={'flex flex-row justify-around items-center text-2xl gap-4'}>
          <div className={'basis-1/3 text-center'}>
            <div className='mb-8'>
              <span className='mdi mdi-bullseye-arrow text-white bg-c-blue text-6xl rounded p-4' />
            </div>
            <div className='pt-4'>
              <p className='text-c-blue font-medium'>
                Realizar publicidad dirigida
                <ResponsiveLineBreak />
                y de los estándares de la marca
                {/* Aca debriamos poner 'y ...' */}
              </p>
            </div>
          </div>
          <div className={'basis-1/3 text-center'}>
            <div className='mb-8'>
              <span className='mdi mdi-account-supervisor-circle text-white bg-c-blue text-6xl rounded p-4' />
            </div>
            <div className='pt-4'>
              <p className='text-c-blue font-medium'>
                Llevar un control del personal <ResponsiveLineBreak /> y de los estándares de la marca
              </p>
            </div>
          </div>
          <div className={'basis-1/3 text-center'}>
            <div className='mb-8'>
              <span className='mdi mdi-map-marker-star text-white bg-c-blue text-6xl rounded p-4' />
            </div>
            <div className='pt-4'>
              <p className='mx-auto text-c-blue font-medium'>
                Gestionar las críticas negativas <ResponsiveLineBreak /> y aumentar las positivas
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4' />
      { /* Encuestas*/}
      <div className="container mx-auto bg-completed-tasks bg-no-repeat bg-left-bottom mt-4">
        <div className={'flex flex-row justify-around '}>
          <div className='text-center'>
            <Image src={Encuestas} alt={'Lugares por el cual acceder a la encuesta'} />
          </div>
          <div className='basis-1/2'>
            <div className='flex flex-col justify-center h-full'>
              <div className='flex flex-col justify-around h-2/3 text-left'>
                <Title color={'#F88600'}>
                  Encuestas
                </Title>
                <p className={'text-3xl text-black'}>
                  Tus clientes acceden a una <strong>breve encuesta</strong>{' '}
                  <ResponsiveLineBreak />donde <strong>evalúan su experiencia</strong> y, a cambio,<ResponsiveLineBreak />
                  <strong> obtienen un beneficio </strong> para utilizar <ResponsiveLineBreak /> en su próxima compra.
                </p>
                <div>
                  <Button type={'submit'} id={'send'}>Ver encuesta</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-10' />
      {/* Google Reviews */}
      <div className={'flex justify-around px-20 md:pr-10'}>
        <div className='md:basis-2/4'>
          <div className='flex flex-col items-center md:items-start space-y-4 md:space-y-6'>
            <div>
              <Title color={'#F88600'}>
                Encuesta customizable
              </Title>
            </div>
            <p className={'text-3xl text-black text-[32px] sm:text-center md:text-left font-light'}>
              Diferentes opciones, adaptables a tus necesidades.
            </p>
            <div className={'pb-1'} />
            <div className={'md:m-auto'}>
              <Image src={GoogleReviewsYellow} alt={'Logo de Google Reviews'} />
            </div>
            <p className={'text-3xl text-[#717171] text-[32px] font-extrabold text-center md:text-left'}>
              Mejorá las reseñas de Google Reviews
            </p>
          </div>
        </div>
        <div className='hidden md:flex basis-2/4 flex-col items-center space-y-8'>
          <Image src={VideoPreview} alt={'Preview de video'} />
          <div className='text-center'>
            <Button>
              Ver video
            </Button>
          </div>
        </div>
      </div>
      <div className='py-20' />
      {/* Campañas Marketing */}
      <div className={'flex justify-around lg:pl-60 sm:pl-20'}>
        <div className='text-left basis-1/3 flex flex-col justify-around'>
          <div>
            <Title color={'#F88600'} >
              Campañas de marketing por WhatsApp
            </Title>
          </div>
          <div>
            <p className={'text-3xl text-black font-light'}>
              Con <strong className='font-bold'>Cacao</strong> podes crear:
            </p>
          </div>
          <div>
            <p className={'text-3xl text-black font-light'}>
              <strong className='font-bold'>
                Campañas de Marketing por WhatsApp.
              </strong>
            </p>
          </div>
          <div>
            <p className={'text-3xl text-black font-light'}>
              Podes enviar descuentos personalizados, promocionar tus productos y así <strong className='font-bold'>generar nuevas ventas</strong>
            </p>
          </div>
        </div>
        <div className='basis-2/3 flex flex-col items-center space-y-8'>
          <Image src={WhatsappScreens} alt={'Preview de video'} />
        </div>
      </div>
      <div className='py-20' />
      {/* Dashboard */}
      <div className={'flex justify-around lg:pr-60 sm:pr-20 bg-pink-decoration bg-no-repeat bg-left-top'}>
        <div className='basis-2/3 flex flex-col items-center'>
          <Image src={Macbook} alt={'Cacao dashboard en una Macbook'} height={419} />
        </div>
        <div className='text-left basis-1/3 flex flex-col justify-around gap-20'>
          <div>
            <Title color={'#F88600'}>
              <span className='text-[#27253B]'>Toda la <br /> información <br /> </span> en un solo lugar
            </Title>
          </div>
          <div>
            <p className={'text-3xl text-[#353535] font-medium'}>
              Tendrás acceso a un panel de control, dónde podrás ver:
            </p>
          </div>
          <div className={'flex flex-row justify-around font-semibold'}>
            <div className={'text-center'}>
              <Image src={HumanInCircle} alt={'persona en un circulo, icono'} />
              <p className='text-[#353535]'>Clientes Frecuentes</p>
            </div>
            <div className={'text-center'}>
              <Image src={MotorcycleInCircle} alt={'persona en un circulo, icono'} />
              <p className='text-[#353535]'>Valoración de tus servicios</p>
            </div>
            <div className={'text-center'}>
              <Image src={TrendingArrow} alt={'persona en un circulo, icono'} />
              <p className='text-[#353535]'>Comparación por sucursal</p>
            </div>
            <div className={'text-center'}>
              <Image src={TrendingArrow} alt={'persona en un circulo, icono'} />
              <p className='text-[#353535]'>Analisis de datos</p>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4' />
      {/* Carrousel */}
      <div className={'flex flex-row bg-[#27253B]'}>
        <div className={'basis-2/3'}>
          <Carousel controls={false} interval={2500} draggable>
            <Carousel.Item>
              <div className='flex flex-col items-center justify-center h-[500px]'>
                <Image src={HandWithCoin} alt={'Mano con moneda'} />
                <h3 className={'mt-4 text-[28px] font-medium text-center'}>Elegí tus beneficios</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='flex flex-col items-center justify-center h-[500px]'>
                <Image src={Community} alt={'Comunidad cacao'} />
                <h3 className={'mt-4 text-[28px] font-medium text-center'}>Conocé a tus clientes</h3>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={'basis-1/3 flex flex-col justify-around'}>
          <h2 className={'text-c-yellow font-black text-6xl'}>
            Cualquier <br /> tipo de <br /> comercio
          </h2>
          <p className={'text-2xl'}>
            Nos adaptamos a cualquier <br /> tipo de comercio. Con Cacao, <br />
            <strong> tu cliente con vos.</strong>
          </p>
        </div>
      </div>
      {/* Carrousel customers */}
      <div className={'flex flex-col bg-[#ECF7FF] p-6'}>
        <div className='p-4' />
        <div>
          <h3 className={'font-regular text-4xl text-center text-[#343252]'}>Algunos de nuestros <strong className='font-black'>clientes</strong></h3>
        </div>
        <div>
          <Carousel controls={false} interval={2500} draggable>
            <Carousel.Item>
              <div className='flex flex-col items-center justify-center h-[500px] text-black'>
                <h3 className={'mt-4 text-[28px] font-medium text-center'}>Elegí tus beneficios</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='flex flex-col items-center justify-center h-[500px] text-black'>
                <h3 className={'mt-4 text-[28px] font-medium text-center'}>Conocé a tus clientes</h3>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      {/* Pricing */}
      <div className={'flex flex-col bg-[#27253B] p-8'}>
        <div>
          <div className='p-4' />
          <h3 className={'font-black text-5xl text-center text-white'}>Hasta $4999 al mes</h3>
        </div>
        <div className='p-8' />
        <div className={'mx-auto'}>
          <Line className='w-[500px] border-4 border-[#F08619]/[.30]' />
        </div>
        <div>
          <Carousel controls={false} interval={2500} draggable>
            <Carousel.Item>
              <div className='flex flex-col items-center justify-center h-40'>
                <h3 className={'mt-4 text-[28px] font-medium text-center'}>Encuestas</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='flex flex-col items-center justify-center h-40'>
                <h3 className={'mt-4 text-[28px] font-medium text-center'}>Códigos QR</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='flex flex-col items-center justify-center h-40'>
                <h3 className={'mt-4 text-[28px] font-medium text-center'}>Métricas</h3>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={'p-4'} />
        <div className='text-center'>
          <h3 className={'font-black text-3xl'}>1 mes de garantia</h3>
          <div className='p-4' />
          <Button>¡Pedí tu prueba!</Button>
        </div>
      </div>
      {/* Form */}
      <Form />
    </div>
  )
}

export default Home;
