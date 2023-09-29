======================
Uncontrolled Components
======

- Components that keep track of their own STATES and release data ONLY when some event occurs (that is, the submit event for HTML forms)

  EXAMPLE:
  const MyComponent = ({onSubmit}) => {
  const [someState, setState] = useState(...)

      return ...;

  }

  <MyComponent onSubmit={data => ....}>

=====================
Controlled Components
==========

- Components that do not keep track of their own state--all state is passed in as props(that is, when we use the useState Hook with text inputs)
- we prefer controlled for REUSABLE and easier to TEST

  EXAMPLE:
  const MyComponent = ({data, changeData, onSubmit}) => {
  return ...'
  }

<MyComponent
data = {...}
changeData = {() => ...}
onSubmit={()=> ...}
/>
