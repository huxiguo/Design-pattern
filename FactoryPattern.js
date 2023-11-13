// 简单工厂模式

// 基类
class Shape {
  say() {
    console.log(this.name);
  }
}

// 长方形
class Rectangle extends Shape {
  constructor() {
    super()
    this.name = 'Rectangle'
  }
}

// 正方形
class Square extends Shape {
  constructor() {
    super()
    this.name = 'Square'
  }
}

// 圆形
class Circle extends Shape {
  constructor() {
    super()
    this.name = 'Circle'
  }
}

// 工厂
class ShapeFactory {
  getShape(shapeType) {
    switch (shapeType.toLowerCase()) {
      case 'square':
        return new Square()
      case 'rectangle':
        return new Rectangle()
      case 'circle':
        return new Circle()
      default:
        throw new Error('参数错误')
    }
  }
}

const shapeFactory = new ShapeFactory()

const rectangle = shapeFactory.getShape('rectangle')
rectangle.say()

const square = shapeFactory.getShape('square')
square.say()

const circle = shapeFactory.getShape('circle')
circle.say()