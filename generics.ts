// Exercise 1
interface Person {
  firstName: string;
  lastName: string;
}

function firstElement<Papa>(arr: Papa[]) {
  return arr[0];
}

const numbersArray = [1, 2, 3];
const stringsArray = ["Hola", "como", "estas"];
const personArray = [{ firstName: "Ignacio", lastName: "Sanhueza" }];

const firstNumber = firstElement(numbersArray);
const firstChar = firstElement(stringsArray);
const firstPerson = firstElement<Person>(personArray);

// Exercise 2
class List<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }
}

const numberList = new List<number>();
numberList.push(1);

// Exercise 3
function map<T, U>(arr: T[], transform: (item: T) => U): U[] {
  const result: U[] = [];
  for (const item of arr) {
    result.push(transform(item));
  }
  return result;
}

// Example usages:
const numbers = [1, 2, 3];
const squares = map(numbers, (num) => num * num); // returns [1, 4, 9]

const strings = ["hello", "world"];
const uppercased = map(strings, (str) => str.toUpperCase()); // returns ['HELLO', 'WORLD']
