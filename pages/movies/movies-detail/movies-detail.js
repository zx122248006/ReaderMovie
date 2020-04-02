let app = getApp();
let util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieArr: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (event) {
    let movieId = event.id;
    let moiveUrl = app.globalData.doubanBase + '/v2/movie/subject/' + movieId;
    util.http(moiveUrl, this.processDoubanData)


  },

  processDoubanData: function (data) {
    let movieData = data.data
    let directors = {
      avatars: '',
      name: '',
      id: ''
    };

    let testSummary = `西西莉亚（伊丽莎白·莫斯 Elisabeth Moss 饰）再也想不到，曾经将自己迷得神魂颠倒的英俊男人阿德里安（奥利弗·杰森-科恩 Oliver Jackson-Cohen 饰），如今会成为噩梦的始作俑者。在和自己恋爱后没多久，阿德里安便开始对西西莉亚进行精神和肉体上的双重控制，终于，忍无可忍的西西莉亚在一天深夜用安定将阿德里安迷晕，成功的逃出了魔窟。
    　　之后，西西莉亚震惊的收到了阿德里安自杀的消息了，她几乎不敢相信，这个魔头真的从自己的生活中彻彻底底的消失了。西西莉亚的疑虑并不是空穴来风，在她生活的角角落落中，似乎都有一个无形的影子在窥视着她，企图触碰她。`

    // console.log(movieData.casts)

    // join用于将数组使用指定的分隔符分隔，并组成一个字符串


    let movieArr = {
      castsName: util.getCastsName(movieData.casts),
      genres: movieData.genres.join('、'),
      countries: movieData.countries.join('·') + ' ' + movieData.year,
      wishCount: movieData.wish_count,
      reviewsCount: movieData.reviews_count,
      stars: util.converToStarsArray(movieData.rating.stars),
      average: movieData.rating.average,
      image: movieData.images.large,
      movieTitle: movieData.title,
      summer: movieData.summary ? movieData.summary : testSummary
    }

    wx.setNavigationBarTitle({
      title: util.setTitle(movieData.title)
    });

    // wx.request({
    //   url: movieData.images.large,
    //   header: { 'content-type': 'application/json' },
    //   method: 'GET',
    //   dataType: 'json',
    //   success: (result) => {
    //     console.log(result)
    //   }, fail: () => {
    //     console.log('1')
    //   },
    // });




    this.setData(movieArr)

    console.log(this.data)
  },



})