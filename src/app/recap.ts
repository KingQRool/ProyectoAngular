const username : string | number = 'Juan';
const sum = (a:number, b : number) => {
  return a + b
}
sum(1,3);

class Person {


    constructor(public age: number, public lastname : string){


  }
}

const Juan = new Person (15,'Rendon');
Juan.age;
