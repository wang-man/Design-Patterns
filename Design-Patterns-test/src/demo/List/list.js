import $ from 'jquery'
import { GET_LIST } from '../config/config'
import Item from './item'

export default class List {
  constructor(app) {
    this.app = app;
    this.$el = $(`<div class='list'>`)
  }


  loadData() {
    // 使用ES6支持的原生fetch方法
    return fetch(GET_LIST).then(res => {
      return res.json()
    })
  }

  render() {
    console.log(this.app)
    this.app.$el.append(this.$el)
  }

  init() {
    this.loadData().then(data => {

      data.forEach(itemData => {
        const item = new Item(this, itemData)
        item.init()
      })

      this.render()

    })
    console.log('初始化商品列表')
  }
}