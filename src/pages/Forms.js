import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import {Tab, Tabs} from 'material-ui/Tabs'

import Login from '../components/Login'
import LoginMUI from '../components/LoginMUI'

export default class extends React.Component {
  render() {
    const handleSubmit = (payload) => {
      payload.event.preventDefault()
      console.log(payload.username + ":" + payload.password)
    }
    const handleChange = (tabSelected) =>{
this.props.history.push(tabSelected)
    }
    return (
      <div>
    <Tabs>
      <Tab onChange={handleChange}
        label="Standard Login" data-route="/">
        <Login submitHandler={handleSubmit}/>
      </Tab>
      <Tab onChange={handleChange}
        label="Material-UI Login" data-route="/mui">
      <LoginMUI submitHandler={handleSubmit}/>
      </Tab>
    </Tabs>
      {/*<hr/>*/}
      {/*<Switch>*/}
      {/*<Route exact path ='/' component={e => (<Login submitHandler={handleSubmit}/>)}/>*/}
      {/*<Route path='/mui' component={e => (<LoginMUI submitHandler={handleSubmit}/>)}/>*/}
      {/*</Switch>*/}
    </div>
  );
      }
}