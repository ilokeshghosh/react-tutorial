import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService  from './appwrite/auth'
function App() {
 const[loading, setLoading] = useState(true);
 const dispatch = useDispatch();

 useEffect(()=>{
})

  return (
    <>
     <h1>This is project Title</h1>
    </>
  )
}

export default App
