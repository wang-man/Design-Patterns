import $ from 'jquery'
import Statemachine from 'javascript-state-machine'
import getCart from '../shoppingCart/getCart'

export default class Item {
  constructor(list, data){
    this.list = list      // 列表实例对象
    this.data = data      // 项数据
    this.$el = $('<div>')
    this.cart = getCart()
  }

  // 初始化每项商品及按钮
  initItem(){
    this.$el.append(`<p>名称：${this.data.name}</p><p>价格：${this.data.price}</p>`)
    
    const $btn = $('<button>加入购物车</button>')
    this.$el.append($btn)

    const _this = this
    const fsm = new Statemachine({
      init: '加入购物车',
      transitions: [
        {
          name: 'addToCart',
          from: '加入购物车',
          to: '从购物车移除'
        },
        {
          name: 'deleteFromCart',
          from: '从购物车移除',
          to: '加入购物车'
        }
      ]
    })

    $btn.on('click', function () {
      // 添加、删除
    })
  }

  // 添加到购物车
  addToCart(){
    this.cart.add(this.data)
  }
  // 从购物车删除
  deleteFromCart(){
    this.cart.del(this.data.id)
  }

  // 将本item插入到list即可
  render(){
    this.list.$el.append(this.$el)
  }

  init(){
    this.initItem()
    this.render()
  }
}