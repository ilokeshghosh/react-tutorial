import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data=useLoaderData();
    // https://api.github.com/users/ilokeshghosh

    // const [data, setData] = useState();
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ilokeshghosh')
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //         // console.log('got data');
    //         // console.log(data);
    //         setData(data);
    //     })
    // },[])

    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            GitHub followers: {data.followers}
            <img className="mx-auto" src={data.avatar_url} width={300} alt="" />
        </div>
    )

}

export default Github;


export const githubInfoLoader= async()=>{
    console.log('data loading');
    const response= await fetch('https://api.github.com/users/ilokeshghosh')
    return response.json();
}