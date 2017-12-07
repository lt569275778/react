import React,{Component} from 'react'

import {View,Text} from 'react-native'

import {Scene, Router} from 'react-native-router-flux'

//导入根组件
import HomeComponent from './home/HomeComponent.js'
import AboutComponent from './about/AboutComponent.js'
import MovieListComponent from './movie/MovieListComponent.js'
import MovieDetailComponent from './movie/MovieDetailComponent.js'

export default class App extends Component{
    render(){
        return (
            // View相当于div
            <Router>
                {/*必须要有一个根场景，固定写法,Scene有点类似于Route*/}
                <Scene key="root">
                    <Scene key="home" initial={true} component={HomeComponent} title="首页"/>
                    <Scene key="about" component={AboutComponent} title="关于"/>
                    <Scene key="movieList" component={MovieListComponent} title="电影"/>
                    <Scene key="movieDetail" component={MovieDetailComponent} title="电影详情"/>
                </Scene>
            </Router>
        )
    }
}