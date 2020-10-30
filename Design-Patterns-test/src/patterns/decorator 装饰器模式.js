class Circle {
  draw(){
    console.log('画一个圆')
  }
}


class Decorator{
  constructor (circle){
    this.circle = circle;
  }

  draw(){
    this.circle.draw();   // 仍保留传入的draw方法
    this.setBorderColor()
  }
  setBorderColor(){
    console.log('给圆设置边框颜色')
  }
}


const circle = new Circle()

const decorator = new Decorator(circle)

decorator.draw();