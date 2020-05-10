import { Body, Card as NativeCard, CardItem, Icon, Left, Text, Thumbnail } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function Card({ question }) : React.ReactElement
{
    return (
        <NativeCard style={ { elevation: 3 } }>
            <CardItem>
                <Left>
                    <Body>
                        <Text style={ styles.question }>{question.question}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody style={ styles.answerContainer }>
                <Text style={ styles.answer }>{question.answer}</Text>
            </CardItem>
            <CardItem>
                <Text>{question.answer}</Text>
            </CardItem>
        </NativeCard>
    );
}

const styles = StyleSheet.create({
    question: {
        fontSize: 24,
        color: 'black',
        textAlign: 'center'
    },
    answerContainer: {
        alignSelf: 'center'
    },
    answer: {
        fontSize: 20,
        color: 'green'
    },
    button: {
        fontSize: 16,
        color: 'gray',
        marginTop: 24
    }
});
