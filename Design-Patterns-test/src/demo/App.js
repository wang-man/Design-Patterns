import $ from 'jquery'
import ShoppCart from './shoppingCart/shoppingCart'
import List from './list/list'
// import './style/common.css'

export default class App {
  constructor(id){
    this.$el = $(id)
  }

  // 在这个init方法中初始化购物车和列表两个对象实例
  init(){
    this.initShoppingCart()
    this.initList()
  }

  // 初始化购物车
  initShoppingCart(){
    const shoppingCart = new ShoppCart(this)
    shoppingCart.init()
  }

  // 初始化商品列表
  initList(){
    const list = new List(this)
    list.init()
  }
}