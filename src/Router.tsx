import React, { useEffect } from 'react';
import { Toast } from 'native-base';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader';
import { InitAction } from './store/actions';
import ErrorView from './views/Error';
import MainView from './views/Main';
import AddDeckView from './views/AddDeck';
import DeckDetailView from './views/DeckDetail';
import AddCardView from './views/AddCard';
import QuizView from './views/Quiz';
import { createStackNavigator } from '@react-navigation/stack';
import ValidateNotificationPermission from './services/Permission';

/**
 * Router component.
 * Initializes routing and settings.
 *
 * @export
 * @returns {ReactElement} root app component.
 */
export default function Router() : React.ReactElement
{
    const dispatch = useDispatch();

    const { ready, loading, error } = useSelector(
        store => store[InitAction.Key],
        shallowEqual
    );

    useEffect(() =>
    {
        showToastOnReady(ready, error);
    }, [ loading ]);

    useEffect(() =>
    {
        if (!ready)
            dispatch(InitAction.Action(InitAction.Type.RUN));

        ValidateNotificationPermission();
    }, [ ready ]);

    if (loading)
    {
        return (
            <Loader message={ 'Loading Resources' } />
        );
    }

    // creates stack handler.
    const Stack = createStackNavigator();

    return ready ? (
        <Stack.Navigator>
            <Stack.Screen
                name='Main'
                component={ MainView }
                options={ { title: 'Decks' } }
            />
            <Stack.Screen
                name='DeckDetail'
                component={ DeckDetailView }
                options={ { title: 'Deck Detail' } }
            />
            <Stack.Screen
                name='AddDeck'
                component={ AddDeckView }
                options={ { title: 'Add Deck' } }
            />
            <Stack.Screen
                name='AddCard'
                component={ AddCardView }
                options={ { title: 'Add Card' } }
            />
            <Stack.Screen
                name='Quiz'
                component={ QuizView }
                options={ { title: 'Quiz' } }
            />
        </Stack.Navigator>
    ) : (
        <ErrorView />
    );
}

/**
 * Shows a Toast message on success or failed operation.
 *
 * @param {boolean} ready whether app is ready.
 * @param {any} error on error.
 */
function showToastOnReady(ready: boolean, error: any)
{
    if (error)
    {
        Toast.show({
            text: error.message,
            buttonText: 'Okay',
            duration: 3000
        });
    }
    else if (ready)
    {
        Toast.show({
            text: 'App initialized succesfully',
            buttonText: 'Okay',
            duration: 2000,
            type: 'success'
        });
    }
}
