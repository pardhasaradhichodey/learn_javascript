/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const laptop = {
  name: "Lenovo T14",
  processor: "AMD RYZEN 5",
  operatingSystem: "Windows 11",
  ram: 16,
  hardDiskType: "SSD",
  storageSpace: 512,
};
const waterBottle = {
  name: "RAW Water Bottle",
  color: "Red & Black",
  Quantity: 500,
  LidOpen: false,
};
const Box = {
  name: "pensBox",
  usedFor: "New Pens Storage",
  storageSize: 20,
  currentCount: 15,
};
const fruit = {
  name: "banana",
  color: "Yellow",
  state: "ripe",
};
const book = {
  name: "It Ends with us",
  Genre: "Romance",
  noOfPages: 425,
};
const table = {
  name: "Office Table",
  color: "black",
  inbuiltLamp: false,
  typeOfShelves: "both", //Open and closed
  numberOfOpenShelves: 3,
  numberOfClosedShelves: 3,
  items: {
    OnBase: [waterBottle, laptop],
    inShelf: {
      openShelf: [fruit,book],
      closedShelf: [Box],
    },
  },
};
