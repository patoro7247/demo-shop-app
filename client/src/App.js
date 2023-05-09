import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {WholeContainer} from './components/styles/Container.js';
import React, {useState, useEffect, } from 'react';
import data from './components/Cart/Products.js';


function App() {
  const [items, setItems] = useState(data.data);

  const PORT = process.env.PORT;

  /*
  useEffect(() => {
    fetch(`https://mock-storefront.herokuapp.com/products`)
      .then((res) => res.json())
      .then((items) => setItems(items))
  }, []);
  */
 /*
  useEffect(() => {
    fetch(`localhost:3001/products`)
      .then((res) => res.json())
      .then((items) => setItems(items))
  }, []);
  */
  //console.log(data.data);

  if (items.length === 0) {
    

    return (
      <>Still loading...</>
    );
  }

  return (
    <ChakraProvider>
      <WholeContainer itemList={data.data} />
    </ChakraProvider>
  );
}


export default App;
