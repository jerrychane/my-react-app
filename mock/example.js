
module.exports = {
  // 默认get请求
  '/api/getInfo': {
    name: '张三',
    age: 28
  },
  // 消息设置测试数据
  '/message-platform-web/user/staff/search': {
    "status": 1,
    "data": {
      "totalPages": 1,
      "currentPage": 1,
      "pageSize": 12,
      "values": [
        {
          "userid": "9e06e79f-c2bb-4e36-8e93-7d02e6127551",
          "username": "kjnm2",
          "mobile": "15533366222",
          "email": ""
        },
        {
          "userid": "201a2fa2-c0a6-45c4-93d9-54dfd4e6650a",
          "username": "kjnm1",
          "mobile": "15533366221",
          "email": ""
        },
        {
          "userid": "9288f457-1d16-4b57-9f71-317505c8a79f",
          "username": "tester黄维达",
          "mobile": "17611649339",
          "email": "huangwda@yonyou.com"
        },
        {
          "userid": "579cfa22-b9ce-40ef-b72c-a0b92083d9d4",
          "username": "霍树成",
          "mobile": "17610387200",
          "email": "huoshch@yonyou.com"
        },
        {
          "userid": "fa31af04-9e99-453c-83a6-8191a6ef4ccc",
          "username": "李刚",
          "mobile": "18611868639",
          "email": "ligangz@yonyou.com"
        },
        {
          "userid": "01a27848-c5d2-4e34-a40d-5f8061991700",
          "username": "李慧",
          "mobile": "15298362530",
          "email": "YHT-924-8101563267484291@yht.com"
        },
        {
          "userid": "f700fc77-853e-4107-aea6-1014e2bc7793",
          "username": "短信账户勿赋权限",
          "mobile": "19471888888",
          "email": "YHT-981-8061560135233491@yht.com"
        },
        {
          "userid": "19757d5a-84f1-48b6-8498-363529c5cb4d",
          "username": "aasaa",
          "mobile": "15533344772",
          "email": ""
        },
        {
          "userid": "7353b7b3-71b5-4470-afe7-5eb2adf409af",
          "username": "李慧55",
          "mobile": "15298343455",
          "email": "333@qq.com"
        },
        {
          "userid": "16ce8920-7ba1-4630-b4ff-338d2243b690",
          "username": "李慧3",
          "mobile": "",
          "email": "1233@qq.com"
        },
        {
          "userid": "29f0c6bc-6bde-4d75-9e40-b76a3de36962",
          "username": "swh002",
          "mobile": "18322094243",
          "email": ""
        },
        {
          "userid": "1c6886c8-f6f4-49ad-893f-2c498f775d74",
          "username": "19903488888",
          "mobile": "19903488888",
          "email": ""
        }
      ]
    }
  },
  // 指定请求方式为post
  'post /api/changeInfo': {
    message: 'success',
    status: 0
  },
  // 可以写成function的形式，从而可以根据请求参数定制响应数据
  '/api/getOrder': function (res) {
    //res.query  获取get请求参数
    //res.body   获取post请求参数
    return {
      orderId: 1214124124,
      price: Math.random(),
      userName: fns => fns.str(2, 4)    // 如果启用了内置mock，依然可以使用内置mock函数
    }
  },
  // 也可以转发url到指定的服务器
  "/v2/movie/top250": "https://api.douban.com/",

  // 如果没关闭内置的mock解释器，可以这样使用：
  // 更多用法参见插件说明
  '/api/mock/parse/test': {
    "data|10": [{
      "id": "@inc(10000)",
      "age|18-30": 0,
      "name": "@cstr(2,4)",
      "desc": "@cparagraph",
      "a|1": ["张三", "李四", "王五"]
    }]
  },
  // 开启内置mock解析的时候，对象值也可以是一个函数，函数的参数是一个包含所有内置函数的对象
  // 函数形式调用可以解决 {id:"@inc(100)"} 这样占位函数永远只能返回字符串类型的问题
  '/api/mock/parse/testfns': {
    "data|10": [{
      "name": "@cstr(3)",
      "id": mock => mock.inc(100),
      "rnd": () => Math.random()
    }]
  }

  //内置mock解析语法参考了mock.js，不能与其同时使用
  //若需要使用mock.js，需要在设置里面将EasyMock.mockParse项设置为false
  //mock.js文档参考 http://mockjs.com/examples.html
}
