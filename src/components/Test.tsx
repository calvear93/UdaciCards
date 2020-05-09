import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { DeckAction } from '../store/actions';
import uuid from 'short-uuid';

export default function Test()
{
    const dispatch = useDispatch();
    const store = useSelector(
        store => store[DeckAction.Key],
        shallowEqual
    );

    useEffect(() =>
    {
        // dispatch(DeckAction.Action(DeckAction.Type.ADD_DECK, { id: uuid.uuid(), title: 'asdasd', description: 'asdasda' }));
    }, [ ]);

    return (
        <View style={ styles.container }>
            <Text>sdfsdf asdasd as asd asd!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
