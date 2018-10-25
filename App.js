import React, {Component} from 'react';
import {Image, Platform, StatusBar, StyleSheet, View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation'
import Colors from "./color/color";
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
            headerStyle: {
                backgroundColor: Colors.colorPrimary
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '100'
            }
        }
    }
);

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.statusBarColor}/>
                <RootStack style={styles.rootStack}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rootStack: {
        flex: 1
    }
});
