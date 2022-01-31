import React, { Component } from 'react';

class ReminderApp extends Component {
      
    constructor(){
        super();
        
        this.state={
            note:"",
            date:"",
            noteBook:[
    /* {
          "note": "Buy some eggs",
          "time": "2021-11-10T13:00:00.141Z",
          "id": 1
        },
        {
          "note": "Make an omelette",
          "time": "2021-11-11T08:00:00.141Z",
          "id": 2
        },
        {
          "note": "Wash dishes",
          "time": "2021-11-11T09:00:00.000Z",
          "id": 3
        },
        {
         "note": "Buy more eggs",
          "time": "2021-11-11T13:00:00.000Z",
          "id": 4
        }
    */  ],
            showForm:false
           }
        
        this.handleInputChange1=(event)=>{
            this.setState({
                note:event.target.value
            })
        }
        
        this.handleInputChange2=(event)=>{
            this.setState({
                date:event.target.value
            })
        }
        
        this.addContact=()=>{
            
            const newReminder={
                note:this.state.note,
                date:this.state.date         
            }
            
            if(this.state.note==="" || this.state.date==="")
            {
                alert('Both fields are required.');
                return;
            }
                 
            this.setState( (prevState)=>({
                noteBook:prevState.noteBook.concat(newReminder),
                 note:"",
                date:""
            })) 
                       
        }
        
        this.toggleShowForm=()=>{ 
            this.setState(
                { showForm: !this.state.showForm}
            )
        }                             
    }

  render() {
      
     
         let form=
             (  
              <div className="container">
              <form className="form">
              <div class="form-group">
                <input type="text" className="form-control" onChange={this.handleInputChange1} value={this.state.note} placeHolder="Subject" />
              </div>
              <div class="form-group">
                <input type="text" className="form-control" onChange={this.handleInputChange2} value={this.state.date} placeHolder="Date"/>
              </div>
              <button type="button" className="btn btn-primary" onClick={this.addContact}>Add Reminder</button>
            </form>
              </div>
          )
      
           
    return (

        <div className="App">
        <h2 className="header">Reminders:</h2>  
        {form}
        {this.state.noteBook.map(reminder =>
           <div className="reminders">
           <h5>{reminder.note}</h5>
           <p>{reminder.date}</p>
           <hr/>
          </div>
        )} 
        </div>
    );
  }
}

export default ReminderApp