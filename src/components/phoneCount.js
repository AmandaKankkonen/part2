import React from 'react'

class PhoneCount extends React.Component{

    render(){
        var phonebookapp = {
            title: 'Superadvanced web phonebook app',
            contacts: [
            {
              name: 'John Doe',
              phonenumber: '358401234567'
            },
            {
              name: 'Jane Doe',
              phonenumber: '44551234567'
            },
            {
              name: 'Foo bar',
              phonenumber: '000'
            }
            ]
          };

        var result = phonebookapp.contacts.length;
        return(
            <div>
                <h4>Number of Contacts: { result }</h4>
            </div>
        )
    }
    
}

export default PhoneCount;