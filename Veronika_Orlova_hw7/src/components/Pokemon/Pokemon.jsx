import "./Pokemon.css";

import React, { Component } from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


class Pokemon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isclicked: false
        }
    }
    catchButtonCliked = () => {
        let {pokemon, catchPokemon} = this.props;
        catchPokemon(pokemon);
        this.setState({
            isclicked: true
        })
    }

    isDisabled() {
        let {pokemon} = this.props;
        let {isclicked} = this.state;
        return pokemon.caught || isclicked;
    }

    render() {
        let {pokemon, catchPokemon} = this.props;
        let {name, id} = pokemon;
        return (
            <div className="pokemon-list">
                <Col xs={12} sm={6} md={4} lg={3} >
                    <div className="pokemon">
                        <Link to={`/pokemons/${id}`}>
                            <figcaption className={"pokemon-name"}>{name.toUpperCase()}</figcaption>
                            <img className={"pokemon-img"} src={`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${pokemon.id}.png`}/>
                        </Link>
                        <Button className={"pokemon-caught"} onClick={this.catchButtonCliked} disabled={ this.isDisabled()}>
                            {"Catch"}
                        </Button>
                    </div>
                </Col>
            </div>
        );
    }
}

export default Pokemon;