import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setError(false);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Canceled", error.message);
          return;
        }
        // console.log('ERROR')

        setError(true);
      } finally {
        setLoading(false);
      }

      return () => {
        controller.abort();
      };
    })();
  }, [search]);

  // const [products, error, loading] = customReactQuery("/api/products");

  if (error) {
    return <h1>Error Detected</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Handling API</h1>
      <input
        type="text"
        name="search"
        id=""
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2>Number of Products are : {products.length}</h2>
    </>
  );
}

export default App;

const customReactQuery = (url) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        const response = await axios.get(url);
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        // console.log('ERROR')
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return [products, error, loading];
};
