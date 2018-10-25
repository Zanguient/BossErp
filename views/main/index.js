import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export default class Index extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FAFF'
    },
    tabIcon: {
        width: 23,
        height: 23,
    }
});
