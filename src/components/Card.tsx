import { Body, Button, Card as NativeCard, CardItem, Left, Text, Toast } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

export default function Card({ question, onAnswer }) : React.ReactElement
{
    const [ answerVisible, setAnswerVisible ] = useState(false);

    function answer(correct: boolean)
    {
        if (correct)
        {
            Toast.show({
                text: 'Nice! keep it up!',
                duration: 4000,
                type: 'success'
            });
        }
        else
        {
            Toast.show({
                text: 'well, we all fail sometime!',
                duration: 4000,
                type: 'danger'
            });
        }
        onAnswer && onAnswer(question.id, correct);
    }

    return (
        <NativeCard style={ styles.card }>
            <CardItem>
                <Left>
                    <Body>
                        <Text style={ styles.question }>{question.question}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody style={ styles.answerContainer }>
                {answerVisible ? (
                    <Text style={ styles.answer }>{question.answer}</Text>
                ) : (
                    <Text style={ styles.answerHidden }>¡ANSWER HIDDEN!</Text>
                )}
            </CardItem>
            <CardItem style={ styles.buttonContainer }>
                {!answerVisible ? (
                    <Button info style={ styles.button } onPress={ () => setAnswerVisible(true) }>
                        <Text>Show Answer</Text>
                    </Button>
                ) : (
                    <>
                        <Button danger style={ styles.button } onPress={ () => answer(false) }>
                            <Text>Wrong!</Text>
                        </Button>
                        <Button success style={ styles.button } onPress={ () => answer(true) }>
                            <Text>Correct!</Text>
                        </Button>
                    </>
                )}
            </CardItem>
        </NativeCard>
    );
}

const styles = StyleSheet.create({
    card: {
        elevation: 10
    },
    question: {
        fontSize: 24,
        color: 'black',
        textAlign: 'center'
    },
    answerContainer: {
        height: 128,
        alignSelf: 'center'
    },
    answer: {
        fontSize: 20,
        color: 'green'
    },
    answerHidden: {
        fontSize: 20,
        color: 'red'
    },
    buttonContainer: {
        alignSelf: 'center'
    },
    button: {
        fontSize: 16,
        justifyContent: 'center',
        marginLeft: 12,
        marginRight: 12
    }
});
