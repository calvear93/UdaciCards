import { all } from 'redux-saga/effects';
import logger from './logger';

/**
 * Combine every sagas in parallel tasks.
 *
 * @export combineMiddleware
 */
export default function* combineMiddleware()
{
    yield all([
        logger()
    ]);
}
