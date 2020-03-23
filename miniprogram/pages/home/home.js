Page({
  data: {
    sidebarFlag: false,
    sidebarAnimation: null,
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3', 'demo-text-4', 'demo-text-5', 'demo-text-6', 'demo-text-7', 'demo-text-8', 'demo-text-9'],
    typeArr: [{ title: '每日推荐' }, { title: '歌单' }, { title: '排行榜' }, { title: '电台' }, { title: '直播' }],
    memusArr: [{ title: '春天|春意一定会带来很多美好的事情' }, { title: '美好的事情' }, { title: '春天|春意一定会带来很多美好的事情' }, { title: '春天|春意一定会带来很多美好的事情' }, { title: '春天|春意一定会带来很多美好的事情' }, { title: '春天|春意一定会带来很多美好的事情' }],
    musicArr: [{ title: '来自火星的孩子', name: '花花', tip: "云音乐热歌榜1名" }, { title: '来自火星的孩子', name: '花花', tip: "云音乐热歌榜2名" }, { title: '来自火星的孩子', name: '花花', tip: "云音乐热歌榜3名" }, { title: '来自火星的孩子', name: '花花', tip: "云音乐热歌榜4名" }, { title: 'hhhhhhhhhh', name: 'ip酱', tip: "云音乐热歌榜5名" }]
  },

  onLoad() {
    if (wx.getStorageInfo('sidebarFlag')) {
      this.setData({ sidebarFlag: wx.getStorageInfo('sidebarFlag') })
    } else {
      wx.setStorageSync('sidebarFlag', this.data.sidebarFlag)
    }
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  showSideBar() {
    var animation = wx.createAnimation({
      duration:200,
      timingFunction: 'linear'
    })
    animation.left(0).step();
    this.setData({sidebarAnimation: animation.export(),sidebarFlag: true})
    wx.setStorageSync('sidebarFlag', true)
  },

  hideSideBar() {
    var animation = wx.createAnimation({
      duration:200,
      timingFunction: 'linear'
    })
    animation.left('-100%').step();
    this.setData({sidebarAnimation: animation.export(),sidebarFlag: false})
    wx.setStorageSync('sidebarFlag', false)
  }
})