import { Hero } from '../components/Hero'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Pagina de Receitas</title>
      </Head>
      <div>
        <div className="min-h-screen">
          <Hero />
        </div>
      </div>
    </>
  )
}
