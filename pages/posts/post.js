let postData = require('../../data/posts-data.js')
// 加载data.js 之后。


// pages/posts/post.js

// 定义一个变量接收posts-data文件中定义的变量。使用require方法进行接收,此处只能使用相对相对路径。
// var postsData = require('../../data/posts-data.js');


Page({
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 使用this.setData 绑定数据，然后再设置一个键名，使得在data：{}数据中，存在一个键名，在页面中使用wx:for="{{定义的键名}}"，进行循环。

    // this.data 在122100版本之后已经失效，使用数据绑定时，需使用this.setData方法

    // this.data.postList = postsData.postList;

    this.setData({
      // posts_key: post_content
      posts_key: postData.postList
    });

    // ES6 中。健值健名相同时，健名可以省略
    // this.setData({
    //   post_content:post_content
    // })
    // ===
    // this.setData({post_content})
  },

  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    // console.log(event.currentTarget.dataset.postid);

    // console.log("on post id is " + postId);
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  }


})
