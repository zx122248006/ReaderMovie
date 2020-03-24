// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (event) {
    let theaters = "/v2/movie/in_theaters" + "?start=0&count=3";
    let top250 = "/v2/movie/top250" + "?start=0&count=3";
    let comingSoon = "/v2/movie/coming_soon" + "?start=0&count=3"

    this.getApiData(theaters)

  },

  getApiData: function (link) {
    let $this = this;
    let doubanBase = "https://douban.uieee.com"
    wx.request({
      url: doubanBase + link,
      header: { 'Content-type': 'json' },
      method: 'GET',
      dataType: 'json',
      success: (result) => {
        // $this.processDoubanData(result.data)

        console.log(result.data.subjects)

        $this.setData({
          moviesData: result.data.subjects
        })
      }
    });

  },
  processDoubanData: function (moviesDouban) {
    let moviesArr = [];

    moviesDouban.subject.forEach(element => {
      console.log(element)
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})