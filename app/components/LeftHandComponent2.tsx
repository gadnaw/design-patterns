interface LeftHandeComponent2Props {
  name: String
}

function LeftHandComponent2({name}:LeftHandeComponent2Props) {
  return (
    <div className='text-xl bg-red-300'>{name}</div>
  )
}

export default LeftHandComponent2