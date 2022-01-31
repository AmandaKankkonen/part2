import React, { Component } from 'react';

class ReminderApp extends Component {
      
    constructor(){
        super();
        
        this.state={
            note:"",
            date:"",
            noteBook:[
              /*{
                name: 'John Doe',
                number: '358401234567',
                id: 1
              },
              {
                name: 'Jane Doe',
                number: '44551234567',
                id: 2
              },
              {
                name: 'Foo bar',
                number: '000',
                id: 3
              }*/  ],
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
      
      let form=null;
      if(this.state.showForm)
      {
          form=
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
      }
           
    return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
        <div className="App">
        <h2 className="header">Reminders</h2>
        <span style={{cursor:"pointer",color:"blue",textDecoration:"underline"}} onClick={this.toggleShowForm}>Create New Reminder</span>
            
        {form}
        
        {this.state.noteBook.map(contact =>
           <div className="contacts">
           <h5>{contact.note}</h5>
           <p>{contact.date}</p>
           <hr/>
          </div>
        )} 
        </div>
        </div>
        
        
     <div className="col-md-4"></div>
     </div>
     </div>
    );
  }
}

export default ReminderApp