import $ from 'jquery'

export default class App {
  constructor(id){
    this.$el = $(id)
  }

  init(){
    console.log(this.$el)
  }
}