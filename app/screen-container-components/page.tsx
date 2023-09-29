import React from "react";
import { CurrentUserLoader } from "../patterns/02-container-components-pattern/CurrentUserLoader";
import { UserInfo } from "../patterns/02-container-components-pattern/UserInfo";
import { UserLoader } from "../patterns/02-container-components-pattern/UserLoader";
import { ResourceLoader } from "../patterns/02-container-components-pattern/ResourceLoader";
import { ProductInfo } from "../patterns/02-container-components-pattern/ProductInfo";
import { DataSource } from "../patterns/02-container-components-pattern/DataSource";

import axios from "axios";

let tempUser = {
  name: "j",
  age: 1,
  hairColor: "b",
  hobbies: ["ss", "sss"],
};

const getLocalStorageData = (key: string) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }: { message: string }) => <h1>{message}</h1>;

function page() {
  return (
    <>
      <h3 className="m-0 p-0">Version 1: Current User Loader</h3>
      <p className="m-0 p-0">
        NOTE: in this code, it demonstrates the of UserInfo without parameters{" "}
      </p>
      <CurrentUserLoader>
        {/* @ts-ignore */}
        <UserInfo />
      </CurrentUserLoader>
      <p>=============================================</p>
      <h3 className="m-0 p-0">Version 2: User Loader</h3>
      <p className="m-0 p-0">Description: Load user by its ID </p>
      <UserLoader userID="123">
        {/* @ts-ignore */}
        <UserInfo />
      </UserLoader>
      <UserLoader userID="234">
        {/* @ts-ignore */}
        <UserInfo />
      </UserLoader>
      <UserLoader userID="345">
        {/* @ts-ignore */}
        <UserInfo />
      </UserLoader>
      <p>=============================================</p>
      <h3 className="m-0 p-0">Version 3: Resource Loader</h3>
      <p className="m-0 p-0">
        Description: On this pattern, we will use addition two parameters
        (resourceURL and resourceName){" "}
      </p>
      <h5>User:</h5>
      <ResourceLoader
        resourceURL="http://localhost:3030/users/123"
        resourceName="user"
      >
        {/* @ts-ignore */}
        <UserInfo />
      </ResourceLoader>
      <h5>Product:</h5>
      <ResourceLoader
        resourceURL="http://localhost:3030/products/1234"
        resourceName="product"
      >
        {/* @ts-ignore */}
        <ProductInfo />
      </ResourceLoader>
      <p>=============================================</p>
      <h3 className="m-0 p-0">Version 4: Data Source Loader</h3>
      <p className="m-0 p-0">
        Description: On this Pattern, the Component does not know where is the
        Data coming from.
      </p>
      <p>
        NOTE: research more on server ACTIONS and USE SERVER to implement this
      </p>

      {/* <DataSource
            getDataFunc={async () => {
              const response = await axios.get(url);
              console.log(response.data);
              return response.data;
            }}
            resourceName="user"
            >
            <UserInfo />
          </DataSource> */}
      <p>=============================================</p>
      <h3 className="m-0 p-0">
        Version 5: Data Source Loader to local storage
      </h3>
      <p className="m-0 p-0">
        Description: On this Pattern, the Component does not know where is the
        Data coming from.
      </p>
      <p>
        NOTE: research more on server ACTIONS and USE SERVER to implement this
      </p>

      {/* <DataSource
        getDataFunc={
          getLocalStorageData("message")
            ? getLocalStorageData("message")
            : { message: "empty" }
        }
        resourceName="message"
      >
        <Text />
      </DataSource> */}
    </>
  );
}

export default page;
