import { Container, DeckSwiper, View, Text } from 'native-base';
import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
import Card from '../components/Card';
import { QuizAction } from '../store/actions';

export default function QuizView({ navigation }) : React.ReactElement
{
    const quiz = useSelector(
        store => store[QuizAction.Key],
        shallowEqual
    );

    const questions = Object.values(quiz.questions);

    return (
        <Container>
            <View style={ styles.container }>
                <Text style={ styles.title }>{quiz.title}</Text>
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
