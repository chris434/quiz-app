function Input({ attributes, style }: any) {
  return (
    <input
      {...attributes}
      className={`border p-2 text-lg ${style ? style : ''}`}
    />
  )
}
export default Input
