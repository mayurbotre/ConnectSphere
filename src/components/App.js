import { React, useState, useEffect } from 'react';
import './App.css';
import Header from './Header'
import AddContact from './AddContact';
import ContactList from './ContactList';
import { uuid } from 'uuidv4';

function App() {

  const local_storage_key = "contacts";

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact)=>{
    setContacts([...contacts, { id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(()=>{
    const receiveContacts = JSON.parse(localStorage.getItem(local_storage_key));
    if(receiveContacts) setContacts(receiveContacts);
  }, []);


  useEffect(()=>{
    if(contacts?.length) {
      localStorage.setItem(local_storage_key, JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
      <div className="ui container">
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler}/>
      </div>
    
  );
}

export default App;
