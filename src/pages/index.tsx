import type { NextPage } from 'next'
import Image from 'next/image';
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import { Carousel } from 'react-bootstrap';
import { useEffect, useState } from 'react';
/* Images */
import Dasboard from 'public/dashboard.svg'
import Twittter from 'public/twitter.png';
import Iphones from 'public/iphones.png'
import Marketing from 'public/marketing.svg'
import People from 'public/people.svg'
import GoogleReviews from 'public/google-reviews.svg'
import Encuestas from 'public/encuestas.svg'
import TiltedPhone from 'public/celular-inclinado.png'
import GoogleReviewsYellow from 'public/google-reviews-yellow.png'
import VideoPreview from 'public/preview-video.png';
import WhatsappScreens from 'public/pantallas-whatsapp.png';
import Macbook from 'public/macbook.png';
import HumanInCircle from 'public/persona-en-circulo.png';
import MotorcycleInCircle from 'public/moto-en-circulo.png';
import TrendingArrow from 'public/flecha-tendencia.png';
import YellowStore from 'public/tienda-amarilla.png';
import HandWithCoin from 'public/mano-con-moneda.png';
import Community from 'public/comunidad.png';
/* Components */
import Title from '@/components/Title';
import Button from '@/components/Button';
import Line from '@/components/Line';
import Input from '@/components/Input';
import Select from '@/components/Select';
import TextArea from '@/components/TextArea';
import ResponsiveLineBreak from '@/components/ResponsiveLineBreak';
import FormErrorMessage from '@/components/FormErrorMessage';

