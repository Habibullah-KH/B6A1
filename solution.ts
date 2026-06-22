type Value = string | number | boolean;
const formatValue = (value: Value) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

const getLength = <T extends {length: number}>(value: T): number => {
return value.length;
}


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  getDetails(): {Name: string; Age: number} {
    return {
      Name: this.name,
      Age: this.age
    }
  }
}

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());