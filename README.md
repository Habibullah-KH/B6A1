# TypeScript-এ Interface এবং Type-এর পার্থক্য এবং `keyof` Keyword-এর ব্যবহার


## ১. TypeScript-এ Interface এবং Type-এর মধ্যে পার্থক্য

`interface` এবং `type`—দুটিই Object-এর Shape নির্ধারণ করতে পারে, তবে তাদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

### Interface

* মূলত Object-এর Structure বা Blueprint তৈরির জন্য ব্যবহৃত হয়।
* একই Interface একাধিকবার Declare করলে TypeScript সেগুলোকে Merge করে দেয় (Declaration Merging)।
* বড় Project-এ Object-এর Contract নির্ধারণের জন্য এটি বেশি ব্যবহৃত হয়।

**উদাহরণ:**

```typescript
interface User {
  name: string;
  age: number;
}
```

### Type

* শুধু Object নয়, Union, Tuple, Primitive Alias এবং Function Type তৈরির জন্যও ব্যবহার করা যায়।
* Declaration Merging সমর্থন করে না।
* জটিল Type তৈরি করতে এটি বেশি Flexible।

**উদাহরণ:**

```typescript
type ID = string | number;
```

## ২. TypeScript-এ `keyof` Keyword-এর ব্যবহার

`keyof` Keyword একটি Object Type-এর সকল Property-এর নামকে Union Type হিসেবে বের করে আনে। এর ফলে শুধুমাত্র desire Property Name ব্যবহার করতে পারি এবং Type Safe হয়।

### উদাহরণ

```typescript
interface User {
  name: string;
  age: number;
}

type UserKeys = keyof User;
```

এখানে `UserKeys` হবে:

```typescript
"name" | "age"
```

Function example:

```typescript
function getValue(user: User, key: keyof User) {
  return user[key];
}

const person: User = {
  name: "Habib",
  age: 22,
};

console.log(getValue(person, "name"));
console.log(getValue(person, "age"));
```

এখানে `keyof User` ব্যবহারের কারণে `"name"` এবং `"age"` ছাড়া অন্য কোনো Key পাঠানো যাবে না। যদি `"address"` পাঠানোর চেষ্টা করা হয়, তাহলে TypeScript Compile Time-এ Error দেখাবে।
