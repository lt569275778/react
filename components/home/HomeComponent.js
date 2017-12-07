import React from 'react'

import {View,Text,StyleSheet,Image} from 'react-native'

import Swiper from 'react-native-swiper'

import {Actions} from 'react-native-router-flux'

//RN中的样式
var styles = StyleSheet.create({
  wrapper: {
    
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  imageStyle: {
    width:'100%',
    height:'100%'
  },
  navBar:{
      flexDirection:'row',
      height:50,
      backgroundColor:'orange',
      justifyContent:'space-around',
      alignItems:'center'
  }
})

export default class HomeComponent extends React.Component{
    render(){
        return (
            // View相当于div
            <View style={{paddingTop:54}}>
                {/*1.0 轮播图*/}
                <Swiper style={styles.wrapper} height={160} autoplay={true} showsButtons={true}>
                    <View style={styles.slide1}>
                        <Image source={{uri: 'http://www.itcast.cn/images/slidead/BEIJING/2017410109413000.jpg'}}
       style={styles.imageStyle} />
                    </View>
                    <View style={styles.slide2}>
                        <Image source={{uri: 'http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg'}}
       style={styles.imageStyle} />
                    </View>
                    <View style={styles.slide3}>
                        <Image source={{uri: 'http://www.itcast.cn/images/slidead/BEIJING/2017441409442800.jpg'}}
       style={styles.imageStyle} />
                    </View>
                </Swiper>
                {/*2.0 自定义导航条*/}
                <View style={styles.navBar}>
                    <Text>首页</Text>
                    <Text onPress={Actions.movieList}>电影</Text>
                    <Text onPress={Actions.about}>关于</Text>
                </View>
            </View>
        )
    }
}