import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
        cartTotal: 0,
    },
    reducers: {
        addToCart: (state, action) => {

            let inArray = false;
            state.cartList.map(function(item) {
                if(action.payload.id === item.id) {
                    item.qty++
                    inArray = true;
                    return
                }
            })

            if(!inArray) {
                state.cartList.push(action.payload)
            }
           
        },
        decrementQty: (state, action) => {
            const id = action.payload;
            state.cartList.map(function(item) {
                if(id === item.id) {
                    item.qty--;
                }
            })
            
        },
        incrementQty: (state, action) => {
            const id = action.payload;
            state.cartList.map(function(item) {
                if(id === item.id) {
                    item.qty++;
                }
            })
            
        },
        clearCart: (state) => {
            state.cartList = []
        },
        updateCartTotal: (state) => {
            state.cartTotal = 0;
            state.cartList.map(function(item) {
                let singleItemTotal = item.qty * item.price
                state.cartTotal += singleItemTotal
            })
        }
    }

})

export const { addToCart, clearCart, decrementQty, incrementQty, updateCartTotal } = cartSlice.actions
export default cartSlice.reducer