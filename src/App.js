import React, { useState, useEffect } from 'react'
//import Note from './components/Note'
import noteService from './services/notes'
//import Phonebook from './components/phonebook'
//import ClickCounter from './components/clickCounter'
//import Notification from './components/Notification'
//import ReminderApp from './components/reminderApp'

class App extends React.Component {

  componentDidMount() {
    noteService
      .getAll()
      .then(response => {
        this.setState({ notes: response })
      })
  }

  addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: this.state.newNote,
      date: new Date(),
      important: Math.random() > 0.5
    }
  
    axios
      .post('http://localhost:3001/reminders', noteObject)
      .then(response => {
        this.setState({
          notes: this.state.notes.concat(response.data),
          newNote: ''
        })
      })
  }

  toggleImportanceOf = (id) => {
    return () => {
      const url = 'http://localhost:3001/reminders/${id}'
      const note = this.state.notes.find(n => n.id === id)
      const changedNote = { ...note, important: !note.important }
  
      axios
        .put(url, changedNote)
        .then(response => {
          this.setState({
            notes: this.state.notes.map(note => note.id !== id ? note : response.data)
          })
        })
    }
  }
}

 export default App