import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Things extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>新鲜事</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
