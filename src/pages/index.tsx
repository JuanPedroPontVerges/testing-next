import { trpc } from '@/utils/trpc'
import type { NextPage } from 'next'
import Image from 'next/image';
import Dasboard from 'public/dashboard.png'

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { name: 'Juan Pedro' }]);
  return (
    <div className='flex flex-row justify-between'>
      <div className={"flex flex-col pl-20 gap-y-20 pt-20"}>
        <div>
          <h1 className={"uppercase font-bold text-xl"}>Plataforma web para
            <br />vendedores
          </h1>
        </div>
        <div>
          <h2 className='text-[#F88600] text-6xl font-extrabold'>
            Tu cliente, <br /> con vos
          </h2>
        </div>
      </div>
      <div className='pt-20 pr-20'>
        <Image src={Dasboard} height={637} width={757} alt={'Cacao métricas'} />
      </div>
    </div>
  )
}

export default Home
