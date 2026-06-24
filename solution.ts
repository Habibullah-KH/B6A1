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

const getLength = <T extends { length: number }>(value: T): number => {
  return value.length;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): { Name: string; Age: number } {
    return {
      Name: this.name,
      Age: this.age,
    };
  }
}

type Books = {
  title: string;
  rating: number;
};

const filterByRating = (value: Books[]) => {
  return value.filter((data) => data.rating >= 4);
};

interface User {
  name: string;
  email: string;
}

interface UserIsActive extends User {
  isActive: true | false;
}

const filterActiveUsers = (value: UserIsActive[]) => {
  return value.filter((data) => data.isActive == true);
};

interface Book {
  title: string;
  author:string;
  publishedYear:number;
  isAvailable:boolean;
}

const printBookDetails = (value: Book) => {
  return console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable? "Yes" : "No"}`)
}



