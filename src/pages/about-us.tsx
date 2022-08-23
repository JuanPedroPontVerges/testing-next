import { NextPage } from "next";
import Image from "next/image";
/* Images */
import Puzzle from 'public/puzzle.png';
import TeamWork from 'public/team-work.png';
import Improvement from 'public/improvement.png';
import Lightbulb from 'public/lightbulb.png';
import Team from 'public/team.png';
import TeamIcon from 'public/equipo.svg';
// Team Members
import JuanPedro from 'public/juan-pedro.png';
/* Components */
import TeamMemberCard from "@/components/TeamMemberCard";

const AboutUs: NextPage = () => {
    return (
        <>
            <div className="bg-about-us-banner bg-no-repeat bg-cover items-center">
                <div className={'flex flex-col justify-center items-center h-screen'}>
                    <h1 className={'text-7xl text-[#F88600] font-black'}>Conocenos</h1>
                </div>
            </div>
            <div className={'py-20'} />
            <div className={'flex justify-around align-middle lg:pr-60 sm:pr-20'}>
                <div className='basis-2/3 flex flex-col items-center justify-center'>
                    <Image src={Puzzle} alt={'Icono de rompecabezas'} />
                </div>
                <div className='text-left basis-1/3 flex flex-col justify-around gap-20'>
                    <h3 className="text-[#343252]/50 text-4xl">
                        WIN-WIN
                    </h3>
                    <h2 className={'text-6xl font-black text-[#27253B]'}>
                        Si vos ganas, nosotros también
                    </h2>
                    <p className={'text-3xl font-medium text-[#9A98A8]'}>
                        Te brindamos las herramientas necesarias para que conozcas a tus clientes, potencies tus ventas y puedas ofrecer una mejor experiencia.
                    </p>
                </div>
            </div>
            <div className={'py-20'} />
            <div className={'flex justify-around align-middle lg:pl-60 sm:pl-20'}>
                <div className='text-left basis-1/3 flex flex-col justify-around gap-20'>
                    <h3 className="text-[#343252]/50 text-4xl">
                        HIGH FIVE
                    </h3>
                    <h2 className={'text-6xl font-black text-[#27253B]'}>
                        Trabajo en equipo
                    </h2>
                    <p className={'text-3xl font-medium text-[#9A98A8]'}>
                        Buscamos trabajar en conjunto con nuestros clientes y generar una comunidad en la que predominen la confianza, la seguridad y la honestidad.
                    </p>
                </div>
                <div className='basis-2/3 flex flex-col items-center justify-center'>
                    <Image src={TeamWork} alt={'Icono de trabajo en equipo'} />
                </div>
            </div>
            <div className={'py-20'} />
            <div className={'flex justify-around align-middle lg:pr-60 sm:pr-20'}>
                <div className='basis-2/3 flex flex-col items-center justify-center'>
                    <Image src={Improvement} alt={'Icono de mejora'} />
                </div>
                <div className='text-left basis-1/3 flex flex-col justify-around gap-20'>
                    <h3 className="text-[#343252]/50 text-4xl">
                        EFICACIA Y EFICIENCIA
                    </h3>
                    <h2 className={'text-6xl font-black text-[#27253B]'}>
                        Mejora continua
                    </h2>
                    <p className={'text-3xl font-medium text-[#9A98A8]'}>
                        Detección de áreas de mejora como punto de partida para potenciar  tus productos y servicios hacia la calidad y la excelencia.
                    </p>
                </div>
            </div>
            <div className={'py-20'} />
            <div className={'flex flex-row bg-[#29204A] items-center justify-around py-20'}>
                <div>
                    <h2 className={'font-black text-6xl'}>Nuestra visión</h2>
                    <p className={'text-3xl italic'}>Queremos que tu negocio prospere y <br />
                        no solo sobreviva</p>
                </div>
                <div>
                    <Image src={Lightbulb} alt={'Foco de luz'} />
                </div>
            </div>
            <div className={'py-10'} />
            <div className={'flex justify-around align-middle lg:pl-60 sm:pl-20'}>
                <div className='text-left basis-1/3 justify-around align-middle flex flex-col font-medium'>
                    <h3 className="text-[#27253B] text-4xl font-black">
                        NUESTRO EQUIPO
                    </h3>
                    <p className={'text-3xl font-medium text-[#343252]'}>
                        Nuestro equipo es <br /> apasionado, cargado de <br /> energía y motivación. <br /> Estamos en constante <br /> aprendizaje buscando <br /> potenciar nuestras <br /> habilidades y crecer <br /> diariamente.
                    </p>
                </div>
                <div className='basis-2/3 flex flex-col items-center justify-center'>
                    <Image src={Team} alt={'Trabajo en equipo'} height={513} />
                </div>
            </div>
            <div className={'py-20'} />
            <div className={'sm:px-20 lg:px-60'}>
                <div className="flex flex-row">
                    <h3 className={'font-bold text-[#F88600] text-6xl'}>Integrantes</h3>
                    <div className={'px-1'} />
                    <Image src={TeamIcon} alt={'Icono de equipo'} />
                </div>
                <div className={'py-4'} />
                <div className={'grid md:grid-cols-3 sm:grid-cols-1 gap-4 '}>
                    <TeamMemberCard
                        linkedInUrl={'https://www.linkedin.com/in/juan-pedro-pont-verges-a44630160/'}
                        twitterUrl={'https://twitter.com/juaanpedro'}
                        fullName="Juan Pedro Pont Verges"
                        role="CTO"
                        imgUrl={JuanPedro}
                        className={'basis-1/3'}
                    />
                    <TeamMemberCard
                        linkedInUrl={'https://www.linkedin.com/in/juan-pedro-pont-verges-a44630160/'}
                        twitterUrl={'https://twitter.com/juaanpedro'}
                        fullName="Juan Pedro Pont Verges"
                        role="CTO"
                        imgUrl={JuanPedro}
                        className={'basis-1/3'}
                        />
                    <TeamMemberCard
                        linkedInUrl={'https://www.linkedin.com/in/juan-pedro-pont-verges-a44630160/'}
                        twitterUrl={'https://twitter.com/juaanpedro'}
                        fullName="Juan Pedro Pont Verges"
                        role="CTO"
                        imgUrl={JuanPedro}
                        className={'basis-1/3'}
                        />
                    <TeamMemberCard
                        linkedInUrl={'https://www.linkedin.com/in/juan-pedro-pont-verges-a44630160/'}
                        twitterUrl={'https://twitter.com/juaanpedro'}
                        fullName="Juan Pedro Pont Verges"
                        role="CTO"
                        imgUrl={JuanPedro}
                        className={'basis-1/3'}
                        />
                    <TeamMemberCard
                        linkedInUrl={'https://www.linkedin.com/in/juan-pedro-pont-verges-a44630160/'}
                        twitterUrl={'https://twitter.com/juaanpedro'}
                        fullName="Juan Pedro Pont Verges"
                        role="CTO"
                        imgUrl={JuanPedro}
                        className={'basis-1/3'}
                        />
                    <TeamMemberCard
                        linkedInUrl={'https://www.linkedin.com/in/juan-pedro-pont-verges-a44630160/'}
                        twitterUrl={'https://twitter.com/juaanpedro'}
                        fullName="Juan Pedro Pont Verges"
                        role="CTO"
                        imgUrl={JuanPedro}
                        className={'basis-1/3'}
                    />
                </div>
            </div>
        </>
    )
}

export default AboutUs;