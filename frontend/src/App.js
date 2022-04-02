
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

import {Container} from './components/styles/Container.styled';
import {Main} from './components/styles/Main.styled';
import {Footer} from './components/styles/Footer.styled';
import ProductAddToCart from './components/styles/Card.js'
import {CardWrapper} from './components/styles/CardWrapper.styled.js';
import CardRow from './components/styles/CardRow.js'

import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <ChakraProvider>
      <Container>
        <Navbar />
        <Main>
          <CardWrapper>
            <CardRow />
          </CardWrapper>
        </Main>
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
