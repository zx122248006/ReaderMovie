var postsData = require('../../../data/posts-data.js');

Page({
  onLoad: function (option) {

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

  },

})