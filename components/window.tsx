import ButtonContext from './context/button-context'
import { useContext, useState } from 'react'
import Input from './Input'
function Window() {
  const [username, setUserName] = useState('')
  const [error, setError] = useState('')
  const { state, setState }: any = useContext(ButtonContext)
  return (
    <div
      className={`absolute top-1/2 left-1/2 w-screen -translate-x-1/2 -translate-y-1/2  transform ${
        state ? 'block' : 'hidden'
      }`}
    >
      <div className="flex justify-center">
        <div className="w-screen bg-white p-3 text-center sm:w-3/6 ">
          <small className="m-3 text-2xl text-cyan-500 md:text-3xl ">
            enter username for quizzer
          </small>
          <form
            className="flex flex-col justify-center p-10 text-left"
            onSubmit={(e) => {
              e.preventDefault()
              setState(false)
            }}
          >
            <label htmlFor="user-name">user name</label>
            <Input
              attributes={{
                type: 'text',
                id: 'user-name',
                required: true,
                onChange: (e: any) => {
                  setUserName(e.target.value)
                },
              }}
            />
            {error ? (
              <small className="text-lg text-red-600">{error}</small>
            ) : null}
            <Input
              style="mt-4 sm:w-2/4 bg-cyan-500 p-3 text-lg text-white w-full"
              attributes={{
                type: 'submit',
                value: 'enter',
              }}
            />
          </form>
        </div>
      </div>
    </div>
  )
}
export default Window
