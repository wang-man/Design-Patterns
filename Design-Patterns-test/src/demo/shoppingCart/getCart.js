
class Cart{
  constructor(){
    this.list = []
  }

  add(item){
    this.list.push(item)
  }

  del(id){
    this.list = this.list.filter(item =>{
      return item.id !== id
    })
  }

  // 购物车内列表
  getList(){
    return this.list.map(item =>{
      return item.name
    }).join('\n')
  }

}

// 返回购物车单例
const getCart = (function () {
  let cart
  return function () {
    if (!cart) {
      cart = new Cart()
    }
    return cart
  }
})()

// 此模块导出的是购物车实例
export default getCart