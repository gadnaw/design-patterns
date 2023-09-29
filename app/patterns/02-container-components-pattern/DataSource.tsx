"use client";

import React, { ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface DataSourceProps {
  getDataFunc: () => {};
  resourceName: string;
  children: ReactNode;
}

export const DataSource = ({
  getDataFunc,
  resourceName,
  children,
}: DataSourceProps) => {
  const [state, setState] = useState(null);

  //   console.log("sajfshflkashflkshfdlkhsf");
  useEffect(() => {
    (async () => {
      const data = await getDataFunc();
      //   console.log(response.data);
      //@ts-ignore
      setState(data);
    })();
  }, [getDataFunc]);

  //   console.log(`${state} what is this?`);
  return state ? (
    <>
      {React.Children.map(children, (child) => {
        // console.log({ [resourceName]: state });

        if (React.isValidElement(child)) {
          const data = { [resourceName]: state };

          //   console.log(data);

          return React.cloneElement(child, { [resourceName]: state });
        }

        return child;
      })}
    </>
  ) : (
    <p>Loading... ResourceLoader</p>
  );
};
