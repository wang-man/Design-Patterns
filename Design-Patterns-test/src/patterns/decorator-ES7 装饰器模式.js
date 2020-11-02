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
    Object.assign(target.prototype, list)
  }
}

const Foo = {
  foo(){
    console.log('这是扩展方法')
  }
}

@mixins(Foo)
class Myclass {

}

const obj = new Myclass();
obj.foo()
