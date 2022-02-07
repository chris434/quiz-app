import { useContext } from 'react'
import ButtonContext from './context/button-context'
function Button({ event, style, content, freeze }: any) {
  const { state }: any = useContext(ButtonContext)

  return (
    <button
      className={`self-center ${style}p-3 text-white`}
      onClick={(e) => (freeze ? event() : !state ? event() : null)}
    >
      {content}
    </button>
  )
}
export default Button
