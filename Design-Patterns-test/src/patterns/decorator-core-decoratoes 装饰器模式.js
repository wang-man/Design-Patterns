// 这个文件展示的是decorator的专门使用库：core-decorators封装好的装饰器使用方法
import { readonly } from 'core-decorators';

class Person {
  @readonly
  name(){
    return '张三'
  }
}

const p = new Person()

console.log(p.name())

p.name = function () {
  
}