import { React } from 'react';
import user from "../images/user.png"

const ContactCard = (props) => {
    const { id, name, email, phone } = props.contact
    return (
        <div className='item' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <img src={user} alt="user" className='ui avatar image'></img>
            <div className='content'>
                <div className='header' style={{ marginBottom: '5px' }}><label>Name: </label>{name}</div>
                <div style={{ marginBottom: '5px' }}><label>Email: </label> {email}</div>
                <div style={{ marginBottom: '5px' }}><label>Phone: </label> {phone}</div>
            </div>
            <i className='trash alternate outline icon' style={{ color: 'red', marginTop: '7xp' }} onClick={() => props.onClickHandler(id) }></i>
        </div>
    );
}

export default ContactCard;