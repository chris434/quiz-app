import { useState } from 'react'

function useToggle(defaultValue: boolean) {
  const [toggle, setToggle] = useState(defaultValue)
  const checkToggle = () => {
    return toggle ? setToggle(false) : setToggle(true)
  }
  return [toggle, checkToggle]
}
export default useToggle
