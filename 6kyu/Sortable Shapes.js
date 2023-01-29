class Shape {
    constructor(area) {this.area = area}
    valueOf() {return Number(this.area)}
  }
  class Square extends Shape{constructor(side) {super(side * side)}}
  class Rectangle extends Shape{constructor(height, width) {super(height * width)}}
  class Triangle extends Shape{constructor(base, height) {super((base * height) / 2)}}
  class Circle extends Shape{constructor(radius) {super(radius * radius * Math.PI)}}
  class CustomShape extends Shape{constructor(area) {super(area)}}