"use strict";
var app = getApp();
Page({
    data: {
        pageType: 'login', //login || register
        userInfo: null,
        popFlag: false,
        hasUserInfo: false,
        canLogin: false,
        popAnimation: null,
        username: '',
        password: '',
        passwords: '',
        userphone: '',
        idcode: '',
        codeTime: 60,
        myTimer:null
    },
    onLoad: function () {
        if (wx.getStorageSync('userInfo')) {
            this.setData({ userInfo: JSON.parse(wx.getStorageSync('userInfo')) })
        }
        if (this.data.userInfo !== null) {
            console.log(this.data.userInfo)
            this.setData({
                hasUserInfo: true,
            });
        }
    },
    enter() {
        if (this.data.hasUserInfo) {
            this.setData({ canLogin: true })
        } else {
            var animation = wx.createAnimation({
                duration:200,
                timingFunction: 'linear'
              })
            animation.opacity(1).width('100%').height('100%').step();
            this.setData({ popFlag: true,popAnimation:animation.export() })
        }
    },
    onGetUserInfo(e) {
        var animation = wx.createAnimation({
            duration:200,
            timingFunction: 'linear'
          })
        animation.opacity(0).width('0%').height('0%').step();
        this.setData({ userInfo: e.detail.userInfo, hasUserInfo: true, canLogin: true, popFlag: false,popAnimation:animation.export() });
        wx.setStorageSync('userInfo', JSON.stringify(this.data.userInfo));
        wx.showToast({ title: '授权成功' })
    },
    changePageType() {
        this.setData({ pageType: this.data.pageType === 'login' ? 'register' : 'login' })
    },
    getInputValue(event) {
        console.log(event)
        var value = event.detail.value;
        switch (event.currentTarget.dataset.type) {
            case 'username':
                this.setData({ username: value })
                break;
            case 'password':
                this.setData({ password: value })
                break;
            case 'passwords':
                this.setData({ passwords: value })
                break;
            case 'userphone':
                this.setData({ userphone: value })
                break;
            case 'idcode':
                this.setData({ idcode: value })
                break;
            default:
                return null    
        }
    },
    getIdcode(){
        var _this = this;
        if(_this.data.myTimer){
            return false;
        }
        _this.data.myTimer = setInterval(() => {
            _this.setData({codeTime:_this.data.codeTime - 1})
            console.log(_this.data.codeTime)
            if(_this.data.codeTime == 0){
                clearInterval(myTimer);
                _this.setData({codeTime:60})
            }
        }, 1000);
    },
    enterHome() {
        switch (this.data.pageType) {
            case 'login':
                if (this.data.username == '') {
                    wx.showToast({ title: '请输入账号', icon: 'none' });
                    return false;
                }
                if (this.data.password == '') {
                    wx.showToast({ title: '请输入密码', icon: 'none' });
                    return false;
                }
                wx.setStorageSync('loginFlag','success')
                wx.redirectTo({ url: '../home/home'})
                break;
            case 'register':
                if (this.data.userphone == '') {
                    wx.showToast({ title: '请输入手机号', icon: 'none' });
                    return false;
                }
                if (this.data.idcode == '') {
                    wx.showToast({ title: '请输入验证码', icon: 'none' });
                    return false;
                }
                if (this.data.password == '') {
                    wx.showToast({ title: '请输入密码', icon: 'none' });
                    return false;
                }
                if (this.data.passwords == '') {
                    wx.showToast({ title: '请确认密码', icon: 'none' });
                    return false;
                }
                if (this.data.password !== this.data.passwords) {
                    wx.showToast({ title: '两次密码不一致', icon: 'none' });
                    return false;
                }
                wx.setStorageSync('loginFlag','success')
                wx.redirectTo({ url: '../home/home'})
                break;
            default:
                return null
        }
    }
});