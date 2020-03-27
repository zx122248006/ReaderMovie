// pages/movie/movie.js

// 使用require 方法引入星星的js
var util = require('../../utils/util.js')
var app = getApp();//取得全局App({..})实例

var doubanBase = app.globalData.doubanBase;//取得全局变量需要的值
Page({

  /**
   * 页面的初始数据
   */
  data: {
    theaters: {},
    top250: {},
    comingSoon: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (event) {
    let theaters = "/v2/movie/in_theaters" + "?start=0&count=3";
    let top250 = "/v2/movie/top250" + "?start=0&count=3";
    let comingSoon = "/v2/movie/coming_soon" + "?start=0&count=3"

    this.getApiData(top250, "top250", "Top250")
    this.getApiData(theaters, "theaters", "正在热映")
    this.getApiData(comingSoon, "comingSoon", "即将上映")
  },

  getApiData: function (link, dataName, listName) {
    let $this = this;

    wx.request({
      url: doubanBase + link,
      header: { 'Content-type': 'json' },
      method: 'GET',
      dataType: 'json',
      success: (result) => {
        // $this.processDoubanData(result.data)

        $this.processDoubanData(result.data.subjects, dataName, listName)

      }
    });

  },

  onMoreTap: function (event) {
    let listName = event.currentTarget.dataset.category
    console.log(listName)
    wx.navigateTo({
      url: 'movie-more/movie-more?listName=' + listName,
    });
  },

  processDoubanData: function (moviesDouban, dataName, listName) {
    let moviesArr = [];
    let movieTitle, average, movieImg, movieId, tempData, stars;
    let readData = {};
    // 获取数据
    for (const item of moviesDouban) {

      movieTitle = item.title
      // 判断标题长度。当标题长度超过6以后，截取标题，并增加...
      if (item.title.length >= 6) {
        movieTitle = movieTitle.substring(0, 6) + '...'
      }

      average = item.rating.average;
      movieImg = item.images.large;
      movieId = item.id
      // 使用util.converToStarsArray 调用星星的js，返回一个数组
      // 根据数组来判断显示多少颗星星
      stars = util.converToStarsArray(item.rating.stars)

      tempData = {
        movieTitle, average, movieImg, movieId, stars
      }

      // 将数据填充到一个数组
      moviesArr.push(tempData)

      readData[dataName] = {
        moviesList: moviesArr,
        listName: listName
        // listName 从调用getApiData()传递过来。
        // 又因为需要分配到每个不同的数据列表中
        // 所以在此绑定数据
      };
    }
    // 传递数据，因为readData 本身就是一个对象。所以这里不用{}包裹
    this.setData(
      readData
    )



  }

})


 // 使用动态属性存储数据

      // 此处得到的数据结构如下        
      // 在每个数据列表下，还有一个movieList 的数组，因为是同一个名字，所以可以调用同一个模板，达到不同效果的内容
/*       readData = {
        theaters: {
          moviesList: [  // movieList数组
            {
              average: 1,
              movieId: "123",
              movieImg: "xxxx",
              movieTitle: "电影名称"
            }, {
              average: 2,
              movieId: "223",
              movieImg: "xxxx",
              movieTitle: "电影名称2"
            }, {
              average: 1,
              movieId: "323",
              movieImg: "xxxx",
              movieTitle: "电影名称3"
            }
          ]
        },
        top250: {
          moviesList: [  // movieList数组
            {
              average: 1,
              movieId: "123",
              movieImg: "xxxx",
              movieTitle: "电影名称"
            }, {
              average: 2,
              movieId: "223",
              movieImg: "xxxx",
              movieTitle: "电影名称2"
            }, {
              average: 1,
              movieId: "323",
              movieImg: "xxxx",
              movieTitle: "电影名称3"
            }
          ]
        },
        comingSoon: {
          moviesList: [  // movieList数组
            {
              average: 1,
              movieId: "123",
              movieImg: "xxxx",
              movieTitle: "电影名称"
            }, {
              average: 2,
              movieId: "223",
              movieImg: "xxxx",
              movieTitle: "电影名称2"
            }, {
              average: 1,
              movieId: "323",
              movieImg: "xxxx",
              movieTitle: "电影名称3"
            }
          ]
        }
      } */