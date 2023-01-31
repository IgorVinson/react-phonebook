import { Component } from 'react';
import './ContactList.module.css';

export class ContactList extends Component {
  render() {
    const { deleteContact, contacts } = this.props;
    return (
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name} {contact.number}
            <button onClick={() => {
              deleteContact(contact.id);
            }}> ❌
            </button>
          </li>

        ))}
      </ul>
    );
  }
}
