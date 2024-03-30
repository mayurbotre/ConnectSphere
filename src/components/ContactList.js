import {React} from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact)=>{
        const deleteContactHandler= (id) => {
            props.getContactId(id);
        }; 
        return (
            <ContactCard contact={contact} onClickHandler={deleteContactHandler}  key={contact.id}></ContactCard>
            )
    })

    
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
}

export default ContactList;