import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { DeckAction } from '../store/actions';
import uuid from 'short-uuid';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

export default function Test()
{
    const dispatch = useDispatch();
    const store = useSelector(
        store => store[DeckAction.Key],
        shallowEqual
    );

    useEffect(() =>
    {
        // dispatch(DeckAction.Action(DeckAction.Type.ADD_DECK, { id: uuid.uuid(), title: 'asdasd', description: 'asdasda' }));
    }, [ ]);

    return (
        <Container>
            <Header />
            <Content>
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
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
