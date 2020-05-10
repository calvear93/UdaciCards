import { Container, DeckSwiper, Text, View } from 'native-base';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { QuizAction } from '../store/actions';

export default function QuizView({ navigation }) : React.ReactElement
{
    // const [ lastAnswer, setLastAnswer ] = useState<boolean | null>(null);

    let swiper: any;
    const dispatch = useDispatch();

    const quiz = useSelector(
        store => store[QuizAction.Key]
    );

    const questions = Object.values(quiz.questions);

    // useEffect(() =>
    // {
    //     if (lastAnswer === null)
    //         return;

    //     if (lastAnswer)
    //         swiper?._root.swipeLeft();
    //     else
    //         swiper?._root.swipeRight();
    // }, [ lastAnswer ]);

    function onAnswer(id: string, correct: boolean)
    {
        // setLastAnswer(correct);
        if (correct)
            swiper?._root.swipeLeft();
        else
            swiper?._root.swipeRight();

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
                    <>
                        <DeckSwiper
                            ref={ (c) => swiper = c }
                            dataSource={ questions.filter(q => q) }
                            renderItem={ (question: any) =>
                                question ? (
                                    <Card key={ question.id } question={ question } onAnswer={ onAnswer } />
                                ) : (null)
                            }
                        />

                    </>
                )}
            </View>
            {questions.length > 0 && <Text style={ styles.tip }>You can swipe the card for skip it.</Text>}
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
    },
    tip: {
        fontSize: 18,
        color: 'blue',
        marginTop: 12,
        textAlign: 'center'
    }
});
