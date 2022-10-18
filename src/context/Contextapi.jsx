import { useContext } from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";

// context is created
export const ProductContext = createContext();
// we created a provider
export default function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProduct(data);
    }
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
}

export function useFetchApi() {
  const context = useContext(ProductContext);
  return context;
}