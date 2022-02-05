import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/react'
import { FaGoogle } from 'react-icons/fa'
import Logo from '../public/Z.png'
import useToggle from '../compounents/hooks/useToggle'

function Home() {
  const [toggle, setToggle]: any = useToggle(false)
  const { data: session, status }: any = useSession()
  console.log(session)
  return (
    <div>
      <header className="m-2 flex w-full justify-between p-3">
        <div className="flex">
          <img className="w-14" src={Logo.src} alt="" />
          <h1 className="text-bold hidden self-center text-5xl text-cyan-300 sm:block">
            Quizzer
          </h1>
        </div>
        {status == 'unauthenticated' ? (
          <button
            className="self-center border-2 border-cyan-500 p-3 text-cyan-500"
            onClick={() => signIn()}
          >
            sign in
          </button>
        ) : (
          <img
            className="w-14 self-center rounded-full "
            src={session?.user.image}
            onClick={() => setToggle()}
          />
        )}
      </header>
      <hr className="border-cyan-500" />

      <main className="relative bg-black">
        <div
          className={`${
            toggle ? 'block' : 'hidden'
          } absolute top-0 right-0 flex w-56 flex-col justify-center bg-white p-3`}
        >
          <small className="text-center text-xl">{session?.user.name}</small>
          <hr className="m-3 border-black" />

          <button
            className=" bg-cyan-500 p-2 text-2xl text-white"
            onClick={() => signOut()}
          >
            sign out
          </button>
        </div>
      </main>
    </div>
  )
}
export default Home
