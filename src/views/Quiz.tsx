import { Container, DeckSwiper, View, Text } from 'native-base';
import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
import Card from '../components/Card';
import { QuizAction } from '../store/actions';

export default function QuizView({ navigation }) : React.ReactElement
{
    const dispatch = useDispatch();

    const quiz = useSelector(
        store => store[QuizAction.Key]
    );

    const questions = Object.values(quiz.questions);

    function onAnswer(id: string, correct: boolean)
    {
        dispatch(QuizAction.Action(
            QuizAction.Type.ANSWER,
            { id, correct }
        ));
    }

    return (
        <Container>
            <View style={ styles.container }>
                <Text style={ styles.score }>{quiz.answered}/{quiz.total}</Text>
                <Text style={ styles.title }>{quiz.title}</Text>
                {questions.length === 0 ? (
                    <>
                        <Text style={ styles.success }>Well done! All cards answered!</Text>
                        <Text style={ styles.final }>Accuracy: {(quiz.score / quiz.total) * 100}%</Text>
                    </>
                ) : (
                    <DeckSwiper
                        dataSource={ questions }
                        renderItem={ (question: any) =>
                            (
                                <Card key={ question.id } question={ question } onAnswer={ onAnswer } />
                            )
                        }
                    />
                )}
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
        marginBottom: 42,
        textAlign: 'center'
    },
    success: {
        fontSize: 32,
        color: 'green',
        marginTop: 12,
        marginBottom: 42,
        textAlign: 'center'
    },
    score: {
        fontSize: 26,
        color: 'orange',
        marginTop: 12,
        textAlign: 'center'
    },
    final: {
        fontSize: 26,
        color: 'purple',
        marginTop: 12,
        textAlign: 'center'
    }
});
