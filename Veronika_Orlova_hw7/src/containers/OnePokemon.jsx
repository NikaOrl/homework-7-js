import React, { Component } from "react";
import PokemonPage from "../components/PokemonPage"

class OnePokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: null
        }
    }

    componentDidMount() {
        const {id}= this.props.match.params;
        fetch(`http://localhost:3000/pokemons/${id}?_embed=caughtPokemons`)
            .then((response) => response.json())
            .then((pokemon) => {
                this.setState({
                    pokemon: pokemon
                });
            })
    }

    render() {
        let {pokemon} = this.state;
        return(
            pokemon ? <PokemonPage pokemon = {pokemon}/> : null
        )
    }
}

export default OnePokemon