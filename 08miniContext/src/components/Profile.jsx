import React, { useContext } from "react"
import UserContext from "../context/UserContext"
export default function Profile(){
    const{user} = useContext(UserContext);
    // console.log(user);
    if(!user) return <h1>Not Logged in</h1>;
    return(
        <div>
            <h2>Username:{user.username}</h2>
            <h3>Password:{user.password}</h3>
        </div>
    )
}