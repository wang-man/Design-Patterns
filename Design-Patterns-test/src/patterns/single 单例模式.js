class SingleObject {
  login (){
    console.log('login....');
  }
}

// 静态方法
SingleObject.getInstance = (function(){
  let instance;    // 闭包内的变量，将被闭包
  // 闭包函数
  return function () {
    if (!instance) {
      console.log(1);                   // 发现只会打印一次，说明new SingleObject()永远只执行一次，系统里只会有一个实例
      instance = new SingleObject();    // 1.被唯一使用。2.这个类只会有一个实例，不管getInstance调用多少次
    }
    return instance;  // 返回SingleObject的一个实例
  }
})();  // 立即执行，所以getInstance等同于内部返回的函数

let obj1 = SingleObject.getInstance();    // SingleObject的实例
obj1.login();

let obj2 = SingleObject.getInstance();    // 同上一个实例
obj2.login();

console.log('obj1 === obj2', obj1 === obj2);