import Head from 'next/head'
import MainLayout from '../src/shared/MainLayout'
// import Navbar from '../src/shared/Navbar'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Home</title>     
      </Head>
      <div>
        <h1>Home</h1>
      </div>
    </MainLayout>
  )
}
