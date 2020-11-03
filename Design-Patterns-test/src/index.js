// 这个文件展示的是decorator的专门使用库：core-decorators封装好的装饰器使用方法
// 这个文件的代码也需要在webpack环境下运行，否则无法编译decorator语法

import { readonly, deprecate } from 'core-decorators';

class Person {
  @readonly           // 只读装饰器
  name(){
    return '张三'
  }

  @deprecate('即将弃用', {url: 'https://www.npmjs.com/package/core-decorators'})   // 反对类的装饰器，警示不可用
  sayHi(){
    console.log('hello, decorator')
  }
}

const p = new Person()

console.log(p.name())

p.name = function () {
  
}

p.sayHi()