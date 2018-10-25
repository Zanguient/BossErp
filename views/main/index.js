import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation'
import Main from "./main";
import Msg from "./msg";
import Things from "./things";

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const TabNavigators = createBottomTabNavigator({
    Home: {
        screen: Main,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({focused, tintColor}) => {
                return focused ? <MaterialCommunityIcons name={'home-account'} size={22} style={{color: tintColor}}/> :
                    <MaterialCommunityIcons name={'home'} size={22} style={{color: tintColor}}/>;
            },
        }
    },
    Msg: {
        screen: Msg,
        navigationOptions: {
            tabBarLabel: '消息',
            tabBarIcon: ({focused, tintColor}) => {
                return focused ? <MaterialCommunityIcons name={'home-account'} size={22} style={{color: tintColor}}/> :
                    <MaterialCommunityIcons name={'home'} size={22} style={{color: tintColor}}/>;
            },
        }
    },
    Things: {
        screen: Things,
        navigationOptions: {
            tabBarLabel: '新鲜事',
            tabBarIcon: ({focused, tintColor}) => {
                return focused ? <MaterialCommunityIcons name={'home-account'} size={22} style={{color: tintColor}}/> :
                    <MaterialCommunityIcons name={'home'} size={22} style={{color: tintColor}}/>;
            },
        }
    }
}, {
    initialRouteName: 'Home',
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#FF6600', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#FFFFFF', // TabBar 背景色
            // height: 44
        },
        labelStyle: {
            fontSize: 10, // 文字大小
        },
    }
});

export default class Index extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <TabNavigators/>
        );
    }
}

const styles = StyleSheet.create({});
