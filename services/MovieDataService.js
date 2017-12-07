export default{
    //根据类型获取电影列表
    getMovieListByType(movieType){
        const url = "https://api.douban.com/v2/movie/"+movieType

        var promise = new Promise((resolve,reject)=>{
            fetch(url).then(response=>{
                return response.json()
            }).then(data=>{
                resolve(data)
            })
        })

        return promise
    },
    //根据电影id获取我们的电影详情数据
    getMovieDetailById(movieId){
        const url = "https://api.douban.com/v2/movie/subject/"+movieId
        
        var promise = new Promise((resolve,reject)=>{
            fetch(url).then(response=>{
                return response.json()
            }).then(data=>{
                resolve(data)
            })
        })

        return promise
    }
}