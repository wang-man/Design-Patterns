import $ from 'jquery'
import Statemachine from 'javascript-state-machine'
import getCart from '../shoppingCart/getCart'
import {log} from '../utils/log'

export default class Item {
  constructor(list, data) {
    this.list = list      // 列表实例对象
    this.data = data      // 项数据
    this.$el = $(`<div class='item'>`)
    this.cart = getCart()
  }

  // 初始化每项商品及按钮
  initItem() {
    this.$el.append(`<p>名称：${this.data.name}</p><p>价格：${this.data.price}</p>`)

    const $btn = $('<button>')

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
      ],
      methods: {
        // 加入购物车
        onAddToCart: () => {    // 这里得用箭头函数，不然下行this出问题
          this.addToCartHandle()
          $btn.text(fsm.state)
        },
        // 从购物车移除
        onDeleteFromCart: () => {
          this.deleteFromCartHandle()
          $btn.text(fsm.state)
        }
      }
    })

    
    this.$el.append($btn)
    $btn.text(fsm.state)      // 初始text
    
    $btn.on('click', function () {
      // 添加、删除
      // console.log(fsm)
      // 注意fsm.js是拿到的在每次状态变化之前的值，而不是之后。因此不要弄反addToCart()与deleteFromCart()
      if (fsm.is('加入购物车')) {
        fsm.addToCart()      // 注意调用methods时不用加on
      } else {
        fsm.deleteFromCart()
      }

    })
  }

  // 添加到购物车
  // 日志log为什么要以装饰器的方式使用。因为添加购物车及从购物车删除商品这两个操作属于前台的业务，而日志属于后台功能，写法上不应该混在同一个方法里，这样业务就区分不够清晰，界限不够分明。因此将log功能单独定义，以装饰addToCartHandle函数的方式使用。
  @log('add')                 // log装饰器
  addToCartHandle() {
    this.cart.add(this.data)
  }

  // 从购物车删除
  @log('del')
  deleteFromCartHandle() {
    this.cart.del(this.data.id)
  }

  // 将本item插入到list即可
  render() {
    this.list.$el.append(this.$el)
  }

  init() {
    this.initItem()
    this.render()
  }
}