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

  changeVal = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState((prevState) => {
      return {...prevState,
      [name]: value
      }
    })
  }

  handleSubmit = () => {
    const newPokemon = this.state
    this.props.addPokemonToDb(newPokemon)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" onChange={this.changeVal} value={this.state.name} placeholder="Name" name="name" />
            <Form.Input fluid label="hp" onChange={this.changeVal} placeholder="hp" name="hp" value={this.state.hp} />
            <Form.Input fluid label="Front Image URL" onChange={this.changeVal} placeholder="url" name="frontUrl" value={this.state.frontUrl} />
            <Form.Input fluid label="Back Image URL" onChange={this.changeVal} placeholder="url" name="backUrl" value={this.state.backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
