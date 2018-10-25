import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation'
import Main from "./main";
import Msg from "./msg";
import Things from "./things";

import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// 注册tabs
const TabNavigators = createBottomTabNavigator({
    Home: {
        screen: Main,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor, focused}) => (
                <Entypo name={'home'} size={22} style={{color: tintColor}}/>
            )
        }
    },
    Msg: {
        screen: Msg,
        navigationOptions: {
            tabBarLabel: '消息',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons name={'sms'} size={22} style={{color: tintColor}}/>
            )
        }
    },
    Things: {
        screen: Things,
        navigationOptions: {
            tabBarLabel: '新鲜事',
            tabBarIcon: ({tintColor, focused}) => (
                <Entypo name={'news'} size={22} style={{color: tintColor}}/>
            )
        }
    }
}, {
    initialRouteName: 'Home',
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#FF5C58', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            // height: 44
        },
        labelStyle: {
            fontSize: 10, // 文字大小
        },
    },
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

const styles = StyleSheet.create({
    icon: {
        width: 32,
        height: 32
    }
});
