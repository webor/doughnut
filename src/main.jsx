import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppContainer from 'containers/AppContainer';
import configureStore from 'store/configureStore';
import nodeConfig from 'configs/nodeConfig';

require('../src/less/main.less');
if (nodeConfig.environment === 'development') {
    require('webpack-hot-middleware/client');
}


/* global document */

const { store } = configureStore(),
    requireAll = (r) => {
        r.keys().forEach(r);
    };
    requireAll(require.context('./resources/svg', true, /\.svg$/));


ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <AppContainer />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>, document.getElementById('app')
    );

