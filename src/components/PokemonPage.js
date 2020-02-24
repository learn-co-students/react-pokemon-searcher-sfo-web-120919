import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import { brotliDecompressSync } from 'zlib'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    shownPokemon: []
  }

  componentDidMount() {
    //method called wheh component loads...FETCH here
    fetch('http://localhost:3000/pokemon').then(data => data.json()).then(data => this.setState({
      pokemon: data,
      shownPokemon: data

    }))
  }

  onChange = (e) => {
    const filteredArray = this.state.pokemon.filter(p => p.name.startsWith(e.target.value))
    this.setState(previousState => {
      return {
        ...previousState,
        shownPokemon: filteredArray
      }
    })
  }

  postPokemon = (userData) => {
    console.log('this is working')
    const configObj = {
      method: 'POST',
      headers: {
        contentType: "application/json"
      },
      body: JSON.stringify(userData)
    }
    fetch('http://localhost:3000/pokemon', configObj).then(resp => resp.json()).then(data => this.setState(previousState => {
      return {
        ...previousState,
        pokemon: [...previousState.pokemon, data]
      }
    }))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm postPokemon={this.postPokemon}/>
        <br />
        <Search shownPokemon={this.state.shownPokemon} onChange={this.onChange} />
        <br />
        <PokemonCollection pokemon={this.state.shownPokemon}  />
      </Container>
    )
  }
}

export default PokemonPage
