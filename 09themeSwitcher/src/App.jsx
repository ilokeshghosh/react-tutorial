import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/theme'


function App() {
  // const [count, setCount] = useState(0)
  const [themeMode, setthemeMode] = useState('light');

  const darkTheme = () => {
    setthemeMode('dark');
  }

  const lightTheme = () => {
    setthemeMode('light');
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>

      <div className='w-full'>
        <div className='flex w-[60%] flex-col justify-center items-center mx-auto'>
          <div className='w-screen  mx-5 flex justify-end'>
            <ThemeBtn />
          </div>

          <div className='w-[50%] '>
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