const Home: NextPage = () => {
  /* States */
  const [isSendFormButtonDisabled, setIsFormButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    restaurant?: string;
    message?: string;
  }>();
  const [okMessage, setOkMessage] = useState<string>();
  const [emailError, setEmailError] = useState<string>();
  // const location = useLocation();
  /* Use Effect */
  useEffect(() => {
    emailjs.init("Vt494UNJrzrVcdNqg")
  }, [])

  useEffect(() => {
    console.log('errors', errors);
  }, [errors])
  /* Private Functions */
  const checkValidity = (inputName: string, inputValue: string) => {
    switch (inputName) {
      case "email":
        let pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return pattern.test(inputValue);
      case "name":
        return inputValue.length > 0;
      case "restaurant":
        return inputValue.length > 0;
      case "message":
        return inputValue.length > 0;
      default:
        return true;
    }
  };
  const sendEmail = (e: any) => {
    console.log('e', e);
    e.preventDefault();
    let error = false;
    for (let i of e.target) {
      if (!checkValidity(i.name, i.value)) {
        error = true;
        setErrors((prevValue) => {
          return {
            ...prevValue,
            [i.name]: 'Porfavor complete el campo!',
          }
        })
        let element = document.getElementById(i.name)
        element?.classList.add("is-invalid");
      }
      else {
        if (i.name) {
          document.getElementById(i.name)?.classList?.remove("is-invalid");
        }
      }
    }
    // Define error message
    if (error) {
      setErrorMessage('Error!');
    }
    else {
      // Send the email
      emailjs.sendForm('service_6qhzoqo', 'template_ywqehmy', e.target)
        .then((result) => {
          for (let field of e.target) {
            let element = document.getElementById(field.name);
            if (element != null) {
              // element.value = ""; Commenting for now because it throws error
            }
            setOkMessage('¡Enviado con Éxito!');
          }
        },
          (error) => {
            setEmailError('error!');
          });
    }
  }
  const onChange = (value: any) => {
    if (value) setIsFormButtonDisabled(false);
    else setIsFormButtonDisabled(true);
  }

  return (
    <div className='flex flex-col'>
      <div className={'lg:px-54 sm:px-20  bg-[#27253B]'}>
        {/* Banner */}
        <div className='flex flex-row justify-between'>
          <div className={"flex flex-col pt-20"}>
            <div>
              <h1 className={"uppercase font-bold text-2xl"}>Plataforma web para
                <ResponsiveLineBreak /> vendedores
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
      <div className='p-4' />
      <div className={'lg:px-60 px-20  bg-white'}>
        {/* Request your demo */}
        <div className='flex flex-row justify-between'>
          <div className='basis-1/2'>
            <Image src={Iphones} alt={'Iphones'} />
          </div>
          <div className='basis-1/2 flex flex-col items-center gap-y-32'>
            <h2 className='text-6xl font-extrabold text-right'>
              <span className='text-[#27253B]'>
                Todo lo que tu{' '}
                <ResponsiveLineBreak />
                comercio necesita{' '}
              </span>
              <ResponsiveLineBreak />
              <span className='text-[#F88600]'>
                para incrementar {' '}
                <ResponsiveLineBreak />
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
      <div className='p-4' />
      { /* Flag */}
      <div className='flex flex-row justify-between items-start'>
        <div className='p-3 md:p-4 bg-[#F88600] rounded-r-full md:w-3/12 w-5/12'>
          <div className={'ml-4 text-4xl font-bold'}>Con Cacao podés</div>
        </div>
        <div>
          <Image src={TiltedPhone} alt={'Fondo decorativo, celular inclinado'} />
        </div>
      </div>
      <div className={'flex flex-row justify-around items-center text-black text-2xl'}>
        <div className={'basis-1/3 text-center mx-auto'}>
          <Image src={Marketing} alt={'Campañas'} width={249} />
        </div>
        <div className={'basis-1/3 text-center'}>
          <Image src={People} alt={'Campañas'} width={262} />
        </div>
        <div className={'basis-1/3 text-center'}>
          <Image src={GoogleReviews} alt={'Campañas'} width={293} />
        </div>
      </div>
      <div className={'flex flex-row justify-around items-center text-black text-2xl'}>
        <div className={'basis-1/3 text-center md:pr-20'}>
          <p className='md:w-2/4 mx-auto'>
            Realizar publicidad dirigida
          </p>
        </div>
        <div className={'basis-1/3 text-center'}>
          <p className='md:w-2/4 mx-auto'>
            Llevar un control del personal y de los estándares de la marca
          </p>
        </div>
        <div className={'basis-1/3 text-center'}>
          <p className='md:w-2/4 mx-auto'>
            Gestionar las críticas negativas y aumentar las positivas
          </p>
        </div>
      </div>
      <div className='p-4' />
      { /* Encuestas*/}
      <div className={'flex lg:px-60 sm:px-20 justify-around bg-completed-tasks bg-no-repeat bg-left-bottom'}>
        <div className='basis-1/2 md:basis-2/3'>
          <Image src={Encuestas} alt={'Lugares por el cual acceder a la encuesta'} />
        </div>
        <div className='text-right basis-1/2 md:basis-1/3'>
          <div className='flex flex-col justify-center h-full'>
            <div className='flex flex-col justify-around h-2/3'>
              <Title color={'#F88600'}>
                Encuestas
              </Title>
              <p className={'text-3xl text-black'}>
                Tus clientes acceden a una <strong>breve encuesta</strong> donde evalúan su <strong>experiencia</strong> y, a cambio, obtienen un <strong> beneficio para utilizar en su próxima compra.</strong>
              </p>
              <div className={'text-center'} >
                <Button type={'submit'} id={'send'}>Ver encuesta</Button>
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
              <Image src={YellowStore} alt={'persona en un circulo, icono'} />
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
          <h2 className={'text-[#F88600] font-black text-6xl'}>
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
                <Image src={Twittter} alt={'Mano con moneda'} />
                <h3 className={'mt-4 text-[28px] font-medium text-center'}>Elegí tus beneficios</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='flex flex-col items-center justify-center h-[500px] text-black'>
                <Image src={Twittter} alt={'Comunidad cacao'} />
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
      <div className={'flex flex-col p-8 bg-form bg-no-repeat bg-cover'}>
        <div className='p-4'>
          <h3 className={'font-bold text-[40px] text-center text-[#343434]'}>¿Listo para hacer crecer tu comercio? <span className={'text-[#F88600]'}>¡Contactanos!</span></h3>
        </div>
        <div className='p-8' />
        <form onSubmit={sendEmail} className={'flex flex-col items-center text-black'}>
          <div className={'w-1/2'}>
            {/* Datos de Contacto */}
            <div>
              <h4 className='text-[#343434] font-bold text-2xl'>Datos de contacto</h4>
            </div>
            <div className={'p-1'} />
            <div>
              <Input name={'name'} placeholder='Nombre y Apellido' />
              <FormErrorMessage>
                {errors?.name}
              </FormErrorMessage>
            </div>
            <div className={'p-3'} />
            <div className='flex flex-row justify-between gap-4'>
              <div>
                <Input name={'cp'} placeholder='Cód.área' />
              </div>
              <div>
                <Input name={'phone'} placeholder='Teléfono' />
              </div>
              <div className={'basis-1/2'}>
                <Input name={'email'} placeholder='Correo eletrónico' />
                <FormErrorMessage>
                  {errors?.email}
                </FormErrorMessage>
              </div>
            </div>
            {/* Datos del Comercio */}
            <div className={'p-3'} />
            <div>
              <h4 className='text-[#343434] font-bold text-2xl'>Datos del comercio</h4>
            </div>
            <div className={'p-1'} />
            <div>
              <Input name={'restaurant'} placeholder='Nombre de la empresa' />
              <FormErrorMessage>
                {errors?.restaurant}
              </FormErrorMessage>
              {/* Ubicación */}
              <div className={'p-3'} />
              <div className='flex flex-row'>
                <div className={'basis-1/2'}>
                  <h4 className='text-[#343434] font-bold text-lg'>Argentina</h4>
                  <Select name={'country'} options={[{ label: 'Argentina', value: 'Argentina' }]} />
                </div>
                <div className={'p-2'} />
                <div className={'basis-1/2'}>
                  <h4 className='text-[#343434] font-bold text-lg'>Provincia</h4>
                  <Select name={'locality'} options={[{ label: 'Córdoba', value: 'Córdoba' }]} />
                </div>
              </div>
              {/* Consulta */}
              <div className={'p-3'} />
              <div>
                <h4 className='text-[#343434] font-bold text-2xl'>Consulta</h4>
              </div>
              <div>
                <TextArea name={'message'} placeholder='Mensaje' rows={10} />
                <FormErrorMessage>
                  {errors?.message}
                </FormErrorMessage>
              </div>
              <div className="font-bold text-green-600 font-3xl text-left pb-2">
                {okMessage}
              </div>
              <ReCAPTCHA
                sitekey="6Ld1AVogAAAAAMQ_WhUMhPkUmyqDYR7fD_zcG6QS"
                onChange={onChange}
                className="recaptcha"
                id="captcha"
              />
              <div className="error-msg">
                {emailError}
                {errorMessage}
              </div>
              <div className={'p-3'} />
              <button disabled={isSendFormButtonDisabled} className={`w-full transition-colors ${isSendFormButtonDisabled ? 'bg-gray-400' : 'bg-[#F88600]'} font-bold text-white p-2 rounded-[30px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}>Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home;
