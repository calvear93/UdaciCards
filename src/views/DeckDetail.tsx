import { Button, Container, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import { DeckAction } from '../store/actions';

export default function DeckDetailView({ route: { params: { id } }, navigation }) : React.ReactElement
{
    const { decks: { [id]: deck } } = useSelector(
        store => store[DeckAction.Key],
        shallowEqual
    );

    function addCard()
    {
        navigation.navigate('AddCard', { id: deck.id, title: deck.title });
    }

    function startQuiz()
    {
        alert('not yet');
    }

    return (
        <Container style={ styles.container }>
            <Text style={ styles.title }>{deck?.title}</Text>

            <Text style={ styles.subtitle }>{deck?.count} Cards</Text>

            <Button
                full
                info
                onPress={ addCard }
                style={ styles.button }
            >
                <Text>Add Card</Text>
            </Button>
            <Button
                full
                dark
                onPress={ startQuiz }
                style={ styles.button }
            >
                <Text>Start Quiz</Text>
            </Button>
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
        color: 'black',
        marginTop: 32,
        marginBottom: 12,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 20,
        color: 'gray',
        marginBottom: 24,
        textAlign: 'center'
    },
    button: {
        fontSize: 16,
        color: 'gray',
        marginTop: 24
    }
});
