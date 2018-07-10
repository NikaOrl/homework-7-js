import "./PokemonsList.css"

import React, { Component } from "react";
import { Row, Button } from "react-bootstrap";
import Pokemon from "../Pokemon";

class PokemonsList extends Component {
    render() {
        let {pokemons, catchPokemon} = this.props;
        return  (
            <div className="content">
                <div className="container">
                    <Row>
                        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} catchPokemon={catchPokemon}/>)}
                    </Row>
                    <Button id="loadMore" className="loadMore" onClick={this.catchButtonCliked}>load more</Button>
                </div>
            </div>
        );
    }
}

export default PokemonsList;