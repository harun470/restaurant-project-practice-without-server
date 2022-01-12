import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import {Collapse, Navbar,NavbarBrand, NavItem,Nav,NavbarToggler} from 'reactstrap'
import Logo from '../../assets/burger.png'
import './Header.css'


 class Navigation extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isNavOpen :false 
        }
    }

    navToggle=()=>{
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }
    

     render(){

        return (
            <div>
                <Navbar dark className='navbar' expand='sm'>
                    <div className='container'>
                       
                        <NavbarBrand href='/'>
                          <img src={Logo} alt='burger' width='80px'/>
                        </NavbarBrand>

                        <NavbarToggler  onClick={this.navToggle} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className='ml-auto' navbar >
                            <NavItem>
                                <Link to='/' className='nav-link active'>Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/Menu' className='nav-link '>Menu</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/Contact' className='nav-link '>Contact</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </div>
                </Navbar>
            </div>
        )
     }
    
}

export default Navigation;


