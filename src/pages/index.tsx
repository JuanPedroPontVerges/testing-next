import type { NextPage } from 'next'
import Image from 'next/image';
/* Images */
import Dasboard from 'public/dashboard.png'
import Iphones from 'public/iphones.png'
import Marketing from 'public/marketing.png'
import People from 'public/people.png'
import GoogleReviews from 'public/google-reviews.png'
import Encuestas from 'public/encuestas.png'
import TiltedPhone from 'public/celular-inclinado.png'
import GoogleReviewsYellow from 'public/google-reviews-yellow.png'
import VideoPreview from 'public/preview-video.png';
import WhatsappScreens from 'public/pantallas-whatsapp.png';
import Macbook from 'public/macbook.png';
import HumanInCircle from 'public/persona-en-circulo.png';
import MotorcycleInCircle from 'public/moto-en-circulo.png';
import TrendingArrow from 'public/flecha-tendencia.png';
/* Components */
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
      <div className='flex flex-row justify-between items-start'>
        <div className='p-4 bg-[#F88600] rounded-r-full w-2/12'>
          <div className={'ml-4 text-4xl font-bold'}>Con Cacao podés</div>
        </div>
        <div>
          <Image src={TiltedPhone} alt={'Fondo decorativo, celular inclinado'} />
        </div>
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
      <div className={'flex lg:px-60 sm:px-20 justify-around bg-completed-tasks bg-no-repeat bg-left-bottom'}>
        <div className='basis-2/3'>
          <Image src={Encuestas} alt={'Lugares por el cual acceder a la encuesta'} />
        </div>
        <div className='text-right basis-1/3'>
          <div className='flex flex-col justify-center h-full'>
            <div className='flex flex-col justify-around h-2/3'>
              <Title color={'#F88600'}>
                Encuestas
              </Title>
              <p className={'text-3xl text-black'}>
                Tus clientes acceden a una <strong>breve encuesta</strong> donde evalúan su <strong>experiencia</strong> y, a cambio, obtienen un <strong> beneficio para utilizar en su próxima compra.</strong>
              </p>
              <div className={'text-center'} >
                <Button>Ver encuesta</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-10' />
      {/* Google Reviews */}
      <div className={'flex justify-around lg:pr-60 sm:pr-20'}>
        <div className='basis-2/3'>
          <div className='flex flex-col items-center space-y-16'>
            <div>
              <Title color={'#F88600'}>
                Encuesta customizable
              </Title>
            </div>
            <p className={'text-3xl text-black text-[32px] font-light'}>
              Diferentes opciones, adaptables a tus necesidades.
            </p>
            <div className={'pb-1'} />
            <Image src={GoogleReviewsYellow} alt={'Logo de Google Reviews'} />
            <p className={'text-3xl text-[#717171] text-[32px] font-extrabold'}>
              Mejorá las reseñas de Google Reviews
            </p>
          </div>
        </div>
        <div className='basis-1/3 flex flex-col items-center space-y-8'>
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
              <Image src={HumanInCircle} alt={'persona en un circulo, icono'} />
              <p className='text-[#353535]'>Comparación por sucursal</p>
            </div>
            <div className={'text-center'}>
              <Image src={TrendingArrow} alt={'persona en un circulo, icono'} />
              <p className='text-[#353535]'>Analisis de datos</p>
            </div>
          </div>
        </div>
      </div>
      {/* Carrousel */}
    </div >
  )
}

export default Home;
