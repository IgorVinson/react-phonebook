import { Component } from 'react';
import { Form } from './Form';
import { nanoid } from 'nanoid';
import './App.module.css';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
    filter: '',
    name: '',
  };


  handleContactAdd = (evt) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();
    const contact = { id, name, number };

    if (this.doesExist(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));

    form.reset();
  };

  doesExist = (name) => {
    return this.state.contacts.some((contact) => contact.name === name);
  };

  searchContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleFilterChange = (evt) => {
    const search = evt.currentTarget.value;
    this.setState({ filter: search });
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className='App'>
        <Form handleChange={this.handleContactAdd} />
        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilterChange} />
        <ContactList deleteContact={this.deleteContact} contacts={!filter ? contacts : this.searchContacts()} />
      </div>
    );
  }
};
