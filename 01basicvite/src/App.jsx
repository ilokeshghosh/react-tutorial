import Youtube from "./Youtube"
import React from 'react'
import ReactDOM from 'react-dom/client'

const username = 'lokesh'

const h1Tag = (
  <h1>Username {"_"} is</h1>
)

const Reacth1Tag = React.createElement(
  'h1',
  {href: 'gogo.com'},
  'Username',
  " _ ",
  'is'
)

function App() {
  return (
    <>
    <h1>Chai aur code in vite {2+5}</h1>
    <h1>Username is  {username}</h1>
    <h1>Username {" "} is</h1>
    {/* <h1>App is  {if(username === 'lokesh') ? 'yes' : 'no'}</h1> */}

    <Youtube/>
    </>
    

  )
}

export default App

