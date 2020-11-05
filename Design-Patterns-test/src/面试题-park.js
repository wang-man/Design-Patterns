


// 车
class Car {
  constructor(plate) {
    this.plate = plate;
  }
}


// 显示屏
class Screen {
  constructor(car) {
    this.plate = car.plate;
  }
  // 展示车辆进入信息
  showEnter() {
    console.log('车牌号：', this.plate);
    console.log('进入时间：', Date.now());
    this.enterTime = Date.now();        // 这里需要存储进入时间
  }
  // 展示车辆驶出信息
  showOut() {
    console.log('车牌号：', this.plate);
    console.log('驶出时间：', Date.now());
    console.log('停留时间：', Date.now() - this.enterTime, '小时');
  }
}


// 停车场
class Park {
  constructor(floors) {
    this.floors = floors || [];   // 所有的层及内部车位
    this.carsInfo = {};
    this.usingPlaces = {};
  }
  // 车辆驶入
  in(car) {
    const screen = new Screen(car);   // 进入一辆车，显示屏实例化一次
    this.carsInfo[car.plate] = screen;    // 根据车牌号存储每辆进入的车的入场信息，这样出去的时候可读取进入时间
    screen.showEnter();
    const number = parseInt(Math.random() * 100);  // 随机停车位
    const index = parseInt(Math.random() * 10) % 3;  // 随机层
    this.usingPlaces[car.plate] = this.floors[index].places[number];  // 获取被停的车位
    this.usingPlaces[car.plate].in();   // 占掉这个车位
  }
  // 车辆驶出
  out(car) {
    this.carsInfo[car.plate].showOut();   // 车辆驶出
    this.usingPlaces[car.plate].out();   // 空出这个车位
  }
  // 显示出停车场每层的空车位
  emptyNum() {
    this.floors.forEach(f => {
      console.log(`${f.index}层有${f.emptyPlaceNum()}个空车位`)
    });
  }
}

// 层
class Floor {
  constructor(index, places) {
    this.index = index;
    this.places = places;
  }
  // 算出空的车位
  emptyPlaceNum() {
    let num = 0;
    this.places.forEach(p => {
      if (p.empty) {
        num++;
      }
    });
    return num;
  }
}

// 车位
class Place {
  constructor() {
    this.empty = true;
  }
  in() {
    this.empty = false;
  }
  out() {
    this.empty = true;
  }
}




// 初始化停车场及每次车位

const floors = [];


for (let i = 0; i < 3; i++) {   // 每层
  let places = [];
  for (let j = 0; j < 100; j++) {
    places[j] = new Place();        // 关键的，实例化车位
    
  }
  floors[i] = new Floor(i, places);    // 停车场层及内部车位
}

const park = new Park(floors);   // 一个停车场，放入层和车位

const car1 = new Car('12345');
const car2 = new Car('67890');
const car3 = new Car('54321');
const car4 = new Car('09876');

console.log('\n第一辆车即将进入');
park.emptyNum();
park.in(car1)

console.log('\n第二辆车即将进入');
park.emptyNum();
park.in(car2)

console.log('\n第三辆车即将进入');
park.emptyNum();
park.in(car3)

console.log('\n第一辆车驶出');
park.out(car1)
console.log('park.carsInfo:', park.carsInfo);
console.log('park.usingPlaces:', park.usingPlaces);

console.log('\n第四辆车即将进入');
park.emptyNum();
park.in(car4)



// 这个题目的要点是区分出哪些实体：唯一的停车场，3个层，每层的100车位，显示器显示信息，n个车。所有的车位都有一个empty属性代表它是否空的，根据它通过遍历所有的车位，就能算出空的车位数。每辆车进入停车场，park触发in函数，in函数做以下事情：实例化出来一个显示器打印车辆入场信息，并将之记录在park中的carsInfo。然后将被占据车位的empty置为false来更新车位信息，并将这个车位也存储起来，在usingPlaces。车辆驶离时，park中的out函数做以下事情：查出carsInfo中的这辆车，打印离场信息，在usingPlaces中找到这个车位，将其释放。