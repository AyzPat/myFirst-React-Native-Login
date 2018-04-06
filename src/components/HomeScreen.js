import React, { Component } from 'react';
import { Container, Content, H1, Button,Text } from 'native-base';
import {Actions,Router,Scene} from 'react-native-router-flux'
import SimpleForm from './SimpleForm';

class HomeScreen extends Component {
    state = {  }
    render() {
        return (
            <Container>
               
                <Content>
               
                   <H1>Hello from home component</H1>
                   <Button onPress={Actions.login}><Text>Login</Text></Button>
                    </Content>
                </Container>

        );
    }
}

export default HomeScreen;