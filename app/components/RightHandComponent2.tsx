interface RightHandComponent2Props {
  message: String
}

function RightHandComponent2({message}: RightHandComponent2Props) {
  return (
    <div className=' bg-yellow-300'>{message}</div>
  )
}

export default RightHandComponent2