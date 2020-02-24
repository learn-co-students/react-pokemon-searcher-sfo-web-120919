import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map((pokemon, i) => <PokemonCard key={i} pokemonData={pokemon}/>)}
        
      </Card.Group>
    )
  }
}

export default PokemonCollection
