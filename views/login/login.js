import React, {Component} from 'react';
import {
    StyleSheet, Text,
    View
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather'
import {LoginButton, LoginCircleImage, LoginTextView, LoginLinkButton} from "../../components/LoginComponents";


export default class Login extends Component {

    onPressClick = () => {
        this.props.navigation.navigate('Index', {})
    };

    render() {
        return (
            <View style={styles.container}>
                <Feather name={'align-center'} size={50} color={'#FF6600'}/>
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

