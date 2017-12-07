import React from 'react'

import {View,Text,ActivityIndicator,ScrollView,Image} from 'react-native'

import MovieDataService from '../../services/MovieDataService.js'

export default class MovieDetailComponent extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isLoading : true,
            movieInfo : {}
        }
    }

    componentWillMount(){
        this.getMovieDetailData()
    }

    getMovieDetailData = () =>{
        MovieDataService.getMovieDetailById(this.props.movieId).then(data=>{
            this.setState({
                isLoading : false,
                movieInfo : data
            })
        })
    }

    render(){
        return <View style={{paddingTop:54}}>
            {this.renderMovieInfo()}
        </View>
    }

    renderMovieInfo = () =>{
        if(this.state.isLoading){
            return <ActivityIndicator size="large"/>
        }else{
            return <ScrollView>
                    {/*标题*/}
                    <Text style={{fontSize:28,textAlign:'center',marginTop:3}}>{this.state.movieInfo.title}</Text>
                    {/*图片*/}
                    <View style={{alignItems:'center'}}>
                        <Image style={{width:200,height:260,marginTop:5}} source={{uri:this.state.movieInfo.images.large}} />
                    </View>
                    {/*主要演员*/}
                    <Text style={{fontSize:22,marginTop:10}}>主要演员:</Text>
                    {/*主要演员的信息*/}
                    <View style={{flexDirection:'row'}}>
                        {this.state.movieInfo.casts.map((item,i)=>{
                            return <View key={i} style={{margin:5,alignItems:'center'}}>
                                <Image style={{width:60,height:90}} source={{uri:item.avatars.small}} />
                                <Text>{item.name}</Text>
                            </View>
                        })}
                    </View>
                    {/*电影简介*/}
                    <Text style={{fontSize:22,marginTop:10}}>电影简介:</Text>
                    <Text style={{lineHeight:30,marginBottom:3}}>{this.state.movieInfo.summary}</Text>
            </ScrollView>
        }
    }
}