import React from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

export default function ErrorView() : React.ReactElement
{
    return (
        <Container>
            <Header />
            <Content>
                <Card>
                    <CardItem header>
                        <Text>Error</Text>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                                An error happens!
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <Text>Sorry for that</Text>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}
