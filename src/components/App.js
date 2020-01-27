import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Layout from "./Layout";
import Main from './Main/Main';
import Summary from './Summary/Summary';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Contacts from './Contacts/Contacts';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/summary' component={Summary}/>
            <Route path='/skills'component={Skills}/>
            <Route path='/experience'component={Experience}/>
            <Route path='/education'component={Education}/>
            <Route path='/contacts'component={Contacts}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
