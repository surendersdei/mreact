import React from 'react';
import '../App.css';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function Header() {
    return (
        <header>            
            <Navbar color="light" light expand="md">
                <div className="container">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="../">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>            
        </header>
    );
}

export default Header;