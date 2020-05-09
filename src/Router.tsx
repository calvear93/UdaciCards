import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import MainView from './views/Main';

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
        <MainView />
    );
}
