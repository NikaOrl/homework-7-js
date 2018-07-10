import "./AppHeader.css"

import React, { Component } from "react";
import {Nav, Navbar, NavItem} from  "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class AppHeader extends Component {
    render() {
       return (
           <div className="header">
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Toggle />
                        <img className="header-logo" src="../../../src/img/pokemonlogo.png"/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to="/pokemons">
                                <NavItem className={"header-item"}>all pokemons</NavItem>
                            </LinkContainer>
                            <LinkContainer to ="/mypokemons">
                                <NavItem className={"header-item"}>my pokemons</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
       )
    }
}

export default AppHeader;