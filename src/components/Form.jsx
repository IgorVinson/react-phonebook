import { Component } from 'react';
import './Form.module.css';

export class Form extends Component {

  render() {

    const { name, handleChange } = this.props;
    return (
      <>
        <form onSubmit={(e) => handleChange(e)}>
          <h2>Name</h2>
          <input type='text'
                 name='name'
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required />
          <h2>Number</h2>
          <input type='tel'
                 name='number'
                 pattern='^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
                 title='Number must be in format 000-00-00'
                 required />
          <button type='submit'>Add</button>
        </form>
      </>
    );
  }
}
