import React from 'react';
import axios from "axios"
import reminderService from './services/reminders'
//import React, { useState, useEffect } from 'react'
//import Note from './components/Note'
//import Phonebook from './components/phonebook'
//import ClickCounter from './components/clickCounter'
//import Notification from './components/Notification'
//import ReminderApp from './components/reminderApp'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [],
      newNote: '',
      newTime: ''
    }
  }

  componentDidMount() {
    console.log('Mounted')
    reminderService
      .getAll()
      .then(reminders => {
        this.setState({ reminders })
      })
  }

   addReminder = (event) =>{
       event.preventDefault()
       console.log("Add note")
       const newObject = {
        note: this.state.newNote,
        timestamp: this.state.newTime,
      } 
    axios
    .post('http://localhost:3001/reminders', newObject)
    .then(response => {
      this.setState({
        reminders: this.state.reminders.concat(response.data),
        newNote: '',
        newTime: ''
      })
    })
}

   handleNoteChange = (event) => {
    console.log(event.target.value)
    console.log("New note")
    this.setState({newNote: event.target.value})
   }

   handleTimeChange = (event) =>{
    console.log(event.target.value)
    console.log("New time")
    this.setState({newTime: event.target.value})
   }

   deleteReminder = (id) => {
    console.log("Delete/d note")
    return() => {
    const url = `http://localhost:3001/reminders/${id}`
    window.confirm("Are you sure you want to delete this reminder?") ?
     axios
     .delete(url):
     alert("Reminder was deleted.");
     (reminderService
      .getAll()
      .then(reminders => {
        this.setState({ reminders })
      }))
   } 
  }

  render() {
    return (
      <div>
        <h2><u>Add Reminder</u></h2>
        <form onSubmit={this.addReminder}>
        <div>
          <b>Subject:</b> <input value={this.state.newNote} onChange={this.handleNoteChange} />
        </div>
        <div>
          <b>Time:</b> <input value={this.state.newTime} onChange={this.handleTimeChange} />
        </div>
        <div>
          <button type="submit">Add Reminder</button>
        </div>
        </form>
        <h2>Reminders:</h2>
        {this.state.reminders.map(reminders => { return (
            <div key={reminders.id}>
              <p>{reminders.timestamp} {reminders.note} 
              <button onClick={this.deleteReminder(reminders.id)}>
                Delete
              </button></p>
            </div>  
        )})}
      
      </div>
      
    )
  }
}

 export default App