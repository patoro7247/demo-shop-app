
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

import {Container} from './components/styles/Container.styled';
import {Main, MainWrapper} from './components/Main.js';
import {Footer} from './components/styles/Footer.styled';
import ProductCard from './components/styles/Card.js'
import {CardWrapper} from './components/styles/CardWrapper.styled.js';
import CardRow from './components/styles/CardRow.js'

import Navbar from "./components/Navbar/Navbar";
import {data} from "./components/Cart/Products.js";




function App() {


  return (
    <ChakraProvider>
      <Container>
        <Navbar />
        <MainWrapper>
          <Main>
          </Main>
        </MainWrapper>
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
