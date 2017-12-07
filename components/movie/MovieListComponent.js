import React from 'react'


import {View,Text,ActivityIndicator,ListView,Image,TouchableOpacity} from 'react-native'

import MovieDataService from '../../services/MovieDataService.js'

import {Actions} from 'react-native-router-flux'

export default class MovieListComponent extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isLoading : true,
            movieList : []
        }
    }

    //组件实例MovieListComponent已经创建出来，还没有完全挂载完成
    componentWillMount(){
        this.getMovieListData()
    }

    getMovieListData = () =>{
        MovieDataService.getMovieListByType("top250").then(data=>{
            //创建一个空白数据源，空的数组
            var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
                isLoading : false,
                movieList : ds.cloneWithRows(data.subjects)
            })
        })
    }

    render(){
        return <View style={{paddingTop:54}}>
            {/*jsx中调用函数{}*/}
            {this.renderMovieList()}
        </View>
    }

    renderMovieList = ()=>{
        if(this.state.isLoading){//正在加载
            return <ActivityIndicator size="large"/>
        }else{
            {/*dataSource就是数据源，事先准备好的20条数据*/}
            {/*renderRow就是渲染我们一个行单元格的函数*/}
            return <ListView
                dataSource={this.state.movieList} 
                renderRow={(rowData) => <TouchableOpacity activeOpacity={0.8} onPress={()=>{this.goMovieDetail(rowData.id)}}>
                    <View style={{flexDirection:'row',padding:10,borderBottomWidth:1,borderBottomColor:'#eee'}}>
                        {/*左边的图片*/}
                        <Image source={{uri:rowData.images.medium}} style={{width:100,height:140,marginRight:10}}/>
                        {/*右边的描述*/}
                        <View style={{justifyContent:'space-between'}}>
                            <Text>电影名称:{rowData.title}</Text>
                            <Text>电影类型:{rowData.genres.join(',')}</Text>
                            <Text>上映年份:{rowData.year}年</Text>
                            <Text>豆瓣评分:{rowData.rating.average}分</Text>
                        </View>
                    </View>
                  </TouchableOpacity>
                }
            />
        }
    }

    goMovieDetail = (movieId) =>{
        Actions.movieDetail({movieId:movieId})
    }
}