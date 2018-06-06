// pages/posts/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_content = [
      {
        date: "Sep 18 2016",
        title: "一行白鹭上青天",
        imgSrc: "/images/post/crab.png",
        avatar: "/images/avatar/1.png",
        content: "春花秋月何时了，往事知多少，小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改，问君能有几多愁，恰似一江春水向东流。",
        reading: "112",
        collection: "96",
      },
      {
        date: "NOV 23 2016",
        title: "静夜思",
        imgSrc: "/images/post/bl.png",
        avatar: "/images/avatar/2.png",
        content: "春花秋月何时了，往事知多少，小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改，问君能有几多愁，恰似一江春水向东流。",
        reading: "112",
        collection: "96",
      }
    ]
    // 使用this.setData 绑定数据，然后再设置一个键名，使得在data：{}数据中，存在一个键名，在页面中使用wx:for="{{定义的键名}}"，进行循环。
    this.setData({
      posts_key: post_content
    });
  },


})