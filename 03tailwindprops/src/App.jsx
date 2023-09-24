import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card';
function App() {
  let myObj ={
    name:'lokesh',
    age:22,
    address:{
        city:'Kolkata',
        state:'West Bengal',
        country: 'India'
    }
}

let newArr =[1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
      <h1 className='font-bold text-blue-500 bg-blue-100 border-2 border-blue-500 hover:bg-blue-500 hover:text-blue-300 rounded-xl py-4 px-8'>Vite With Tailwind</h1>
      <Card username='Lokesh Ghosh' myObj myArr={newArr}/>
      <Card username='Rakesh Roshan'/>
      <Card />
    </>
  )
}
export default App
