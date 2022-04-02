import './components.css';

import styled from 'styled-components';

import ProductCard from './styles/Card.js'

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';

const Wrapper = styled.section`
    padding: 4em;
    background: grey;
`



const Main = () => {
    return (
        <main>
            <div id="maindiv">
                    <ProductCard />

            </div>
        </main>
    )
}

