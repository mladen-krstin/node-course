const fs = require("fs");

//* CREATING DATA

// const book = {
//   title: "Ego is the Enemy",
//   author: "Rayan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parseData = JSON.parse(bookJSON);
// console.log(parseData.author);

//* WRITING DATA TO FILE

// fs.writeFileSync("1-json.json", bookJSON);

//* READING DATA FROM FILE

// const dataBuffer = fs.readFileSync("1-json.json");

//* CONVERTING DATA INTO USABLE DATA

// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data.title);

//* Challange: Work withJSON and the file system
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file

const loadedData = fs.readFileSync("1-json.json");
const dataJSON = loadedData.toString();
const user = JSON.parse(dataJSON);

user.name = "Mladen";
user.age = 45;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);

const newData = fs.readFileSync("1-json.json");
console.log(newData.toString());
