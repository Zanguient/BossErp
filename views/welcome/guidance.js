import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';

export default class Guidance extends Component {

    static navigationOptions = {
        header: null
    };

    render() {
        let firstPic = {
            uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540289147745&di=ceba32bae2bae87a802ddab27e538dea&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01c00d5876f441a801219c775361dc.jpg'
        };
        let secondPic = {
            uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540289147743&di=fbcf36e6a287c07ed72c34566cf779da&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01161c55423fe90000019ae94a7c71.jpg%402o.jpg'
        };
        let thirdPic = {
            uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540289147743&di=bfec4ea725b668e14c997375060d404a&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01775e562f47be32f8755701917457.png'
        };
        let fourPic = {
            uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540289222757&di=00063b3b439c62ebdb8c926046f44e16&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cd16580f19dea84a0d304f77aa3b.png%401280w_1l_2o_100sh.png'
        };
        return (
            <Swiper
                style={styles.container}          //样式
                loop={false}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                autoplay={false}                //自动轮播
                autoplayTimeout={5}             //每隔5秒切换
                horizontal={true}              //水平方向，为false可设置为竖直方向
                paginationStyle={{bottom: 10}} //小圆点的位置：距离底部10px
                showsButtons={false}           //为false时不显示控制按钮
                showsPagination={false}       //为false不显示下方圆点
                dot={<View style={styles.disPoint}></View>}
                activeDot={<View style={styles.activePoint}></View>}>
                <Image source={firstPic} style={styles.img}/>
                <Image source={secondPic} style={styles.img}/>
                <Image source={thirdPic} style={styles.img}/>
                <Image source={fourPic} style={styles.img}/>
            </Swiper>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    img: {
        flex: 1
    },
    //未选中的圆点样式
    disPoint: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 18,
        height: 18,
        borderRadius: 4,
        marginLeft: 10,
        marginRight: 9,
        marginTop: 9,
        marginBottom: 9
    },
    //选中的圆点样式
    activePoint: {
        backgroundColor: '#007aff',
        width: 18,
        height: 18,
        borderRadius: 4,
        marginLeft: 10,
        marginRight: 9,
        marginTop: 9,
        marginBottom: 9
    }
});
