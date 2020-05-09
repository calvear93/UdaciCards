import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export default function AddDeckView() : React.ReactElement
{
    return (
        <Container>
            <Content>
                <Form>
                    <Item fixedLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item fixedLabel last>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                </Form>
            </Content>
        </Container>
    );
}
