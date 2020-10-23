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


const car = new Kuaiche('鄂A99999', '梅赛德斯');

const trip = new Trip(car);

trip.start();
trip.end();