import { Container, DeckSwiper, View, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Card from '../components/Card';

export default function QuizView({ route: { params: { deck } }, navigation }) : React.ReactElement
{
    const questions = Object.values(deck.questions);

    return (
        <Container>
            <View style={ styles.container }>
                <Text style={ styles.title }>{deck.title}</Text>
                <DeckSwiper
                    dataSource={ questions }
                    renderItem={ (question: any) =>
                        (
                            <Card question={ question } />
                        )
                    }
                />
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 12,
        marginTop: 32
    },
    title: {
        fontSize: 32,
        color: 'gray',
        marginTop: 12,
        marginBottom: 42,
        textAlign: 'center'
    }
});
