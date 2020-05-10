import { all } from 'redux-saga/effects';
import logger from './logger';
import init from './init';
import deck from './deck';

/**
 * Combine every sagas in parallel tasks.
 *
 * @export combineMiddleware
 */
export default function* combineMiddleware()
{
    yield all([
        logger(),
        init(),
        deck()
    ]);
}
