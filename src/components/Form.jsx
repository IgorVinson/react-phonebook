import { Component } from 'react';
import './Form.module.css';

export class Form extends Component{

  render(){

    const { handleChange } = this.props;
    return(
      <>
      <h2>Name</h2>
      <form onSubmit={(e)=>handleChange(e)}>
      <input type="text"
             name="name"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required/>
      <button type="submit" >Add</button>
    </form>
      </>
    )
  }
}
