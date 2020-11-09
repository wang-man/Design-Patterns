import $ from 'jquery'
import getCart from './getCart'

export default class ShoppingCart {
  constructor(app){
    this.app = app;
    this.$el = $(`<div class='cart'>`)

    this.cart = getCart()
  }

  initCart(){
    console.log('初始化购物车')

    const $btn = $(`<button>购物车</button>`) 
    $btn.on('click',  () => {
      alert(this.showCart())
    })

    this.$el.append($btn)
  }

  showCart(){
    // 返回购物车内的列表，调用cart里面的方法
    return this.cart.getList()
  }

  render(){
    this.app.$el.append(this.$el)
  }

  init(){
    this.initCart()
    this.render()
  }
}