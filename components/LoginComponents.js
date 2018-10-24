import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

class LoginButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.touchable}>
                <Text style={styles.text}>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        );
    }
}

class LoginTextView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TextInput style={styles.input} placeholder={this.props.placeholder} underlineColorAndroid='transparent'
                       placeholderTextColor='rgb(255,255,255)'/>
        );
    }
}

class LoginCircleImage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let pic = {
            uri: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1540377724&di=61ac6f6a360b91a32a41a97037b027d2&src=http://imgsrc.baidu.com/imgad/pic/item/9d82d158ccbf6c8154bdd5ccb63eb13533fa4008.jpg"
        };
        return (
            <Image source={pic} style={styles.circleImg}/>
        );
    }
}

class LoginLinkButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text style={styles.linkText}>{this.props.name}</Text>
        );
    }
}

const styles = StyleSheet.create({

    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        width: 30
    },

    touchable: {
        marginTop: 10,
        height: 38,
        backgroundColor: '#3281DD',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    circleImg: {
        width: 70,
        height: 70,
        borderRadius: 50
    },

    input: {
        paddingLeft: 10,
        fontSize: 12,
        backgroundColor: '#5849a499',
        borderRadius: 4,
        height: 38,
        marginBottom: 5
    },

    linkText: {
        color: '#ffffff'
    }

});

export {LoginTextView, LoginCircleImage, LoginButton, LoginLinkButton}
