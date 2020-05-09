import { all, call, put, takeLatest } from 'redux-saga/effects';
import { InitAction } from '../actions';

function* init()
{
    try
    {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>< BIEN');
        yield put(InitAction.Action(InitAction.Type.SUCCESS));
    }
    catch (e)
    {
        yield put(InitAction.Action(
            InitAction.Type.FAILED,
            {
                error: e,
                message: 'La solicitud no se pudo completar'
            }
        ));
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
