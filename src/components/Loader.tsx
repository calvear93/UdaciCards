import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Text } from 'native-base';

/**
 * Loader component for React Suspense and lazy.
 * Renders the loading component.
 *
 * @param {string} message message for show in loading.
 * @returns {JSX} loader.
 */
export default function Loader({ message })
{
    return (
        <View style={ styles.container }>
            <ActivityIndicator size='large' color='green' />
            {message && <Text>{message}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
