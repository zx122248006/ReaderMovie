var util = require('../../../utils/util.js')

var app = getApp();//取得全局App({..})实例

Page({


  data: {
    newDataUrl: "",
    totalRequire: 0,
    isEmpty: true
  },

  onLoad: function (event) {
    let NavigationBarTitle = event.listName;
    let dataUrl;
    wx.setNavigationBarTitle({
      title: NavigationBarTitle,
    });

    switch (NavigationBarTitle) {
      case "Top250":
        dataUrl = app.globalData.doubanBase + "/v2/movie/top250"
        break;
      case "即将上映":
        dataUrl = app.globalData.doubanBase + "/v2/movie/coming_soon"
        break;
      case "正在热映":
        dataUrl = app.globalData.doubanBase + "/v2/movie/in_theaters"
        break;
    }
    this.setData({
      newDataUrl: dataUrl
    })
    // 使用回调函数。不需要加()
    util.http(dataUrl, this.processDoubanData)

  },

  onScrollLower: function (event) {
    let newUrl = this.data.newDataUrl + "?start=" + this.data.totalRequire + "&count=20";
    util.http(newUrl, this.processDoubanData)
  },

  processDoubanData: function (TotalData) {
    let moviesArr = [];
    let movieTitle, average, movieImg, movieId, tempData, stars;

    // 获取数据
    for (const item of TotalData.data.subjects) {

      movieTitle = item.title
      // 判断标题长度。当标题长度超过6以后，截取标题，并增加...
      if (item.title.length >= 6) {
        movieTitle = movieTitle.substring(0, 6) + '...'
      }

      average = item.rating.average;
      movieImg = item.images.large;
      movieId = item.id
      stars = util.converToStarsArray(item.rating.stars)

      tempData = {
        movieTitle, average, movieImg, movieId, stars
      }
      moviesArr.push(tempData)
    }

    let movies;

    if (!this.data.isEmpty) {
      movies = this.data.movies.concat(moviesArr)

    } else {
      movies = moviesArr;
      this.data.isEmpty = false
    }

    this.data.totalRequire += 20;
    this.setData({
      movies: movies
    })

  }

})