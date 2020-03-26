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

// 将方法输出
module.exports = {
  converToStarsArray: converToStarsArray
}