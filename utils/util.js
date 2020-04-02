// 判断评分星星数
function converToStarsArray (text) {

  // toString 用于将传递过来的参数转换为字符串类型，再使用substring 取得第一位的值
  let stars = text.toString().substring(0, 1)
  let star = text.toString().substring(1, 2);
  let arr = [];
  let arrLength = 0;



  for (let i = 0; i < stars; i++) {
    arr.push(1)
  }
  arrLength = arr.length
  if (arrLength < 5) {
    for (let i = 0; i < 5 - arrLength; i++) {
      if (i == 0 && parseInt(star) != 0) {
        arr.push(2)
      } else {
        arr.push(0)
      }
    }
  }
  return arr;
}

// 调用请求
function http (url, callBack) {
  // http方法里面还传递了一个callBack 方法。
  wx.request({
    url: url,
    header: { 'Content-type': 'json' },
    method: 'GET',
    dataType: 'json',
    success: (result) => {
      // $this.processDoubanData(result.data)
      callBack(result)
    }
  });
}

// 获取演员名字并且根据分隔符进行分隔
function getCastsName (data) {
  var p = [];
  for (const castsName of data) {
    p.push(castsName.name)
  }
  return p.join(' / ')
}

function setTitle (data) {
  if (data.length >= 6) {
    return data.substring(0, 6) + '...'
  } else {
    return data
  }
}


// 将方法输出
module.exports = {
  converToStarsArray: converToStarsArray,
  http: http,
  getCastsName: getCastsName,
  setTitle
}