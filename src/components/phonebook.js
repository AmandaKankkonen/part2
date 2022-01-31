import React from 'react'
import Contents from './Contents'
import PhoneHeader from './phoneHeader'


const Phonebook = () => {
  
  const phonebookapp = {
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

  }

  var result = phonebookapp.contacts.length;

  return (
    <div>
      <PhoneHeader title={phonebookapp.title} />
      <Contents contacts={phonebookapp.contacts} />
      <h4>Number of Contacts: { result }</h4>
    </div>
  )
}

export default Phonebook