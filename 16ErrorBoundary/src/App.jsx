import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ErrorBoundary>
        <Hero heroName={"Batman"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Superman"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Joker"} />
      </ErrorBoundary>
    </>
  );
}

export default App;
