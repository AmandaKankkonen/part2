import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'
//import Phonebook from './components/phonebook'
//import ClickCounter from './components/clickCounter'
//import Notification from './components/Notification'
//import ReminderApp from './components/reminderApp'

class App extends React.component {

  componentDidMount() {
    noteService
      .getAll()
      .then(response => {
        this.setState({ notes: response })
      })
  }

  addNote = (event) => {
    // ...
    noteService
      .create(noteObject)
      .then(newNote => {
        this.setState({
          notes: this.state.notes.concat(newNote),
          newNote: ''
        })
      })
  }

  toggleImportanceOf = (id) => {
    return () => {
      // ...

      noteService
        .update(id, changedNote)
        .then(changedNote => {
          const notes = this.state.notes.filter(n => n.id !== id)
          this.setState({
            notes: notes.concat(changedNote)
          })
        })
    }
  }
}
 export default App