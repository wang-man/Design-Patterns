class Product{
  constructor(name){
    this.name = name
  }
  init(){
    console.log('init')
  }
  fun1(){
    console.log('fun1')
  }
  fun2(){
    console.log('fun2')
  }
}

class Factory {
  create(name){
    return new Product(name)
  }
}

const factory = new Factory();

const p1 = factory.create('p1');
const p2 = factory.create('p2');

p1.init();
p1.fun1();