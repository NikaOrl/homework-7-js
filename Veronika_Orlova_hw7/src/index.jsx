import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import AppHeader from "./components/AppHeader";
import AllPokemons from "./containers/AllPokemons.jsx";
import CaughtPokemons from "./containers/CaughtPokemons.jsx";
import OnePokemon from "./containers/OnePokemon.jsx";

const links = [
    {
        path:"/",
        component: AllPokemons,
        exact: true
    },
    {
        path:"/pokemons",
        component: AllPokemons,
        exact: true
    },
    {
        path:"/mypokemons",
        component: CaughtPokemons,
        exact: true
    },
    {
        path:"/pokemons/:id",
        component: OnePokemon,
        exact: true
    },
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppHeader/>
                <Switch>
                    {links.map((item, key) => <Route key={key} {...item} />)}
                </Switch>
            </div>
        );
    }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));