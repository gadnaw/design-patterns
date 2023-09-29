"use client";

//BEWARE:
//add "use client" for the child component (Presentational Component) of a "Container component"
interface UserInfoProps {
  user: {
    name: string;
    age: number;
    hairColor: string;
    hobbies: string[];
  };
}

export const UserInfo = ({ user }: UserInfoProps) => {
  const { name, age, hairColor, hobbies } = user || {};

  return (
    <>
      <h4>{name}</h4>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h5>Hobbies:</h5>
      <ul>
        {hobbies.map((hobby: string) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};
