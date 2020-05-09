import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader';
import { InitAction } from './store/actions';
import ErrorView from './views/Error';
import MainView from './views/Main';

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

    const { ready, loading } = useSelector(
        store => store[InitAction.Key],
        shallowEqual
    );

    useEffect(() =>
    {
        dispatch(InitAction.Action(InitAction.Type.RUN));
    }, []);

    if (loading)
    {
        return (
            <Loader message={ 'Loading Resources' } />
        );
    }

    return ready ? (
        <MainView />
    ) : (
        <ErrorView />
    );
}
