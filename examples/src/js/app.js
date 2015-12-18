import React from 'react';
import ReactDOM from 'react-dom';

import { IndexRoute, Router, Route } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

const history = createHistory({ queryKey: false });

import App from './components/App';
import GettingStarted from './components/GettingStarted';
import PageNotFound from './components/PageNotFound';
import Basic from './components/examples/Basic';

const routes = (
  <Router history={ history }>
    <Route path="/" component={App}>
      <IndexRoute component={Basic}/>
      <Route path="getting-started" component={GettingStarted}/>
      <Route path="examples" component={Basic}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
