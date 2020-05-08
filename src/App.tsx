import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Test from './components/Test';

export default function App()
{
    return (
        <Provider store={ store }>
            <Test />
        </Provider>
    );
}
