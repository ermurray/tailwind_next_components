import Button from '@/components/Button'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>LoanLaunch-Home</title>
        <meta name="Home" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div>
          <h1 className='text-red-800'>
            Hello World!
          </h1>
          <Button
            color={'blue'}
            // variant={'btn-secondary'}
            onClick={()=> alert('clicking stuff')}
            loading={true}
          >
          Testing das Button
          </Button>
        </div>
      </main>

   
    </div>
  )
}

export default Home
