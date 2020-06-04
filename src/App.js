import React from 'react';
import Routes from './Routes/index';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
)
export default App;
