import { race, take, delay } from 'redux-saga/effects';

/**
 * Waits for any action type to occur n times.
 *
 * @param {Array<any>} types action types.
 * @param {number} times times for wait each action type.
 * @param {number} timeout timeout in milliseconds (0 no timeout).
 *
 * @returns {Array<any>} actions results.
 */
function* waitForEvery(types: Array<any>, times: number, timeout: number = 0): IterableIterator<any>
{
    // stores every result of action intercepted.
    let results: Array<any> = [];
    // waits for every dispatch (whether action belongs to types array).
    while (times-- > 0)
    {
        results.push(
            yield race(types.reduce((awaiter, actionType) =>
            {
                awaiter[actionType] = take(actionType);

                return awaiter;
            },
            timeout === 0 ? {} : { timeout: delay(timeout) }))
        );
    }

    return results;
}

export {
    waitForEvery
};
