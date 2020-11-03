// 主题，保存状态，状态变化之后触发所有的观察者对象
class Subject {
  constructor(){
    this.state = 0
    this.observers = []
  }
  getState(){
    return this.state
  }
  // state改变，触发通知
  setState(state){
    this.state = state
    this.notifyAllObservers()
  }
  // 通知到所有观察者
  notifyAllObservers(){
    this.observers.forEach(observer =>{
      observer.update()
    })
  }
  // 绑定新的观察者
  attach(observer){
    this.observers.push(observer)
  }
}

// 观察者
class Observer{
  constructor(name, subject){
    this.name = name
    this.subject = subject
    this.subject.attach(this)   // 初始化的时候就将自己作为观察者
  }
  update(){
    console.log(`${this.name}收到消息，状态变更为${this.subject.getState()}`)
  }
}


// 开始测试------

// 一个主题
const subject = new Subject()

// 订阅的人
const observer1 = new Observer('宋江', subject)
const observer2 = new Observer('卢俊义', subject)
const observer3 = new Observer('吴用', subject)

// 状态变更
subject.setState(1)

setTimeout(() => {
  console.log('状态、又变更了')
  subject.setState(2)
}, 1000);

