function parseCount(string){
     
  let result = Number.parseFloat(string);
    if (Boolean(result) == false) {
      throw new Error("Невалидное значение")
  }
    return result;
}
      
function validateCount(string){
  let result1;
  try {
    result1 = parseCount(string);
  } catch (err) {
    return err;
  } 
  return result1;
}


class Triangle{
  constructor(a, b, c){
    this.a = a;  
    this.b = b;
    this.c = c;  

    if ((this.a + this.b) < this.c || 
    (this.a + this.c) < this.b || 
    (this.c + this.b) < this.a){
      throw new Error("Треугольник с такими сторонами не существует")
    }
  }
 
  
  get perimeter(){
        return this.a + this.b + this.c;
  }

  get area(){
    let p = this.a + this.b + this.c;
    let s = Math.sqrt(p/2 * (p/2 - this.a) * (p/2 - this.b) * (p/2 - this.c));
    return +s.toFixed(3);
    
  }
  
}

function getTriangle(a, b, c) {
  
  try {
        return new Triangle(a, b, c);
} catch (err) {
  console.log(err);  
  return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      }
    };
   
} 
}






