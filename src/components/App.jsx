import { Component } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onChange = e => {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value,
    });
  };

  filter = () => {
    const { contacts, filter } = this.state;
    const validFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(validFilter)
    );
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  createContact = () => {
    return {
      id: nanoid(5),
      name: this.state.name,
      number: this.state.number,
    };
  };

  onSubmit = evt => {
    evt.preventDefault();
    const contact = this.createContact();
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    this.reset();
  };

  render() {
    const filteredArray = this.filter();
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.onChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.onChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <p>Contacts</p>
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.onChange}
          />
          <ul>
            {filteredArray.map(contact => {
              return (
                <li key={contact.id}>
                  {contact.name} : {contact.number}
                </li>
              );
            })}
          </ul>
        </div>
        <GlobalStyles />
      </>
    );
  }
}
