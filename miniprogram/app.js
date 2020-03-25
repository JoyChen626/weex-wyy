"use strict";
App({
    globalData: {},
    onLaunch: function () {
        var _this = this;
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        wx.login({
            success: function (res) {
                console.log(res.code);
            }
        });
        if(wx.getStorageSync('loginFlag') === 'success'){
            wx.redirectTo({url: '../home/home'})
        }
    },
});
