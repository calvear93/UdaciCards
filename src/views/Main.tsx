import React from 'react';
import { Button, View, Text } from 'react-native';

export default function MainView({ navigation }) : React.ReactElement
{
    return (
        <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
            <Text>Home Screen</Text>
            <Button
                title='Go to Details'
                onPress={ () => navigation.navigate('Cards') }
            />
        </View>
    );
}
