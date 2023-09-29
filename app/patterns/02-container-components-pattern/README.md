Container Components

- components that take care of loading and managing data for their chil components

The Idea of Conatiner Components

- Our components shouldn't know where their data is coming from.

EXAMPLE:

const Container = () => {
//load the data

    return (
        //pass data to children
    )

}

const Child1 = ({data}) => {
return (
//display the data
)
}

////////////////////
// How-To-Use this
/////////////////////

1. go to folder ../pattern-express/no-db-server
2. node server.js
3. open package.json of this project
4. add "proxy": "http://localhost:3030/" <== search more about this
