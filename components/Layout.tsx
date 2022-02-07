import Header from './Header'
import Window from './window'
import ButtonContext from './context/button-context'
import { useSession } from 'next-auth/react'
import { useContext } from 'react'

function Layout({ children }: any) {
  const { state, setState }: any = useContext(ButtonContext)
  const { status } = useSession()

  status === 'unauthenticated' ? setState(false) : null
  document.body.style.overflow = state ? 'hidden' : 'auto'

  return (
    <div className="w-full">
      <Window />
      <div className={state ? ' opacity-25' : ''}>
        <Header />
        {children}
      </div>
    </div>
  )
}
export default Layout
