import React from 'react'
import {Navbar, NavbarBrand,Nav, NavItem, NavLink} from 'reactstrap'
import Logo from '../../assets/burger.png'
import './Header.css'

export default function Navigation() {
    return (
        <div>
            <Navbar className='navbar'>
               
                <NavbarBrand className='ms-md-5'>
                    <img src={Logo} alt='Logo' width='80px' />
                </NavbarBrand>
                <Nav className='me-md-5'>
                    <NavItem>
                        <NavLink href='#' className='NavLink'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#' className='NavLink'>Menu</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#' className='NavLink'>Contact</NavLink>
                    </NavItem>
                </Nav>
                
            </Navbar>
        </div>
    )
}

