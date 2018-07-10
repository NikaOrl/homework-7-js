import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap"
import "./PokemonPage.css"

export default class PokemonPage extends Component {
    render() {
        const {pokemon}= this.props;
        const {id, name, caught} = pokemon;
        let statusTag = <h4>still not caught</h4>,
            timeTag = null;
        if(caught) {
            statusTag = <h4>Caught</h4>;
            timeTag = <h4>Time: {new Date(pokemon.caughtPokemons[0].time).toLocaleString()}</h4>
        }
        return (
            <div>
                <div className="one-pokemon"></div>
                <h2 className={"pokemon-name"}>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                <img className={"pokemon-profile-img"} src={`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${id}.png`}/>
                <h4>ID: {id}</h4>
                {statusTag}
                {timeTag}
            </div>

        )
    }
}