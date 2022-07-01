let fruit = {
  name: "apple",
  color: "red",
  price: 10,
  quantity: 10,
  description: "This is a fruit",
  isAvailable: true,
  isSoldOut: false,
  isExpired: false,
  isOnSale: false,
  isNew: true,
  isDiscounted: false,
  isFrozen: false,
  isEdible: true,
  isToxic: false,
};

console.log(fruit.name);
console.log(fruit["name"]);

let keys = Object.keys(fruit);
console.log(keys);

let values = Object.values(fruit);
console.log(values);

let entries = Object.entries(fruit);
console.log(entries);
