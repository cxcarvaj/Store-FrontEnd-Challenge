import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/components/Header'
import Home from '../src/Components/Home'
export default function Index() {
  return (
    <div>
      <Head>
        <title>C Store</title>
        <meta name="description" content="Store web app challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <Home/>
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
