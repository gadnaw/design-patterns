"use client";

import React, { ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface ResouceLoaderProps {
  resourceURL: string;
  resourceName: string;
  children: ReactNode;
}

export const ResourceLoader = ({
  resourceURL,
  resourceName,
  children,
}: ResouceLoaderProps) => {
  const [state, setState] = useState(null);

  //   console.log("sajfshflkashflkshfdlkhsf");
  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceURL);
      //   console.log(response.data);
      setState(response.data);
    })();
  }, [resourceURL]);

  //   console.log(`${state} what is this?`);
  return state ? (
    <>
      {React.Children.map(children, (child) => {
        // console.log({ [resourceName]: state });

        if (React.isValidElement(child)) {
          const data = { [resourceName]: state };

          console.log(data);

          return React.cloneElement(child, { [resourceName]: state });
        }

        return child;
      })}
    </>
  ) : (
    <p>Loading... ResourceLoader</p>
  );
};
