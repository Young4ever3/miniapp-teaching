// pages/my/myinfo.js
const app =  getApp();
Page({
  
  

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:null,
    isLogin:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: function(res){
        console.log("setting",res)
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {
              console.log(res.userInfo)
              //用户已经授权过
            //   this.setData({
            //     userinfo: wx.getStorageSync('userinfo'),
            //     isLogin: true
            //  })
            }
          })
        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      userinfo: wx.getStorageSync('userInfo')
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getMyInfo:function(e){
    console.log("info",e.detail.userInfo)
    let info = e.detail.userInfo
    wx.setStorageSync('userinfo',app.globalData.userInfo)
    this.setData({userinfo: info,isLogin:true})
  }

})