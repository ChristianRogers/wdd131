nums = [14, 25, 3, 1];
console.log(nums.sort());

const simpleList = ["banana", "apple", "cherry", "date"];
console.log(simpleList.sort());

let lowerlist = simpleList.map((item) => item.toLowerCase());
console.log(lowerlist.sort());

//filter
let searchTerm = "an";
let filterFruit = lowerlist.filter(SearchFruit);

function SearchFruit(fruit) {
  return fruit.includes(searchTerm);
}

console.log(filterFruit);

function compareFN(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

const products = [
  { productName: "Wireless Mouse", price: 29.99 },
  { productName: "Bluetooth Keyboard", price: 49.99 },
  { productName: "Laptop Stand", price: 39.99 },
];

console.log(products.sort(compareFN));

const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"],
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"],
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"],
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"],
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"],
  },
];

let query = "dog";

let filteredAnimals = animals.filter(searchAnimals);

function searchAnimals(animal) {
  return animal.name.toLowerCase().includes(query.toLowerCase());
}

console.log(filteredAnimals);

queryTrait = "cuddly";

let filteredTraits = animals.filter(searchTraits);
function searchTraits(animal) {
  return animal.traits.find((trait) =>
    trait.toLowerCase().includes(queryTrait.toLowerCase())
  );
}

console.log(filteredTraits);
