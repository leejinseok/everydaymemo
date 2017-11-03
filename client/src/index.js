import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from 'redux/configureStore';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
