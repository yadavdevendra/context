import React, { useContext } from 'react'
import GridData from './GridData'

import { AppProvider } from "@shopify/polaris";
import { useFetchApi } from "../context/Contextapi";

const Home = () => {
   const product  = useFetchApi();
  return (
    <AppProvider>
      <GridData product={product} />
    </AppProvider>
  );
}

export default Home