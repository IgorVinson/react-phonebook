import { Component } from 'react';

export class ContactList extends Component{
  render() {
    const { contacts } = this.props;
    return(
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    )
  }
}
