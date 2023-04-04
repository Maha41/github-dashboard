import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Repos from "./components/Repos";  // new

reportWebVitals();




function App() {
  return (
    <ChakraProvider>
      <Header />
      <Repos />  {/* new */}
    </ChakraProvider>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)



