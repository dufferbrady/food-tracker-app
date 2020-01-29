import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './Components/Home/Home';
import FoodList from './Containers/Home/FoodList/FoodList';
import Layout from './HOC/Layout/Layout';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/foodlist" component={FoodList} />
                        <Route path="/" exact component={Home} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;