class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    toString() {
      return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Example usage:
  const myCircle = new Circle();
  console.log(myCircle.toString()); // Output: Circle[radius=1, color=red]
  
  myCircle.setRadius(2.5);
  myCircle.setColor("blue");
  console.log(myCircle.toString()); // Output: Circle[radius=2.5, color=blue]
  
  console.log(`Area: ${myCircle.getArea()}`);
  console.log(`Circumference: ${myCircle.getCircumference()}`);
  