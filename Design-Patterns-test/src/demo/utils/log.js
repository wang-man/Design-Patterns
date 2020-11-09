export function log(type) {
  return function (target, name, descripter) {
    let oldValue = descripter.oldValue
    descripter.value = function () {
      console.log(`日志上报 ${type}`)

      return oldValue.apply(this, arguments)
    }

    return descripter
  }
}