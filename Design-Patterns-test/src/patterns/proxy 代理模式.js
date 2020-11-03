
// 加载真实的图片类
class ReadImg {
  constructor(fileName){
    this.fileName = fileName
    this.loadFromDisk()
  }

  loadFromDisk(){
    console.log('加载图片：' + this.fileName)
  }
  display(){
    console.log('展示图片：' + this.fileName)
  }
}


// 代理那个真实的图片类
class ProxyImg{
  constructor(fileName){
    this.reaLImg = new ReadImg(fileName)
  }

  // 代理ReadImg的实例的display方法
  display(){
    this.reaLImg.display()
  }
}


let proxyImg = new ProxyImg('小狗')
proxyImg.display()
