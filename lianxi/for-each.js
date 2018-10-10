// 1. forEach方法
let arr = [1, 23, 44, 455, 11, 3, 5]
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
  // 编程式 支持return
}
arr.forEach(function (item) {
  console.log(item)
  // vue for-each 不支持return  声明式   为什么不用forin   因为他会把私有属性也遍历出来只能便利数组不能便利对象
})

// 2.filter   注： 删除用
// 是否操作原数组 不 返回结果：过滤后的新数组
// 回调函数的返回结果：如果返回true 表示这一项放到新数组中
let newArray = [12, 33, 1, 2, 45, 32].filter(function (item) {
  return item > 2 && item < 40
})
console.log(newArray)
// 3.map   注： 删除用
// 映射将原有的数组映射成一个新数组  不操作原数组返回新数组 回调函数中返回什么这一项就是什么
let arr1 = [1, 2, 3].map(function (item) {
  // return 2
  return '<li>${item}</li>'  //  '' 是es6的模板字符串 遇到变量用${}取值
})
console.log(arr1.join(''))
// 4.reduce 返回的是boolean  判断是不是私有属性
let arr2 = [1, 2, 3, 4, 55]
console.log(arr2.includes(4))
// 5. find() 返回找到的哪一项 不会改变数组 找到后停止循环 找不到返回undefind
let arr3 = [1, 2, 3, 4, 55].find(function (item, index) {
  return item.toString().indexOf(5) > -1
})
console.log(arr3)
// 6 some 找true 找到true后停止返回 true
// 6 every 找false 找到false后停止返回 false
// 7reduce 收敛 4个参数 返回叠加后的结果
// prev代表数组的第一项 next是数组的第二项  第二次prev是undefind next是第三项   本次返回值会作为下一次的prev
let arr4 = [1, 2, 3, 4, 55].reduce(function (prev, next, index, item) {
  console.log(arguments)
})
