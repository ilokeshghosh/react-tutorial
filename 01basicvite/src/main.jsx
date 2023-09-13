import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Youtube from './Youtube.jsx'

const reactElement = {
    type : 'a',
    props : {
        href: "https://google.com",
        target: '_blank'
    },
    children : 'Click me to Visit Google'
}

function MyApp(){
    return(
        <div>
            <h1>This is custom react function</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const areactElement = React.createElement(
    'a', //element
    {href : 'https://google.com', target : '_blank'}, //attributes
    'Click to visit google' //children(innerContent/innerHTML)
)
ReactDOM.createRoot(document.getElementById('root')).render(
    // <>
    // <App /> 
    // <Youtube/> 
    // </>


    // MyApp() //not recommended
    // <MyApp/>


    // rendering element
    // <AnotherElement/> //this will not work 
    // AnotherElement //it will work

    // reactElement //this will not work

    // areactElement //this will work

    <App/>






)
