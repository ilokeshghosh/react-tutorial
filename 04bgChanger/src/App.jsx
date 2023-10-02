import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'




function App() {
  const [color, setColor] = useState('olive');

  // function changeColor(color){
  //  setColor(color);
  // }

  function getColorCode() {
    const code = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + code;
  }

  return (
    <div className='w-full h-screen duration-200 ' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('lightgreen')} style={{ backgroundColor: 'lightgreen' }} className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>green</button>
          <button onClick={() => setColor('lightblue')} style={{ backgroundColor: 'lightblue' }} className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Blue</button>
          <button onClick={() => setColor('lightcyan')} style={{ backgroundColor: 'lightcyan' }} className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Cyan</button>
          <button onClick={() => setColor('violet')} style={{ backgroundColor: 'violet' }} className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'>Violet</button>
          <button onClick={() => {
            setColor(getColorCode());
          }} className='outline-none px-4 py-1 rounded-full  shadow-lg text-black' style={{ backgroundColor: color }}>Let's Us Choose</button>
        </div>
      </div>

    </div>
  )
}

export default App
