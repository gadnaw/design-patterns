interface SmallPersonListItemProps {
    person: {
        name: string,
        age: number,
    } 
}

function SmallPersonListItem({person}:SmallPersonListItemProps){
    const {name, age} = person;

  return (
    <>
    
      <p>Name: {name}, Age: {age} years</p>
    </>
  ) 
}

export default SmallPersonListItem