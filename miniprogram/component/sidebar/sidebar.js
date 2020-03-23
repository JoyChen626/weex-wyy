// component/sidebar/sidebar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sidebarFlag: {type:Boolean},
    sidebarAnimation: {type:Object}
  },

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    }
  },

  options: {
    addGlobalClass: false
  },
  /**
   * 组件的初始数据
   */
  data: {
    navArr: [{title:'我的消息'},{title:'我的好友'},{title:'个性皮肤'},{title:'听歌识曲'}],
    cellArr: [{title:'演出'},{title:'商城'},{title:'附近的人'},{title:'口袋铃声'},{title:'我的订单'}]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeSideBar (){
      this.triggerEvent('closeSidebar', false);
    }
  }
})
