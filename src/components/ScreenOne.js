import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';

class ScreenOne extends Component {
    state = {  }
    render() {
        return (
       <Container>
           <Content>
               <Text>You have logged in sucessfully</Text>
               </Content>
           </Container>
        );
    }
}

export default ScreenOne;