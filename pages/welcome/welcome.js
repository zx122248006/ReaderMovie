Page({
  onTap:function (){
    // console.log("hello")
    
    // wx.navigateTo({
    //   url: '../posts/post'
    // })
    // navigateTo 跳转之后，可以返回之前的页面

    // wx.redirectTo({
    //   url: '../posts/post',
    // })

    wx.switchTab({
      url: '../posts/post',
    }); 
  },

  onLoad:function(){

    wx.getUserInfo({
      withCredentials: 'false',
      lang: 'zh_CN',
      timeout:10000,
      success: (res)=>{
       this.setUserInfo(res)
      }
    })
    
  },

  setUserInfo:function(event){
    this.setData({
      userName :event.userInfo.nickName,
      userImg:event.userInfo.avatarUrl
    })
  }


})