import React from 'react';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import Router from './Router';

/**
 * Root component.
 * Injects store and persistence providers.
 *
 * @export
 * @returns {ReactElement} root app component.
 */
export default function App() : React.ReactElement
{
    return (
        <Provider store={ store }>
            <PersistGate persistor={ persistor }>
                <Root>
                    <Router />
                </Root>
            </PersistGate>
        </Provider>
    );
}
