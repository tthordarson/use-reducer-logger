import React from 'react';
import { Provider } from 'react-redux';
import LogRocketDemo from './component';
import store from './store';

const Main = () => <Provider store={store}>
    <LogRocketDemo />
</Provider>

export default Main;