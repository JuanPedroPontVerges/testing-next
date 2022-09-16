import type { NextPage } from 'next'
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
/* Images */
import Dasboard from 'public/assets/dashboard.svg'
// import Dasboard from 'public/assets/dashboard.png'
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
    <>
      <Head>
        <title>Cacao</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={'bg-c-blue'}>
        {/* Banner */}
        <div className="container mx-auto pt-14">
          <div className='flex justify-around'>
            <h2 className='text-c-yellow text-5xl font-extrabold pt-20'>
              Tu cliente, con vos
            </h2>
          </div>
          <div className='flex justify-around'>
            <h1 className={"uppercase font-bold text-2xl"}>Plataforma web para vendedores</h1>
          </div>
          <div className='mt-20 text-center'>
            <Image src={Dasboard} alt={'Cacao métricas'} quality={100} />
          </div>
        </div>
      </div>
      <div className='m-20' />
      {/* Request your demo */}
      <div className={'bg-white container mx-auto'}>
        <div className='flex flex-col text-center'>
          <h2 className='text-5xl font-extrabold'>
            <span className='text-c-blue'>
              Todo lo que tú{' '}
              <ResponsiveLineBreak />
              comercio necesita
            </span>
            <ResponsiveLineBreak />
          </h2>
          {/* <div className={'flex justify-center'}>
            <div className='bg-c-blue p-2 rounded fit-content'>
              <h2 className='text-white text-6xl font-extrabold'>
                para incrementar ventas
              </h2>
            </div>
          </div> */}
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
        <h2 className='text-c-blue text-center text-5xl font-extrabold pb-10'>
          Con cacao podés
        </h2>
        <div className={'flex justify-center text-2xl gap-4 my-16'}>
          <div className={'text-center'}>
            <span className='mdi mdi-bullseye-arrow text-white bg-c-blue text-6xl rounded p-4' />
            <div className='my-14'>
              <p className='text-c-blue font-medium text-2xl'>
                Realizar publicidad dirigida
                <ResponsiveLineBreak />
                {/* Aca debriamos poner 'y ...' */}
              </p>
            </div>
          </div>
        </div>
        <div className={'flex justify-center text-2xl my-16'}>
          <div className={'text-center'}>
            <span className='mdi mdi-account-supervisor-circle text-white bg-c-blue text-6xl rounded p-4' />
            <div className='my-14'>
              <p className='text-c-blue font-medium text-2xl'>
                Llevar un control del personal y de los estándares de la marca
              </p>
            </div>
          </div>
        </div>
        <div className={'flex justify-center text-2xl'}>
          <div className={'text-center'}>
            <span className='mdi mdi-map-marker-star text-white bg-c-blue text-6xl rounded p-4' />
            <div className='my-14'>
              <p className='mx-auto text-c-blue font-medium text-2xl'>
                Gestionar las críticas negativas y aumentar las positivas
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4' />
      { /* Encuestas*/}
      <div className='m-20' />
      {/* Request your demo */}
      <div className={'bg-white container mx-auto'}>
        <div className='flex flex-col text-center gap-y-6'>
          <h2 className='text-c-yellow text-6xl font-extrabold text-center'>
            Encuestas
          </h2>
          <div className={'flex justify-center'}>
            <p className={'text-3xl text-black text-center'}>
              Tus clientes acceden a una <strong>breve encuesta</strong>{' '}
              <ResponsiveLineBreak />donde <strong>evalúan su experiencia</strong> y, a cambio,<ResponsiveLineBreak />
              <strong> obtienen un beneficio </strong> para utilizar <ResponsiveLineBreak /> en su próxima compra.
            </p>
          </div>
        </div>
        <div className='m-20' />
        <div className='flex justify-center'>
          <Image src={Encuestas} alt={'Lugares por el cual acceder a la encuesta'} />
        </div>
        <div className='flex justify-center my-12'>
          <Button>
            ¡Pedí tu prueba!
          </Button>
        </div>
      </div>
      <div className='my-32' />
      {/* Google Reviews */}
      <div className="container mx-auto">
        <div className={'flex flex-row justify-around'}>
          <div className='flex flex-col items-center md:items-start'>
            <div>
              {/* <Title color={'#F88600'}>
                Encuesta customizable
              </Title> */}
            </div>
            <p className={'text-3xl text-black text-[32px] sm:text-center md:text-left font-light'}>
              Diferentes opciones, adaptables a tus necesidades.
            </p>
            <div className={'pb-1'} />
            {/* <div className={'md:m-auto'}>
              <Image src={GoogleReviewsYellow} alt={'Logo de Google Reviews'} />
            </div> */}
            <p className={'text-3xl text-[#717171] text-[32px] font-extrabold text-center md:text-left'}>
              Mejorá las reseñas de Google Reviews
            </p>
          </div>
          <div className='hidden md:flex flex-col items-center mt-[-12px]'>
            <Image src={VideoPreview} alt={'Preview de video'} />
            <div className='text-center'>
              <Button>
                Ver video
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className='my-20' />
      {/* Campañas Marketing */}
      <div className="container mx-auto">
        <div className={'flex flex-row justify-around align-middle'}>
          <div>
            <div className='flex flex-col justify-center h-full'>
              <div className='flex flex-col justify-around h-2/3 text-left'>
                <div className='bg-c-blue p-2 rounded fit-content'>
                  <h2 className='text-white text-6xl font-extrabold text-left'>
                    Encuestas
                  </h2>
                </div>
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
          <div className='flex flex-col items-center'>
            <Image src={WhatsappScreens} alt={'Preview de video'} />
          </div>
        </div>
      </div>
      <div className='py-20' />
      {/* Dashboard */}
      <div className={'flex justify-around lg:pr-60 sm:pr-20 bg-pink-decoration bg-no-repeat bg-left-top'}>
        <div className='basis-2/3 flex flex-col items-center'>
          <Image src={Macbook} alt={'Cacao dashboard en una Macbook'} height={419} />
        </div>
        <div className='text-left basis-1/3 flex flex-col justify-around gap-20'>
          {/* <div>
            <Title color={'#F88600'}>
              <span className='text-[#27253B]'>Toda la <br /> información <br /> </span> en un solo lugar
            </Title>
          </div>
          <div>
            <p className={'text-3xl text-[#353535] font-medium'}>
              Tendrás acceso a un panel de control, dónde podrás ver:
            </p>
          </div> */}
          {/* <div className={'flex flex-row justify-around font-semibold'}>
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
          </div> */}
        </div>
      </div>
      <div className='p-4' />
      {/* Carrousel || Commenting for now because it breaks viewport in mobile*/}
      {/* <div className={'flex flex-row bg-[#27253B]'}> 
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
      </div> */}
      {/* Carrousel customers */}
      <div className={'flex flex-col bg-[#ECF7FF] p-6'}>
        <div className='p-4' />
        <div>
          <h3 className={'font-regular text-4xl text-center text-[#343252]'}>Algunos de nuestros <strong className='font-black'>clientes</strong></h3>
        </div>
        {/* <div>
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
          </div> */}
      </div>
      {/* Pricing */}
      <div className={'flex flex-col bg-[#27253B] p-8'}>
        <div>
          <div className='p-4' />
          <h3 className={'font-black text-5xl text-center text-white'}>Hasta $4999 al mes</h3>
        </div>
        <div className='p-8' />
        <div className={'mx-auto'}>
          <Line className='w-24 border-4 border-[#F08619]/[.30]' />
        </div>
        {/* <div>
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
          </div> */}
        <div className={'p-4'} />
        <div className='text-center'>
          <h3 className={'font-black text-3xl'}>1 mes de garantia</h3>
          <div className='p-4' />
          <Button>¡Pedí tu prueba!</Button>
        </div>
      </div>
      {/* Form */}
      <Form />
    </>
  )
}

export default Home;
