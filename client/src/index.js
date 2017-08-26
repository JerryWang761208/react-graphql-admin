import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';

//apollo
import ApolloClient,{createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';


// Containers
import Full from './containers/Full/'

const history = createBrowserHistory();


//
const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
  opts: {
    credentials: 'same-origin'
  }
});

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  networkInterface
});

ReactDOM.render((
  <ApolloProvider client={client}>
    <HashRouter history={history}>
      <Switch>
        <Route path="/" name="Home" component={Full}/>
      </Switch>
    </HashRouter>
  </ApolloProvider>
), document.getElementById('root'))
