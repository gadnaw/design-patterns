"use client";

import React, { ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface CurrentUserLoaderProps {
  children: ReactNode;
}

export const CurrentUserLoader = ({ children }: CurrentUserLoaderProps) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3030/current-user");
      setUser(response.data);
    })();
  }, []);

  // console.log(user);

  return user ? (
    <>
      {React.Children.map(children, (child) => {
        // console.log(child);

        if (React.isValidElement(child)) {
          // const data = { ["user"]: user };
          // console.log("asdf");

          // console.log(data);
          // @ts-ignore
          const elem = React.cloneElement(child, { user });

          console.log(elem);

          return elem;
        }

        return child;
      })}
    </>
  ) : (
    <p>Loading...CurrentUserLoader</p>
  );
};
