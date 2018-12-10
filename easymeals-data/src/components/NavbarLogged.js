import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact'
import { BrowserRouter as Router } from 'react-router-dom'

class NavbarLogged extends React.Component {

    state = { collapse: false, isWideEnough: false }

    onClick = () => this.setState({ collapse: !this.state.collapse })

    render() {
        return (
            <Router>
                <Navbar color="rgba-red-strong" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <a className="nav-link waves-effect waves-light" onClick={this.props.onHomeClick}><strong>EasyMeals</strong></a>
                    </NavbarBrand>
                    {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                    <Collapse isOpen={this.state.collapse} navbar>
                        <NavbarNav right>
                            <NavItem>
                                <a className="nav-link waves-effect waves-light" onClick={this.props.onMealsPlanClick}>MEALPLAN</a>
                            </NavItem>
                            {/* <NavItem>
                                <a className="nav-link waves-effect waves-light" onClick={this.props.onAddNewMealClick}>ADD MEAL</a>
                            </NavItem> */}
                            <NavItem>
                                <Dropdown>
                                    <DropdownToggle nav caret>PROFILE</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href="#" onClick={this.props.onMyMealsClick}>My Meals</DropdownItem>
                                        {/* <DropdownItem href="#" onClick={this.props.onSettingsClick}>Settings</DropdownItem> */}
                                        <DropdownItem href="#" onClick={this.props.onLogoutClick}>Logout</DropdownItem>
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
