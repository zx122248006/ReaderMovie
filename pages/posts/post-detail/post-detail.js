let postsData = require('../../../data/posts-data.js')

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
    // 使用变量存储数据
    let postData = postsData.postList;

    // 将对应的数据绑定到data中
    this.setData({
      postKey: postData[postId],
      postId
    })
    // console.log(this.data)


    // wx.setStorageSync('key', {
    //   game: '风暴英雄',
    //   developer: 'ahahah'S

    // });


    let postsCollected = wx.getStorageSync('posts_Collected');
    
    if (postsCollected) {
      let postCollected = postsCollected[postId]
      if (postCollected) {

        this.setData({
          collected: postCollected
        })
      }


    } else {
      let postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_Collected', postsCollected);
    }


    console.log(this.data)
  },

  onCollectionTap: function (event) {
    let postsCollected = wx.getStorageSync('posts_Collected');
    let postCollected = postsCollected[this.data.postId]
    postCollected = !postCollected;

    postsCollected[this.data.postId] = postCollected
    wx.setStorageSync('posts_Collected', postsCollected)
    console.log(this.data)
    this.setData({
      collected:postCollected
    })
  }

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
