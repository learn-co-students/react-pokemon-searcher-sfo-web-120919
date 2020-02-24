import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = () => {
   const newPokemon = {
     name: this.state.name,
     stats: [{name: 'hp',
              value: this.state.hp}],
     sprites: {
       front: this.state.frontUrl,
       back: this.state.backUrl
     }         
   }
   this.props.postPokemon(newPokemon)
  }

  onChange = (e) => {
    e.persist()
    this.setState(previousState => {
      return {
        ...previousState,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid onChange={this.onChange} label="Name" placeholder="Name" value={this.state.name} name="name" />
            <Form.Input fluid onChange={this.onChange} label="hp" placeholder="hp" value={this.state.hp} name="hp" />
            <Form.Input fluid onChange={this.onChange} label="Front Image URL" placeholder="url" value={this.state.frontUrl} name="frontUrl" />
            <Form.Input fluid onChange={this.onChange} label="Back Image URL" placeholder="url" value={this.state.backUrl} name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
