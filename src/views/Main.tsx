import { Button, Container, Content, Text, List, ListItem, Icon, Card, CardItem, Body, ActionSheet } from 'native-base';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DeckAction } from '../store/actions';

export default function MainView({ navigation }) : React.ReactElement
{
    const dispatch = useDispatch();

    const { decks = {} } = useSelector(
        store => store[DeckAction.Key],
        shallowEqual
    );

    function removeAllDecks()
    {
        dispatch(DeckAction.Action(DeckAction.Type.CLEAR));
    }

    function ViewCards(id)
    {
        navigation.navigate('DeckDetail', { id });
    }

    function ShowOptions(id, title)
    {
        ActionSheet.show(
            {
                options: [
                    { text: 'Delete', icon: 'trash', iconColor: '#fa213b' },
                    { text: 'Cancel', icon: 'close', iconColor: '#25de5b' }
                ],
                title: `Deck "${title}" options`
            },
            buttonIndex =>
            {
                if (buttonIndex === 0)
                    DeleteDeck(id);
            }
        );
    }

    function DeleteDeck(id)
    {
        dispatch(DeckAction.Action(
            DeckAction.Type.REMOVE_DECK,
            { id }
        ));
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
                    {
                        Object.values(decks)
                            .map((d: any) => d && (
                                <ListItem
                                    key={ d.id }
                                    onPress={ () => ViewCards(d.id) }
                                    onLongPress={ () => ShowOptions(d.id, d.title) }
                                >
                                    <Card style={ styles.deck }>
                                        <CardItem header bordered>
                                            <Text style={ styles.title }>{d.title}</Text>
                                        </CardItem>
                                        <CardItem footer bordered>
                                            <Text>{d.count} Cards</Text>
                                        </CardItem>
                                    </Card>
                                </ListItem>
                            ))
                    }
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
    },
    deck: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: 'green'
    }
});
