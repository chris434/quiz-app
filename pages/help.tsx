import { useSession } from 'next-auth/react'

function Help() {
  const { data: session, loading, status }: any = useSession()
  console.log(status)
  return session ? <h1>hello</h1> : 'not sign in'
}
export default Help
