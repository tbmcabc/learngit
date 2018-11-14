// pages/list.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    nowTarget: 0,
    appkey:"624b6abd7519e4f6d875c36980cc249e",
    expcomarr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  ChangePage: function(e) {
    this.setData({
      nowTarget : e.detail.current
    })
  },

  touchinfo:function(e){
    // wx.request({
    //   url: 'http://v.juhe.cn/exp/com',
    //   data:{
    //     key: "624b6abd7519e4f6d875c36980cc249e"
    //   },
    //   success: function(res) {
    //     console.log(res.data.result)
    //   },
    //   fail: function(res) {
    //     console.log("fail",res)
    //   },
    //   complete: function(res) {
    //   },
    // })
    let arr = [{ com: "顺丰", no: "sf"},
    { com: "申通", no: "sto" },
    { com: "圆通", no: "yt" },
    { com: "韵达", no: "yd" },
    { com: "天天", no: "tt" },
    { com: "EMS", no: "ems" },
    { com: "中通", no: "zto" }
    ]
    this.setData({
      expcomarr: arr
    })    
  }
})