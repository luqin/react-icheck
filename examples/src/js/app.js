import React from 'react';
import ReactDOM from 'react-dom';

import { hashHistory, IndexRoute, Router, Route } from 'react-router';

import App from './components/App';
import GettingStarted from 'react-router!./components/GettingStarted';
import PageNotFound from './components/PageNotFound';
import Basic from 'react-router!./components/examples/Basic';

const routes = (
  <Router history={ hashHistory }>
    <Route path="/" component={App}>
      <IndexRoute component={Basic}/>
      <Route path="getting-started" component={GettingStarted}/>
      <Route path="examples" component={Basic}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
