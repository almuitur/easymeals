import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact'
import { BrowserRouter as Router } from 'react-router-dom'

class NavbarLogged extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Router>
                <Navbar color="rgba-red-strong" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>EasyMeals</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                        <NavItem>
                              <NavLink to="#">Meals Plan</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="#">Add Meal</NavLink>
                          </NavItem>
                          <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>Profile</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#">My saved meals plan</DropdownItem>
                                    <DropdownItem href="#">Account settings</DropdownItem>
                                    <DropdownItem href="#">Logout</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}
export default NavbarLogged
