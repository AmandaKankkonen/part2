import React from 'react'
import Contents from './Contents'
import PhoneCount from './phoneCount'
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

  return (
    <div>
      <PhoneHeader title={phonebookapp.title} />
      <Contents contacts={phonebookapp.contacts} />
      <PhoneCount />
    </div>
  )
}

export default Phonebook