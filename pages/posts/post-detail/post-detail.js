var postsData = require('../../../data/posts-data.js');

Page({
  onLoad: function (option) {

    // 获取传入的值
    var postId = option.id;
    var postData = postsData.postList[postId];

    // 绑定传入的本地数据
    this.setData({
      posts_headImageSrc: postData.headImageSrc,
      posts_avatarImageSrc: postData.headImageSrc,
      posts_author: postData.author,
      posts_data: postData.dateTime,
      posts_title: postData.title,
      posts_detail: postData.detail
    });

    //一个同步的缓存
    // wx.setStorageSync('key',"风暴英雄")

    // 修改缓存
    wx.setStorageSync('key', {
      game: '风暴英雄',
      developer: '暴雪'
    }),

    wx.setStorageSync('key1', {
      game: '绝地求生',
      developer: '蓝洞'
    })

  },

  // 获取缓存
  onCollectionTap: function (event) {
    var game = wx.getStorageSync('key')
    console.log(game)
  },

  onShareTap: function (event) {
    
    // 删除缓存
    // wx.removeStorageSync('key')

    // 删除所有缓存
    wx.clearStorageSync()
  }
})