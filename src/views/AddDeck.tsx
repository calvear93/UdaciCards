import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

export default function AddDeckView() : React.ReactElement
{
    return (
        <Container>
            <Content>
                <Form>
                    <Item inlineLabel>
                        <Label>Deck name</Label>
                        <Input />
                    </Item>
                    <Button full>
                        <Text>ADD DECK</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
}
