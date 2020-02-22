import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

function PokemonCollection(props) {

       

 

    return <Card.Group itemsPerRow={6}>
      {props.pokemon.map(p => <PokemonCard key={Math.random()} pokeman={p} /> )}
      </Card.Group>
    
  
}

export default PokemonCollection
