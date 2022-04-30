
import './App.css';

import { Provider,  } from 'react-redux'
import { createStore } from 'redux'

import { ChakraProvider } from '@chakra-ui/react';

import {WholeContainer} from './components/styles/Container.js';
import {data} from './components/Cart/Products.js'

//manage state with Redux?
//Define an inital state value for the app
const initialState = {
  products: [],
};

//Reducer functions take functions you would normally render on each page and locate them for Redux to facilitate app
//Reducer holds functionality to modify the state (eg. increment state)

//create reducer function that determines twhat the new state should be when something happens in the app
/*
export function addToCartReducer(state = initialState, action) {
  switch(action.type) {
    case "button/addToCart": {
      state.products.push(this.info);
      return {...state, products: state.products}
    }


    default:
      return state;
  }
}

export const store = createStore(addToCartReducer())

function render() {
  const state = store.getState();
  //valueEl.innerHTML = state.value.toString()
}

*/


function App() {
  return (
    <ChakraProvider>
      <WholeContainer itemList={data}>
      </WholeContainer>
    </ChakraProvider>
  );
}

/*
render()
store.subscribe(render)
*/

export default App;
