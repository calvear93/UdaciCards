import { Button, Container, Content, Text, List, ListItem, Icon } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { DeckAction } from '../store/actions';

export default function MainView({ navigation }) : React.ReactElement
{
    const dispatch = useDispatch();

    function removeAllDecks()
    {
        dispatch(DeckAction.Action(DeckAction.Type.CLEAR));
    }

    return (
        <Container style={ styles.container }>
            <Content>
                <View style={ styles.toolbar }>
                    <Button
                        rounded
                        danger
                        style={ styles.button }
                        onPress={ removeAllDecks }
                    >
                        <Icon name='trash' />
                        <Text>Remove All Decks</Text>
                    </Button>
                    <Button
                        rounded
                        success
                        style={ styles.button }
                        onPress={ () => navigation.navigate('AddDeck') }
                    >
                        <Icon name='add' />
                        <Text>Add Deck</Text>
                    </Button>
                </View>
                <List>
                    <ListItem itemDivider>
                        <Text>A</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Aaron Bennet</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Ali Connors</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>B</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    toolbar: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'flex-end'
    },
    button: {
        marginRight: 8
    }
});
