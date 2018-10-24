import React, {Component} from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
import pic from '../images/bg.jpg'


const { width, height } = Dimensions.get('window');//获取手机的宽和高

export default class Test extends Component {

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Image source={pic} style={styles.img}></Image>
        );
    }
}

const styles = StyleSheet.create({
    img: {
        flex: 1,
        width:width,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode:Image.resizeMode.contain,
    }
});
