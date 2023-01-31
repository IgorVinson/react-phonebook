import { Component } from 'react';
import { Form } from './Form';
import { nanoid } from 'nanoid';
import './app.module.css';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const id = nanoid();
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { name, id }],
    }));
    form.reset();
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <div className='App'>
        <Form name={name} handleChange={this.handleChange} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
};
