import React, { Component } from 'react'
import { Input } from "mdbreact"

class InputForm extends Component {
    state = { text: '' }

    handleInput = event => {
        const text = event.target.value

        this.setState({ text })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.onSubmit(this.state.text)

        this.setState({ text: '' })
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="input-bar"><Input value={this.state.text} placeholder="Write text here..." onChange={this.handleInput} />
            <button id="button-add" type="submit"><i className="fas fa-plus"></i></button>
            </div>
        </form>
    }
}

export default InputForm