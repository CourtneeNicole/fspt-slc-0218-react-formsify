import React from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import "../styles/Login.css"

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  render () {
    const handleSubmit = (event) => {
      const payload = {
        event: event,
        username: this.state.username,
        password: this.state.password
      }
      this.props.submitHandler(payload)
    }
    return (
      <Paper>
        <form className="login">
          <TextField required
                     placeholder={"Username"}
                     id="muiUsername"
                     onChange={event => this.setState({ username: event.target.value })}/>
          <br/>
          <TextField required
                     type="password"
                     id="muiPassword"
                     placeholder={"Password"}
                     onChange={event => this.setState({ password: event.target.value })}/>
          <br/>
          <RaisedButton
                    label={"Submit"}/>
        </form>
      </Paper>
    )
  }
}




