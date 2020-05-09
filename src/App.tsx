import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import Main from './views/Main';
import { PersistGate } from 'redux-persist/integration/react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Loader from './components/Loader';

export default function App()
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
            <Loader message={ 'Loading' } />
        );
    }

    return (
        <Provider store={ store }>
            <PersistGate persistor={ persistor }>
                <Main />
            </PersistGate>
        </Provider>
    );
}
