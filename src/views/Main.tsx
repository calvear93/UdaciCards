import { Button, Container, Content, Text, List, ListItem } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function MainView({ navigation }) : React.ReactElement
{
    return (
        <Container style={ styles.container }>
            <Content>
                <Content style={ styles.toolbar }>
                    <Button
                        rounded
                        success
                        style={ styles.add }
                        onPress={ () => navigation.navigate('AddDeck') }
                    >
                        <Text>Add Deck</Text>
                    </Button>
                </Content>
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
        backgroundColor: '#fff'
    },
    toolbar: {
        padding: 16
    },
    add: {
        alignSelf: 'flex-end'
    }
});
