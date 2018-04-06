import React, { Component } from 'react';
import {StatusBar} from 'react-native'
import { Router, Scene, Stack, ActionConst } from 'react-native-router-flux';
import HomeScreen from './HomeScreen';
import { Container, View,Header } from 'native-base';
import SimpleForm from './SimpleForm';
import ScreenOne from './ScreenOne';


class MainContainer extends Component {
    state = {}
    render() {
        return (
            
            // <StatusBar hidden={true} />
                <Container>
                    <Header style={{height:0,paddingTop:0}}>
                    <StatusBar hidden={true} />
                    </Header>
                    <Router>
                        <Stack key="root">
                            <Scene titleStyle={{alignSelf: 'center'}}  key="home" component={HomeScreen} title="Home" />
                            <Scene titleStyle={{alignSelf: 'center'}}  key="login" component={SimpleForm} title="Login" />
                            <Scene titleStyle={{alignSelf: 'center'}} key="items" component={ScreenOne} title="Items" />
                        </Stack>
                    </Router>
                </Container>
           
        );
    }
}

export default MainContainer;