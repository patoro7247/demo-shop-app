import React, { Component, useState } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css'

import { useSelector, useDispatch } from 'react-redux';

import { Box, Heading, Center, Image, HStack, Button } from '@chakra-ui/react'
import { clearCart, decrementQty, incrementQty, updateCartTotal } from './../../cartSlice.js';


const example = {
    //Picture, Name, Qty
    pic: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.50, 
    qty: 1 
}

class Navbar extends Component {
    
    render() {
        return(
            <nav className="NavbarWrapper">

                    <Center >
                        <Heading color="white" textDecoration="none" padding="0.5rem 1rem">Pamazon</Heading>
                    </Center>
                    <Cart>
                        <DropMenu></DropMenu>
                    </Cart>
        
            </nav> 
        )
    }
}

function Cart(props) {

    //sets initial state
    const [open, setOpen] = useState(false);

    //user change state when they click on item button


    return (

    <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => {setOpen(!open); }} >

        <i class="fa-solid fa-cart-flatbed"></i>

        {open && props.children}

        </a>
    </li>
    )
}

function DropMenu() {
    const dispatch = useDispatch()
    //dispatch updateCartTotal on every click 
    let cartList = useSelector((state) => state.cart.cartList)
    let cartTotal = useSelector((state) => state.cart.cartTotal)
    

    // image, name, price, button(-), curr qty, button(+)
    function DropdownItem(props) {
        
        return (
            <div className="menu-item" onClick={() => dispatch(updateCartTotal())}>
                        <div className='image-container'>
                            <Image borderRadius='full' boxSize='50px'  src={props.item.img}/>
                        </div>
                        <h2 className='menu-item-name'>{props.item.name}</h2>
                        <p className='menu-item-price'>${props.item.price}</p>
                        <div className='menu-item-decrement'>
                            <Button onClick={() => dispatch(decrementQty(props.item.id))}>-</Button>
                        </div>
                        <p className='menu-item-qty'>{props.item.qty}</p>
                        <div className='menu-item-increment'>
                            <Button onClick={() => dispatch(incrementQty(props.item.id))}>+</Button>
                        </div>
                </div>
        );
    }
    
        const handleDropContainer = (e) => {
            e.stopPropagation()
        }
        
        const handleClearButton = () => {
            dispatch(clearCart())
            dispatch(updateCartTotal())
        }

        return (
            
            <div className="drop" onClick={(e) => handleDropContainer(e)}>
                
                    {cartList.map(function(item, i) {
                        return <DropdownItem item={item} key={i} />
                    })}
                    <div className="clear-button-container">
                        <Button onClick={handleClearButton} >Clear</Button>
                    </div>
                    <div className="total-amount-container">
                        {/* Need a calculate total cart slice function
                         */}
                        <p className='total-amount'>Total: ${cartTotal} </p>
                    </div>
            </div>


        );
                }



export default Navbar