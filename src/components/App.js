import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Layout from "./Layout";
import Main from './Main/Main';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/' component={Main}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
