import React, {Component} from 'react';
import {
    StyleSheet, Text,
    View
} from 'react-native';

import {LoginButton, LoginCircleImage, LoginTextView, LoginLinkButton} from "../../components/LoginComponents";

export default class Login extends Component {

    static navigationOptions = {
        header: null
    };

    onPressClick = () => {
        console.log('1');
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circleImg}>
                    <LoginCircleImage/>
                </View>
                <LoginTextView placeholder='请输入账号'/>
                <LoginTextView placeholder='请输入密码'/>
                <LoginButton name='登录' onPress={this.onPressClick}/>
                <View style={styles.links}>
                    <LoginLinkButton name='忘记密码'/>
                    <LoginLinkButton name='注册'/>
                </View>
            </View>
        );
    }
}


let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#594eb799',
        justifyContent: 'center',
        paddingLeft: 50,
        paddingRight: 50
    },
    circleImg: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20
    },
    links: {
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'space-between'
    }
});

