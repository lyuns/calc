const LinkList = require('./impl')

// 创建
const linkData = new LinkList([00, 11, 22, 33]);

console.log('linkData.toString:', linkData.toString())

// 添加
console.log('linkData.add(44)->index:', linkData.add(44))
console.log('linkData.toString:', linkData.toString())

// 插入
linkData.insert(22222, 2)
console.log('linkData.insert(22222, 2):', linkData.toString())

// 删除
linkData.del(3)
console.log('linkData.del(3):', linkData.toString())

// 查找
console.log('linkData.find(3):', linkData.find(3))