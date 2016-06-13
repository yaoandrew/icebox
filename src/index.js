import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/app';
import reducers from './reducers';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers,window.devToolsExtension ? window.devToolsExtension() : f => f);

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
		<Provider store={store}>
		  <App />
		</Provider>
  </MuiThemeProvider>
  , document.getElementById('app'));