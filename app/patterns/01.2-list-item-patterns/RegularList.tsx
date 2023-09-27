interface IPerson  {
    name: string,
    age: number,
    hairColor: string,
    hobbies: string[]
}

interface RegularListProps {
    items: IPerson[];
    resourceName: string;
    itemComponent: React.FC< IPerson >
}

function RegularList({items, resourceName, itemComponent: ItemComponent,}: RegularListProps) {
  return (
    <>
     {items.map((item, i) => (
      // @ts-ignore
         <ItemComponent key={i} {...{[resourceName]: item}}/>
    ))}
    </>
  )
}

export default RegularList