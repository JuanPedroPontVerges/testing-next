import { trpc } from '@/utils/trpc'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { name: 'Juan Pedro' }]);
  return (
    <div className='text-sky-400'>
      <>
        {isLoading ? 'Loading...' : data}
      </>
    </div>
  )
}

export default Home
