function getLength(str) {
  return str.length;
}

console.log("1.正在的代码执行");
console.log("2.开始函数");
getLength("abc"); // 正确的调用
getLength(); // 错误的调用

// 当上面的代码报错后, 后续所有的代码都无法继续正常执行了
console.log("3.调用结束");