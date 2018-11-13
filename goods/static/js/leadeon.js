/* eslint-disable */ ;
(function () {
  var ua = navigator.userAgent
  var android = ua.match(/(Android);?[\s/]+([\d.]+)?/)
  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/)
  var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)

  // 在中国移动 APP 中
  var isCMCC = (function () {
    return ua.toLowerCase().indexOf('leadeon') !== -1
  })()

  // 在移动旗舰店 APP 中
  var isHLJ = (function () {
    return ua.toLowerCase().indexOf('mobileflagship') !== -1
  })()

  // ios桥梁
  function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
      return callback(WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function () {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
  }

  var leadeon = {
    callNative: function (options, businessName) {
      options = options || {}
      options.businessName = businessName
      var successName = 'success_' + businessName + '_' + Math.random().toString(36).substring(3, 8)
      var errorName = 'error_' + businessName + '_' + Math.random().toString(36).substring(3, 8)

      options.callbackSuccess = successName
      options.callbackError = errorName
      if (!options.debug) {
        options.debug = false
      }

      this[successName] = function (data) {
        console.log('客户端返回数据：', data)
        if (android) {
          data = JSON.parse(data)
        }
        options.success && options.success(data)
      }

      this[errorName] = function (data) {
        if (android) {
          data = JSON.parse(data)
        }
        options.error && options.error(data)
      }

      if (android) {
        try {
          /* eslint-disable no-undef */
          console.log('传给客户端数据', options)
          newSdkInterface[businessName](JSON.stringify(options))
        } catch (error) {
          throw new Error(error)
        }
      } else if (iphone || ipad || ipod) {
        if (isHLJ) {
          setupWebViewJavascriptBridge(function (bridge) {
            bridge.registerHandler(successName, function (data, responseCallback) {
              console.log('客户端返回数据：', data)
              options.success && options.success(data)
              responseCallback(data)
            })

            bridge.registerHandler(errorName, function (data, responseCallback) {
              console.log('客户端返回数据：', data)
              options.error && options.error(data)
              responseCallback(data)
            })

            bridge.callHandler(businessName, options, function responsecallback(responseData) {})
          })
        } else if (isCMCC) {
          try {
            console.log('传给客户端数据', options)
            newSdkInterface[businessName](options)
          } catch (error) {
            throw new Error(error)
          }
        }
      }
    },

    // 手厅会调用这个方法
    init: function () {},

    iosInit: function (callback) {
      if (iphone || ipad || ipod) {
        setupWebViewJavascriptBridge(function (bridge) {
          bridge.registerHandler('init', function (data, responseCallback) {
            callback()
            responseCallback('初始化成功')
          })
        })
      }
    }
  }

  var businessNames = []

  if (isHLJ) {
    // 黑龙江
    businessNames = [
      'getUserInfo', // 获取用户信息
      'getLoginStatus', // 获取登录状态
      'login', // 登录
      'logout', // 注销
      'twiceAuth', // 二次鉴权
      'getCityArea', // 选择市区
      'callPhoneContacts', // 调用手机通讯录
      'openNewPage', // 打开新页面
      'closePage', // 关闭页面
      'setPageTitle', // 设置页面标题
      'jumpNative', // H5 跳转 Native 页面
      'toggleShare', // 切换分享按钮显示、隐藏状态
      'share', // 分享
      'qrScan', // 扫一扫
      'getrsaencrypt', // rsa加密
      'toggleNavigationbar', // 切换导航栏显示、隐藏
      'getsha1sign', // sha1 签名
      'getxssign', // 获取 xs 签名串
      'callalipay', // 支付能力接口- 支付宝
      'openClosePullRefresh', // 打开关闭 webview 下拉刷新功能
      'getcookie', // 获取客户端内ua上的 cookie
      'errorcodealert', // 错误弹窗
      'gotoHomePage', // 返回客户端首页
      'getContactByNumbers' // 获取通讯录手机号姓名
    ]
  } else if (isCMCC) {
    // 手厅
    businessNames = [
      "userStatus", // 获取用户登录状态
      "checkSessionIsvalid", // 新登录状态接口（会话校验）--V4.0新增
      "getUserInfo", // 获取用户基础信息
      "getCallDetail", // 获取详单数据
      "qrScan", // 直接进入扫一扫功能
      "getContacts", // 调用手机通信录
      "sendSMS", // 调用系统发短信功能
      "getContactName", // 获取通信录联系人姓名
      "newWebview", // 打开新页面
      "playSound", // 手机振动
      "getNetStatus", // 获取网络状态
      "pickPhoto", // 调用照相机
      "callPhone", // 拨打手机电话
      "goNativePage", // H5调用native功能页面
      "getUserMarketInfo", // 查询用户营销活动信息
      "getImei", // 获取 IMEI
      "enableShared", // 是否显示分享按钮
      "shareMessage", // 分享功能
      "payHistory", // 查询交费历史
      "getOCR", // 扫描充值卡密码(OCR)
      "searchBizHall", // 查询实体营业厅
      "nearBizHall", //  附近营业厅
      "encryptString", // 加密功能
      "newGuide", // 新手引导
      "giveMeScore", // 给我评分
      "checkVersion", // 版本检测
      "showAuthentication", // 调用二次鉴权,说明：用户需要操作敏感用户信息时，需要进行二次鉴权操作
      "getContactAll", // 获取通信录信息,说明：获取通信录中所有人的手机号码和姓名
      "setWaterFlowerState", // 通知客户端浇花签到状态
      "savePhoto", // 保存图片到相册
      "digitalSignature", // 网络请求体数字签名
      "showLogin", // 调用登录接口
      "getNewPay", // 拉起统一支付
      "setTitle", // 设置webView标题-V3.8新加
      "assistiveControl", // 二级页面情感化插件-V3.8新加
      "showNavBackAndCloseBtn", // 导航栏返回及关闭按钮的显示状态-V3.8新加
      "getCatchInfo", // 客户端信息采集-V3.8新加
      "closeCurrentWebView", // 关闭当前webview-V3.8新加
      "cleanCache", // 清除缓存webview-V3.8新加
      "navigationColorSetting", // 设置导航栏颜色 -V4.0新增
      "getClientApplicationList", // 获得本机所有应用的列表（-V4.0新增，只有安卓有这能力）
      "openApplication", // 打开应用（-V4.0新增，只有安卓有这能力）
      "downloadApplication", // 调用下载（-V4.0新增）
      "startPlugin", // 调起客户端插件（V4.0新增）
      "backToRootView", // 用于任意二级页面返回一级页面 -V4.1新增
      "overTime", // 会话超时处理接口--V4.0新增,
      "tollSingle", // 单点统计 -V4.1新增
      "mainPageUpdate", // 首页刷新 -V4.1新增
      "imagesShare", // 多图分享 -V4.1新增
      "quitLogin", //  注销登录 -V4.1新增
      "voiceRecognizer", // 设定是否支持语音识别，在键盘弹出时提供入口 -V4.2新增
      "showNavCloseBtn", // 导航栏关闭按钮的显示状态-V4.3新加
      "showNavBackBtn", // 导航栏返回按钮的显示状态-V4.3新加
      "getIDMPLoginToken" // 获取一键登录token
    ]
  }


  businessNames.forEach(function (businessName) {
    leadeon[businessName] = function (options) {
      leadeon.callNative(options, businessName)
    }
  })

  window.leadeon = window.leadeon || leadeon
})()
