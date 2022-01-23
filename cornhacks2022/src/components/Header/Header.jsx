import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import '../../App.css';

function Header() {
    return (
        <div className="header">
            <div>
                <Navbar color="light" expand="false" fixed="top">
                    <NavbarBrand className="me-auto" href="/" >//$Code-a-Pet</NavbarBrand>
                    <NavbarToggler className="me-2" onClick={function noRefCheck(){}}/>
                </Navbar>
            </div>
        </div>
    );
}

export default Header;