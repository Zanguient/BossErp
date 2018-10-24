import React, {Component} from 'react';
import {StyleSheet, View, Image, Button} from 'react-native';
import {GET, POST} from "../../utils/fetch";
import LoginButton from "../../components/loginButton";

export default class Login extends Component {

    static navigationOptions = {
        header: null
    };

    onPressCallback() {
        GET("http://www.baidu.com", 1).then(result => {
             console.log(result);
        }).then(error => {
             console.log(error);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <LoginButton name='登录' onPressCallback={this.onPressCallback}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        paddingTop: 0
    },
    btn: {}
});
