import React from "react";
// import 
function Card({username = 'LG', obj}){

    
    return(
        <div className="flex flex-col border border-slate-400 rounded-xl my-4 p-4  gap-4 justify-center items-center">
            <img
            src='../src/assets/react.svg'
            alt=''
            />
            <h1 className="text-2xl  p-3 rounded">
                Card for Photos
            </h1>
            <h2 className="font-bold text-blue-500">{username}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, repudiandae.</p>
            <p></p>
        </div>
    )
}
export default Card;