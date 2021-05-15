import Head from 'next/head'
import MainLayout from '../src/shared/MainLayout'
// import Navbar from '../src/shared/Navbar'

export default function About() {
  return (
    <MainLayout>
      <Head>
        <title>About</title>     
      </Head>
      <div>
        <h1>About</h1>
      </div>
    </MainLayout>
  )
}
