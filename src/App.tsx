import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import Main from './views/Main';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from './components/Loader';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

/**
 * Root component.
 *
 * @export
 * @returns {ReactElement} root app component.
 */
export default function App() : React.ReactElement
{
    const [ isReady, setIsReady ] = useState(false);

    useEffect(() =>
    {
        (async () =>
        {
            await Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font
            });

            setIsReady(true);
        })();
    }, []);

    if (!isReady)
    {
        return (
            <Loader message={ 'Loading Resources' } />
        );
    }

    return (
        <Provider store={ store }>
            <PersistGate
                persistor={ persistor }
                loading={ <Loader message={ 'Loading Data' } /> }
            >
                <Main />
            </PersistGate>
        </Provider>
    );
}
