import { useState } from 'react'
import dynamic from 'next/dynamic'
import { SessionProvider } from 'next-auth/react'
import ButtonContext from '../components/context/button-context'
import '../styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: any) {
  const [state, setState] = useState(true)
  const Layout = dynamic(() => import('../components/Layout'))

  return (
    <SessionProvider session={session}>
      <ButtonContext.Provider value={{ state, setState }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ButtonContext.Provider>
    </SessionProvider>
  )
}
