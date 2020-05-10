import { Button, Container, Form, Input, Item, Label, Text, Toast } from 'native-base';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { DeckAction } from '../store/actions';
import { StyleSheet } from 'react-native';

export default function AddDeckView({ navigation }) : React.ReactElement
{
    const [ title, setTitle ] = useState('');
    const [ waiting, setWaiting ] = useState(false);
    const dispatch = useDispatch();

    const { loading, error, lastDeckId } = useSelector(
        store => store[DeckAction.Key],
        shallowEqual
    );

    useEffect(() =>
    {
        switch (showToastOnSuccess(waiting, loading, error))
        {
            case 1: // success
                setWaiting(false);
                navigation.navigate('DeckDetail', { id: lastDeckId });
                break;

            case -1: // error
                setWaiting(false);
                break;

            default:
                break;
        }
    }, [ loading, error ]);

    function onSubmit()
    {
        if (!title)
        {
            alert('Title cannot be empty');

            return;
        }

        setWaiting(true);
        dispatch(DeckAction.Action(
            DeckAction.Type.ADD_DECK,
            { title }
        ));
    }

    return (
        <Container style={ styles.container }>
            <Form>
                <Text style={ styles.title }>Whats is the Title of your Deck?</Text>
                <Item inlineLabel>
                    <Label>Enter the Deck title</Label>
                    <Input onChangeText={ setTitle } />
                </Item>
                <Button disabled={ loading } full onPress={ onSubmit }>
                    <Text>ADD DECK</Text>
                </Button>
            </Form>
        </Container>
    );
}

function showToastOnSuccess(waiting: boolean, loading: boolean, error: any)
{
    if (!waiting)
        return;

    if (error)
    {
        Toast.show({
            text: error.message,
            duration: 3000
        });

        return -1;
    }
    else if (!loading)
    {
        Toast.show({
            text: 'Deck added succesfully',
            duration: 2000,
            type: 'success'
        });

        return 1;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        color: 'gray',
        marginTop: 32,
        marginBottom: 24,
        textAlign: 'center'
    }
});
