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

    // 获取缓存
    let post = wx.getStorageSync('collected');

    // 判断缓存是否存在
    if (post) {
      let p = post[postId];
      // 判断当前文章是否存在缓存，如果存在，就将数据绑定到data中。
      if (p) {
        this.setData({
          collected: p
        })
      }
    } else {
      // 缓存不存在时，增加一个缓存
      let posts = {};
      posts[postId] = false;
      wx.setStorageSync('collected', posts);
    }

    // let postsCollected = wx.getStorageSync('posts_Collected');

    // if (postsCollected) {
    //   let postCollected = postsCollected[postId]
    //   if (postCollected) {

    //     this.setData({
    //       collected: postCollected
    //     })
    //   }
    // } else {
    //   let postsCollected = {};
    //   postsCollected[postId] = false;
    //   wx.setStorageSync('posts_Collected', postsCollected);
    // }


    console.log(this.data)
  },

  // 点击收藏按钮时
  onCollectionTap: function (event) {
    // 获取缓存
    let p = wx.getStorageSync('collected');
    // console.log(p)
    // 获取当前文章的缓存
    let b = p[this.data.postId];

    // 判断当前缓存是否存在，如果当前缓存不存在，就是非收藏状态，就将状态改为收藏 即 收藏状态 = true
    if (b == undefined) {
      b = true
    } else {
      // 当前缓存存在的话，就改为另外一个状态。
      b = !b
    }
    // 设置 当前id的缓存 的值为 当前的状态
    p[this.data.postId] = b;

    // 设置缓存
    wx.setStorageSync('collected', p)

    console.log(b)
    // 改变绑定的数据
    this.setData({
      collected: b
    })






    // let postsCollected = wx.getStorageSync('posts_Collected');
    // let postCollected = postsCollected[this.data.postId]
    // postCollected = !postCollected;

    // postsCollected[this.data.postId] = postCollected
    // wx.setStorageSync('posts_Collected', postsCollected)
    // console.log(this.data)

    // this.setData({
    //   collected:postCollected
    // })

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
