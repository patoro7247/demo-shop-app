import React, { Component, useState } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css'

import { Heading, Box, Center } from '@chakra-ui/react'




class Navbar extends Component {
    // People name things in react with capitalized letter
    
    //states whenever you click on something if its true or false
    state = { clicked : false }
    
    // Whenever you click, alters clicked status to opposite value
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    // If this is clicked, we add the class nav-menu active, or if you did not click on it, the class will be regular nav menu
    // <h1 className="navbar-logo"><i className="fa-solid fa-mountain"></i></h1>

    render() {
        return(
            <nav className="NavbarWrapper">

                    <Center >
                        <Heading color="white" textDecoration="none" padding="0.5rem 1rem">Pamazon</Heading>
                    </Center>
                    <Cart />
                {/*

                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        <li>
                            <Heading color="white" textDecoration="none" padding="0.5rem 1rem">Pamazon</Heading>
                        </li>
                        <div className="cartIcon">
                            <i class="fa-solid fa-cart-flatbed"></i>
                        </div>
                    </ul>
                */}
            </nav> 
        )
    }
}

function Cart(props) {

    const [open, setOpen] = useState();

    return (
        <a href="#" className="icon-button">
        <i class="fa-solid fa-cart-flatbed"></i>
        </a>
    )
}


export default Navbar