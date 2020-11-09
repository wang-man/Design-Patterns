// 这个例子要使用在webpack环境中，并且安装支持ES7的decorators语法插件

// 第一个使用示例-------------------------------------------------------
@testDec
class Demo {
  constructor(){
    
  }
}

function testDec(target) {
  target.isDec = true
}

console.log(Demo.isDec)




// 第二个使用示例---------------------------------------------------

function mixins(list) {
  return function (target) {    // 所有的装饰器都应该是一个函数，因为@mixins(Foo)执行了，所以需要在返回一个函数

    // 这一句的意思是，给目标类的原型添加list代表的属性或方法，因此target就被装饰了新的特性
    Object.assign(target.prototype, list)
  }
}

const Foo = {
  foo(){
    console.log('这是扩展方法')
  }
}

// 1.装饰Myclass
@mixins(Foo)
class Myclass {

}

// 2.Myclass的实例就有了foo方法
const obj = new Myclass();
obj.foo()
