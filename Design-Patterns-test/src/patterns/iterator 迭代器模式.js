class Iterator {
  constructor(container) {
    this.list = container.list
    this.index = 0
  }
  next() {
    if (this.hasNext()) {
      return this.list[this.index++]
    }
    return null
  }
  hasNext() {
    if (this.index >= this.list.length) {
      return false
    }
    return true
  }
}

class Container {
  constructor(list){
    this.list = list
  }
  // 生成迭代器
  getIterator(){
    return new Iterator(this)
  }
}
const container = new Container([1, 2, 3, 4])
const iterator = container.getIterator()  // 迭代器实例对象
while (iterator.hasNext()) {
  console.log(iterator.next())
}
