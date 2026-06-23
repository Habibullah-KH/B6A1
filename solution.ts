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


type Books = {
  title: string, rating: number
}

const filterByRating = (value: Books[]) => {
 return value.filter(data => data.rating >= 4);
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));