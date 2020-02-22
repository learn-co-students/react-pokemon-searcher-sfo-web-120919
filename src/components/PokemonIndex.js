import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {


  state = {
    pokemon: [],
    shownPokemon: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon").then(resp => resp.json())
     .then(data => this.setState({
       pokemon: data,
       shownPokemon: data
     }, () => console.log(this.state)))
  }

  changeShownPokemon = (e) => {
    console.log("changeShownPokemon called")
      const searchTerm = e.target.value
      this.setState( (prevState) => {
        return {...prevState,
        shownPokemon: prevState.pokemon.filter(p => p.name.startsWith(searchTerm))}
      }, () => console.log(this.state))
  }

  addPokemonToDb = (pokemon) => {

    const constructedPokemon = {
      name: pokemon.name,
      stats: [{name: "hp", value: pokemon.hp}],
      sprites: {
        front: pokemon.frontUrl,
        back: pokemon.backUrl
      }
    }

    const configuration = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(constructedPokemon)
    }
    fetch("http://localhost:3000/pokemon", configuration).then(resp => resp.json()).then(p => {
      this.setState((prevState) => {
        return {
          ...prevState,
          pokemon: [...prevState.pokemon, p]
        }
      })
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemonToDb={this.addPokemonToDb} />
        <br />
        <Search changeShownPokemon={this.changeShownPokemon} />
        <br />
        <PokemonCollection pokemon={this.state.shownPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
