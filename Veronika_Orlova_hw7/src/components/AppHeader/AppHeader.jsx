import React, { Component } from "react";
import "./AppHeader.css"
import {Nav, Navbar, NavItem} from  "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class AppHeader extends Component {
    render() {
       return (
           <div className="myheader">
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Toggle />
                        <img className="pokemon-logo" src="../../../src/img/pokemonlogo.png"/>
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