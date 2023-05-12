const fs = require("fs")
const chalk = require("chalk")

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  debugger

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    })

    saveNotes(notes)
    console.log(chalk.green.bold("New note added!"))
  } else {
    console.log(chalk.blue.bold.italic(" Note title taken!"))
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json")
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"))
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red.inverse("No note found!"))
  }
}

const listNotes = (title) => {
  const notes = loadNotes()
  console.log(chalk.inverse("Your notes"))

  notes.forEach((note) => {
    console.log(
      chalk.green.bold(note.title) + "  " + chalk.yellow.italic(note.body)
    )
  })
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse("Note not found!"))
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
}
