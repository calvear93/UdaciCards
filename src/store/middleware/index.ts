import { all } from 'redux-saga/effects';
import logger from './logger';
import init from './init';

/**
 * Combine every sagas in parallel tasks.
 *
 * @export combineMiddleware
 */
export default function* combineMiddleware()
{
    yield all([
        logger(),
        init()
    ]);
}
