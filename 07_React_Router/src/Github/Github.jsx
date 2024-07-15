import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    //hook by the react-route
    const data=useLoaderData()

    //insetad of this follwing we have done githubInfoLoader and using loader functionality
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/RohitM009")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="text-center bg-blue-700 text-white p-4 text-3xl">
      <div>Name :{data.name}</div>
      Followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export const githubInfoLoader= async()=>{
    const res=await fetch('https://api.github.com/users/RohitM009')
    return res.json();

}