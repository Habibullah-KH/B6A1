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
  return (`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable? "Yes" : "No"}`)
}

const getUniqueValues = <T>(arr1: T[], arr2: T[]) => {

  let i1 = arr1.length;
  let i2 = arr2.length;

  for(let i = 0; i <= i1; i++){
      for(let j = 0; j <= i2; j++){
       if(arr1[i] === arr2[j]){
        arr2.splice(j, 1)
       }
  }
  }
  return [...arr1, ...arr2];
}

interface Product {
name: string
price: number
quantity: number
discount?: number
}

const calculateTotalPrice = (value: Product[]) =>{

let disPrice:number;
let afterDisPrice: number = 0;
let tem:number;
let dis:number;
let sum: number = 0;
let totalPrice: number;
return value.reduce((acumulator, products)=>{

  tem = products.price * products.quantity;
  if(products.discount){
    dis = products.discount / 100;
    disPrice = tem*dis;
    afterDisPrice += tem - disPrice;
  }
  else if(!products.discount){
    sum += tem;
  }

  return acumulator = sum + afterDisPrice;
}, 0)

}
