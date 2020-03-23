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

    wx.wx.switchTab({
      url: '../posts/post',
      // success: (result)=>{
        
      // },
      // fail: ()=>{},
      // complete: ()=>{}
    });
  },


})