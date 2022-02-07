import { useSession, signIn, signOut } from 'next-auth/react'
import Logo from '../public/Z.png'
import Button from './Button'
import useToggle from './hooks/useToggle'

function Header() {
  const { data: session, status }: any = useSession()
  const [toggle, setToggle]: any = useToggle(false)

  return (
    <>
      <header className="m-2 flex w-full justify-between p-3">
        <div className="flex">
          <img className="w-14" src={Logo.src} alt="" />
          <h1 className="text-bold hidden self-center text-5xl text-cyan-300 sm:block">
            Quizzer
          </h1>
        </div>
        {status == 'unauthenticated' ? (
          <Button
            style="self-center border-2 border-cyan-500 p-3 text-cyan-500"
            event={signIn}
            content="sign in"
          ></Button>
        ) : (
          <Button
            content={
              <img
                className="w-14 self-center rounded-full "
                src={session?.user.image}
              />
            }
            event={() => setToggle()}
          />
        )}
      </header>
      <hr className="border-cyan-500" />
      <div className="relative">
        <div
          className={`${
            toggle ? 'block' : 'hidden'
          } absolute top-0 right-0 flex w-56 flex-col justify-center bg-white p-3`}
        >
          <small className="text-center text-xl">{session?.user.name}</small>
          <hr className="m-3 border-black" />

          <Button
            style=" bg-cyan-500 p-2 text-2xl text-white"
            event={() => signOut()}
            content="sign out"
          />
        </div>
      </div>
    </>
  )
}
export default Header
