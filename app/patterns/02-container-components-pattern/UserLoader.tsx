"use client";

import React, { ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface UserLoaderProps {
  userID: string;
  children: ReactNode;
}

export const UserLoader = ({ userID, children }: UserLoaderProps) => {
  const [user, setUser] = useState(null);
  //   console.log(userID);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:3030/users/${userID}`);
      setUser(response.data);
    })();
  }, [userID]);

  //   console.log(user);

  return user ? (
    <>
      {React.Children.map(children, (child) => {
        // console.log(child);

        if (React.isValidElement(child)) {
          // @ts-ignore
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </>
  ) : (
    <p>Loading...CurrentUserLoader</p>
  );
};
