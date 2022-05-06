import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {WholeContainer} from './components/styles/Container.js';
import {data} from './components/Cart/Products.js'
import React, {useState, useEffect, } from 'react';
import { applyMiddleware } from 'redux';




function App() {
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((items) => setItems(items))
  }, []);

  if (items.length === 0) {
    return (
      <>Still loading...</>
    );
  }

  return (
    <ChakraProvider>
      <WholeContainer itemList={items} />
    </ChakraProvider>
  );
}


export default App;
