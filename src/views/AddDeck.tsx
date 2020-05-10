import { Button, Container, Form, Input, Item, Label, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { DeckAction } from '../store/actions';
import { Toast } from 'native-base';

export default function AddDeckView({ navigation }) : React.ReactElement
{
    const [ title, setTitle ] = useState('');
    const [ waiting, setWaiting ] = useState(false);
    const dispatch = useDispatch();

    const { loading, error } = useSelector(
        store => store[DeckAction.Key],
        shallowEqual
    );

    useEffect(() =>
    {
        switch (showToastOnSuccess(waiting, loading, error))
        {
            case 1: // success
                setWaiting(false);
                navigation.goBack();
                break;

            case -1: // error
                setWaiting(false);
                break;

            default:
                break;
        }
    }, [ loading, error ]);

    function onChange(text: string)
    {
        setTitle(text);
    }

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
        <Container>
            <Form>
                <Item inlineLabel>
                    <Label>Deck title</Label>
                    <Input onChangeText={ onChange } />
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
