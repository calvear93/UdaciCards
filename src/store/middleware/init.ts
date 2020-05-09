import { all, call, put, takeLatest } from 'redux-saga/effects';
import { InitAction } from '../actions';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

/**
 * Initializes some base App data.
 */
function* init()
{
    try
    {
        // load NativeBase fonts and icons.
        yield Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font
        });

        yield put(InitAction.Action(InitAction.Type.SUCCESS));
    }
    catch (e)
    {
        yield put(InitAction.Action(
            InitAction.Type.FAILED,
            {
                error: e,
                message: 'The operation cannot be completed'
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
