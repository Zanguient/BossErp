import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import AsyncStorageUtil from "../../utils/asyncStorage";

export default class Welcome extends Component {
    constructor() {
        super();
        setTimeout(() => {
            //判断用户是否是初次进入,是:跳转到引导界面，否:判断用户是否已经登录(是:跳转到主页,否:跳转到登录页)
            AsyncStorageUtil.get("isFirstIn").then((isFirstIn) => {
                if (isFirstIn) {
                    //不是第一次进入,判断用户是否已经登录(是:跳转到主页,否:跳转到登录页)
                    AsyncStorageUtil.get("isLogin").then((isLogin) => {
                        if (isLogin) {
                            //已经登录,跳转到首页
                            this.props.navigation.navigate('Index',{})
                        } else {
                            //没有登录跳转到登录界面
                            this.props.navigation.navigate('Login',{})
                        }
                    });
                } else {
                    //为第一次进入
                    AsyncStorageUtil.save("isFirstIn", true);
                    //跳转到引导界面
                    this.props.navigation.navigate('Guidance',{})
                }
            });
        }, 1500);
    }

    render() {
        let pic = {
            uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540289147747&di=3ca418f1160159a42fb7775bed267b76&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01619056fcd5496ac7257948a039ae.jpg%401280w_1l_2o_100sh.jpg'
        };
        return (
            <Image source={pic} style={styles.img}></Image>
        );
    }

}

const styles = StyleSheet.create({
    img: {
        flex: 1
    }
});
