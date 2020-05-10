import { Button, Container, Form, Input, Item, Label, Text, Toast } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { DeckAction } from '../store/actions';

export default function AddCardView({ route: { params: { id, title } }, navigation }) : React.ReactElement
{
    const [ question, setQuestion ] = useState('');
    const [ answer, setAnswer ] = useState('');
    const dispatch = useDispatch();

    function onSubmit()
    {
        if (!question || !answer)
        {
            alert('Inputs cannot be empty');

            return;
        }

        dispatch(DeckAction.Action(
            DeckAction.Type.ADD_CARD,
            { deckId: id, question, answer }
        ));

        navigation.goBack();

        Toast.show({
            text: 'Card added succesfully',
            duration: 2000,
            type: 'success'
        });
    }

    return (
        <Container style={ styles.container }>
            <Form>
                <Text style={ styles.title }>Add a new question for deck {title}</Text>
                <Item floatingLabel>
                    <Label>Enter the question here</Label>
                    <Input onChangeText={ setQuestion } />
                </Item>
                <Item floatingLabel>
                    <Label>Enter the answer here</Label>
                    <Input onChangeText={ setAnswer } />
                </Item>
                <Button style={ styles.button } onPress={ onSubmit }>
                    <Text>ADD CARD</Text>
                </Button>
            </Form>
        </Container>
    );
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
    },
    button: {
        marginTop: 32,
        textAlign: 'center',
        justifyContent: 'center'
    }
});
