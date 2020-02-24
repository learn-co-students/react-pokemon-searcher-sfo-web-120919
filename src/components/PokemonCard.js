import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
   state = {
      frontImage: true
    }

  handleClick = () => {
     this.setState(previousState => {
      return {
        frontImage: !previousState.frontImage
      }
  })
} 
  
  render() {
    const p = this.props.pokemonData;
   


    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.handleClick} src={this.state.frontImage ? p.sprites.front : p.sprites.back} alt="oh no!"/>
          </div>
          <div className="content">
            <div className="header">{p.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {p.stats[p.stats.length - 1].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
