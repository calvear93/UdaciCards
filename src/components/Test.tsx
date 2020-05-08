import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import { TestAction } from '../store/actions';
import sample from '../store/actions/sample';

export default function Test()
{
    const asdads = useSelector(
        store => store[TestAction.Key],
        shallowEqual
    );

    console.log(asdads);
    console.log(sample);

    return (
        <View style={ styles.container }>
            <Text>sdfsdf!</Text>
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
