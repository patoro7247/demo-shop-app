import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
    },
    reducers: {
        addToCart: (state, action) => {
            // think we should have a verify action for cart
            //Need to change how our shopping cart works; when we add an item to cart, check to see if its id exists already
            // in the cart, if so, update the quantity for that ID in the cart
            // cartSlice will handle this logic

            // reference our info with action.payload; if action.payload.id exists in cartList
            /*
            const itemAlreadyInCartFlag = false;

            {state.cartList.map(function(item) {
                if (action.payload.id === item.id) {
                    itemAlreadyInCartFlag = true;
                }
            })}
            
            if (itemAlreadyInCartFlag) {
                state.cartList.push(action.payload)
            } */
            state.cartList.push(action.payload)
        },
        checkItem: (state, action) => {
            let alreadyInCart = false;
            let alreadyInCartID = 0;


            {state.cartList.map(function(item) {
                if (action.payload.id === item.id) {
                    alreadyInCart = true;
                    alreadyInCartID = item.id
                }
            })}

            // if in cart, increment the count in state, incrementCount(state, id)
            //if(alreadyInCart) {
                //incrementCount(state, alreadyInCartID)e5wrgtehr
            //}


        },
        clearCart: (state) => {
            state.cartList = []
        },
    }

})

export const { addToCart, clearCart } = cartSlice.actions
export default cartSlice.reducer