import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './Components/Home/Home';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route path="/foodlist" render={() => ("We've rendered successfully")}/>
            <Route path="/" exact component={ Home } />
          </Switch>
      </div>
    );
  }
}

export default App;