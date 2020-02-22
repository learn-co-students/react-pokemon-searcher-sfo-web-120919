import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
 
  state = {
    showFront: true
  }

  handleSpriteClick = () => {
    this.setState((state) => {
         return {showFront: !state.showFront}
    })
  }

  render() {
  
    const pokemanSprite = (this.state.showFront) ? this.props.pokeman.sprites.front : this.props.pokeman.sprites.back

    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleSpriteClick}>
            <img src={pokemanSprite || null} alt="oh no!" />
          </div>
          <div className="content">
    <div className="header">{this.props.pokeman.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokeman.stats[this.props.pokeman.stats.length - 1].name}
            </span>
          </div>
        </div>
      </Card>
    )
  
}

}

export default PokemonCard
