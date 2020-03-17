let postsData = require('../../../data/posts-data.js')
let b ;
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
    // 通过event 获取传递的值
    let postId = event.id;
    b = postId;
    // 使用变量存储数据
    let postData = postsData.postList;

    // 将对应的数据绑定到data中
    this.setData({
      postKey: postData[postId]
    })
    // console.log(this.data)


    // wx.setStorageSync('key', {
    //   game: '风暴英雄',
    //   developer: 'ahahah'

    // });



    let postCollected 
  },

  // onCollectionTap: function (event) {
  //   let game = wx.getStorageSync('key')
  //   console.log(game)
  // }
  // ,

  // onShareTap: function (event) {
  //   // 删除指定的缓存
  //   wx.removeStorageSync('key');
  //   // 删除本地所有缓存
  //   // wx.clearStorageSync();

  //   // 缓存的上限最大不能超过10M
  // }

})
console.log(b)
