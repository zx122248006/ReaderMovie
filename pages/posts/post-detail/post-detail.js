let postsData = require('../../../data/posts-data.js')
const backgroundAudioManager = wx.getBackgroundAudioManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playMusic: false
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
    this.musicPlaying();

  },


  musicPlaying: function () {
    // let $this = this;
    backgroundAudioManager.onPlay(() => {
      this.setData({
        playMusic: true
      })
    });
    backgroundAudioManager.onPause(() => {
      this.setData({
        playMusic: false
      })
    });
    backgroundAudioManager.onEnded(() => {
      this.setData({
        playMusic: false
      })
    });

    backgroundAudioManager.onStop(() => {
      this.setData({
        playMusic: false
      })
    });
  },

  // 点击收藏按钮时
  onCollectionTap: function (event) {
    // 获取缓存
    let p = wx.getStorageSync('collected');
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
    wx.setStorageSync('collected', p);

    // 改变绑定的数据
    this.setData({
      collected: b
    });

    // 弹出提示框
    // 在对象中也可以使用三元表达式来判断值
    wx.showToast({
      title: b ? '收藏成功' : '取消成功',
      duration: 1000
    });

    // 弹出确认框
    // wx.showModal({
    //   title: b ? '收藏成功' : '取消成功',
    //   content: '是否收藏该文章',
    //   // showCancel: true,
    //   cancelText: '取消',
    //   cancelColor: '#000000',
    //   confirmText: '确定',
    //   confirmColor: '#3CC51F'
    // });


  },


  // 学习使用showActionSheet API 使用方式
  // onShareTap: function (event) {
  //   console.log(event)
  //   wx.showActionSheet({
  //     itemList: [
  //       '1',
  //       '2',
  //       '3',
  //       '4'
  //     ],
  //     itemColor: '#405f80',
  //     success: (result) => {
  //       console.log(result)
  //     }
  //   });

  // }



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



  onMusicTap: function (event) {

    let playAudio = this.data.playMusic;
    if (playAudio) {
      backgroundAudioManager.pause();
    } else {
      this.backgroundAudioReady()
      backgroundAudioManager.play();
    }

    this.setData({
      playMusic: playAudio ? false : true
    })

    // backgroundAudioManager.play()

    // wx.playBackgroundAudio({
    //   dataUrl: nowMusic.music.url,
    //   title: nowMusic.music.musicTile,
    //   coverImgUrl: nowMusic.music.coverImgUrl,
    // });
  },

  // 新版小程序使用const backgroundAudioManager = wx.getBackgroundAudioManager()
  backgroundAudioReady: function () {
    let nowMusic = postsData.postList[this.data.postId].music;
    backgroundAudioManager.title = nowMusic.musicTitle
    backgroundAudioManager.epname = nowMusic.musicTitle
    backgroundAudioManager.singer = nowMusic.musicAuthor
    backgroundAudioManager.coverImgUrl = nowMusic.coverImgUrl
    backgroundAudioManager.src = nowMusic.url
  },
  onUnload: function () {
    backgroundAudioManager.stop()
    this.setData({
      playMusic: false
    })
  }
})

