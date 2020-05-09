import { all, call, put, takeLatest } from 'redux-saga/effects';
import { InitAction } from '../actions';

function* init()
{
    try
    {
        yield put(InitAction.Action(InitAction.Type.SUCCESS));
        console.log('BIEN');
    }
    catch (e)
    {
        // // failed action.
        // yield put(MasterDataAction.Action(
        //     MasterDataAction.Types.FETCH_ERROR,
        //     {
        //         error: e,
        //         message: 'La solicitud no se pudo completar'
        //     }
        // ));
    }
}

/**
 * Exports saga listeners.
 *
 * @export
 */
export default function* run()
{
    yield all([
        takeLatest(InitAction.Type.RUN, init)
    ]);
}
