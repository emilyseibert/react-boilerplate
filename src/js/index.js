require('../scss/style.scss');
require('./config/a11y.js');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appStore from './reducers'

const store = createStore(appStore);

const Root = <Provider store={store}>
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
        {routes}
    </Router>
</Provider>;

ReactDOM.render(Root, document.getElementById('root'));
