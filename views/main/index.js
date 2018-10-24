import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Main from "./main";
import Msg from "./msg";
import Things from "./things";

const dataSource = [
    {
        icon: require('../../images/book.png'),
        selectedIcon: require('../../images/book@highlight.png'),
        tabPage: 'Main',
        tabName: '首页',
        component: Main
    },
    {
        icon: require('../../images/classic.png'),
        selectedIcon: require('../../images/classic@highlight.png'),
        tabPage: 'Msg',
        tabName: '消息',
        component: Msg
    },
    {
        icon: require('../../images/my.png'),
        selectedIcon: require('../../images/my@highlight.png'),
        tabPage: 'Things',
        tabName: '新鲜事',
        component: Things
    }
];


let navigation = null;

export default class Index extends Component {

    constructor() {
        super();
        this.state = {
            selectedTab: 'Main'
        }
    }

    render() {
        let tabViews = dataSource.map((item, i) => {
            return (
                <TabNavigator.Item
                    title={item.tabName}
                    selected={this.state.selectedTab === item.tabPage}
                    titleStyle={{color: '#999999'}}
                    selectedTitleStyle={{color: '#FF5C58'}}
                    renderIcon={() => <Image style={styles.tabIcon} source={item.icon}/>}
                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={item.selectedIcon}/>}
                    tabStyle={{alignSelf: 'center'}}
                    onPress={() => {
                        this.setState({selectedTab: item.tabPage})
                    }}
                    key={i}>
                    <item.component navigation={navigation}/>
                </TabNavigator.Item>
            );
        });
        return (
            <View style={styles.container}>
                <TabNavigator hidesTabTouch={true}>
                    {tabViews}
                </TabNavigator>
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
