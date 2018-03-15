import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Forms from './pages/Forms'


const App = () => (
  <MuiThemeProvider>
    <Router>
      <Forms/>
    </Router>
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'));