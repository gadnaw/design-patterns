import RegularList from "../patterns/01.2-list-item-patterns/RegularList";
import LargePersonListItem from "../patterns/01.2-list-item-patterns/people/LargePersonListItem";
import SmallPersonListItem from "../patterns/01.2-list-item-patterns/people/SmallPersonListItem";

const people = [{
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
}, {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
}, {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD screen a great deal',
    rating: 4.5,
},{
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros use',
    rating: 3.8,
}, {
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2,
}];


function page() {
    return (
        <>
    <div>List Item Pattern</div>
        {/* @ts-ignore */}
    <RegularList items= {people} resourceName="person" itemComponent={SmallPersonListItem}/>
        {/* @ts-ignore */}
    <RegularList items= {people} resourceName="person" itemComponent={LargePersonListItem}/>
    </>
  )
}

export default page