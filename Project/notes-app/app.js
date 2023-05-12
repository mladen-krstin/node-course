const validator = require("validator")
const chalk = require("chalk")
const yargs = require("yargs")
const notes = require("./notes")

// const msg = getNotes();
// console.log(msg);

// console.log(validator.isEmail("mladen.krstin@gmail.com"));
// console.log(chalk.bold.green.inverse(validator.isURL("gmail.com")));
// console.log(chalk.green.bold.italic("Success!"));
// console.log(chalk.red.bold("Error!"));

// const command = process.argv[2];
// console.log(process.argv)

// if (command === "add") {
//   console.log("Adding note!");
// } else if (command === "remove") {
//   console.log("Removig note!");
// }

// Customize yargs version

yargs.version("1.1.0")

// add, remove, read, list
// Create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  },
})

// Create remove command

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title)
  },
})

// Create list command

yargs.command({
  command: "list",
  describe: "Print a note",
  handler() {
    notes.listNotes()
  },
})

// Create read command

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title)
  },
})

// console.log(yargs.argv);
yargs.parse()
