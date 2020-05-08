import { race, take, delay } from 'redux-saga/effects';

/**
 * Waits for any action type to occur n times.
 *
 * @param {array} types action types.
 * @param {number} times times for wait each action type.
 * @param {number} timeout timeout in milliseconds (0 no timeout).
 *
 * @returns {array} actions results.
 */
function* waitForEvery(types, times, timeout = 0)
{
    // stores every result of action intercepted.
    let results = [];

    while (times-- > 0)
    {
        results.push(yield race(types.reduce((awaiter, actionType) =>
        {
            awaiter[actionType.toString()] = take(actionType);

            return awaiter;
        }, timeout === 0 ? {} : { timeout: delay(timeout) })));
    }

    return results;
}

export {
    waitForEvery
};
