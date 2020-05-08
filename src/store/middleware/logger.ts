/* eslint-disable no-console */
import { select, takeEvery } from 'redux-saga/effects';
import { IAction } from '../actions/shared';

/**
 * Logger saga middleware.
 *
 * @export logger
 */
export default function* logger()
{
    yield takeEvery('*', function* logger(action: IAction<any, any>)
    {
        // gets current state.
        const state = yield select();

        console.log('Action:', action.key, action.type);
        console.log('Content:', action);
        console.log('State After:', state);
    });
}
