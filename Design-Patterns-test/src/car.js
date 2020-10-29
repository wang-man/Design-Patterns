class Car {
  constructor(plate, name){
    this.plate = plate;
    this.name = name;
  }
}

class Kuaiche extends Car{
  constructor(plate, name){
    super(plate, name);
    this.price = 1;
  }
}

class Zhuanche extends Car{
  constructor(plate, name){
    super(plate, name);
    this.price = 2;
  }
}

// 行程类
class Trip{
  constructor(car){
    this.car = car;
  }
  start(){
    console.log(`行程开始，车名是${this.car.name}，车牌是${this.car.plate}`);
  }
  end(){
    console.log(`行程结束，价格是${this.car.price * 5}`);
  }
}


const car1 = new Kuaiche('鄂A99999', '梅赛德斯');

const trip1 = new Trip(car1);

trip1.start();
trip1.end();


const car2 = new Zhuanche('鄂ACCCCC', '劳斯莱斯');

const trip2 = new Trip(car2);

trip2.start();
trip2.end();