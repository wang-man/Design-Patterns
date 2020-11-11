export function log(type) {
  return function (target, name, descriptor) {

    // oldValue是啥？oldValue是addToCartHandle或deleteFromCartHandle这两个被装饰的函数
    let oldValue = descriptor.value
    console.log('oldValue', oldValue)
    console.log('name', name)
    console.log('descriptor', descriptor)

    descriptor.value = function () {
      console.log(`日志上报 ${type}`)
      console.log('this', this)
      console.log('arguments', arguments)
      return oldValue.apply(this, arguments)
    }

    return descriptor
  }
}