import "./PokemonPage.css"
import React, { Component } from "react";

class PokemonPage extends Component {
    makeInrormation = () => {
        const {pokemon}= this.props;
        const {id, name, caught} = pokemon;
        let pokemonStatus = <h4>still not caught</h4>,
            pokemonTime = null,
            pokemonId = id;
        if(caught) {
            pokemonStatus = <h4>status: caught</h4>;
            pokemonTime = <h4>time: {new Date(pokemon.caughtPokemons[0].time).toLocaleString()}</h4>
        }
        return { pokemonStatus, pokemonTime, pokemonId }
    }

    render() {
        const { pokemonStatus, pokemonTime, pokemonId } = this.makeInrormation();

        return (
            <div>
                <div className="one-pokemon"/>
                <h2 className={"pokemon-name"}>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                <img className={"pokemon-profile-img"} src={`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${pokemonId}.png`}/>
                <h4>id: {pokemonId}</h4>
                {pokemonStatus}
                {pokemonTime}
            </div>
        )
    }
}

export default PokemonPage;