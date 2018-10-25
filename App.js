import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation'
import Welcome from "./views/welcome/welcome";
import Guidance from "./views/welcome/guidance";
import Login from "./views/login/login";
import Index from "./views/main/index";

const instructions = Platform.select({});

const RootStack = StackNavigator(
    {
        Welcome: {                       //定义Home对应HomeScreen组件
            screen: Welcome,
        },
        Guidance: {
            screen: Guidance,
        },
        Login: {
            screen: Login,
        },
        Index: {
            screen: Index
        },
    },
    {
        initialRouteName: 'Welcome',     //设置初始路由为Home
        navigationOptions: {           //导航栏通用设置
            header: null,
            headerStyle: {
                backgroundColor: '#7276ff'
            }
        }
    }
);

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <RootStack />
        );
    }
}

const styles = StyleSheet.create({});
