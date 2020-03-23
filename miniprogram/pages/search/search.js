// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue:'',
    delete: true,
    windowHeight: 0,
    historyList: [{text:'平凡的一天',id:1},{text:'哈哈哈',id:2},{text:'来自火星的孩子',id:3}],
    hostList: [{text:'平凡的一天'},{text:'哈哈哈'},{text:'来自火星的孩子'}],
    datas:[],
    activeType: 1,
    typeList:[{text:'单曲',id:1},{text:'歌手',id:2},{text:'专辑',id:3},{text:'歌单',id:4},{text:'MV',id:5}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this  = this;
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({windowHeight:res.windowHeight})
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
  todelete(){
    this.setData({delete:!this.data.delete});
  },
  deleteHistory(event){
    var list = this.data.historyList;
    for(var i in list){
      if(list[i].id == event.currentTarget.dataset.id){
        list.splice(i,1)
      }
    }
    this.setData({historyList:list})
  },
  getSearchValue(e){
    this.setData({searchValue: e.detail.value})
    var dataList = ['HAHAHH','我的朋友','一天一天','平凡的一天','来自火星的孩子','1234567','你不知道的事','你不知道的事情','旅行忘记']
    var keyWord = this.data.searchValue;
    var arr = [];
    for (var i = 0; i < dataList.length; i++) {
      console.log(keyWord)
      if (dataList[i].indexOf(keyWord) >= 0) {
        arr.push(dataList[i]);
      }
    }
    this.setData({datas: arr})
  },
  clearValue(){
    this.setData({searchValue: ''})
  },
  search(event){
    console.log(event.currentTarget.dataset.search)
  },
  searchCancel(){
    this.setData({searchValue: ''})
  },
  changeType(event){
    this.setData({activeType: event.currentTarget.dataset.id})
  }
})