import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormStyle, BtnStyle, Label, Input } from './Form.styled';

export class Form extends Component {
  static propType = {
    onSubmit: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
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

    this.props.onSubmit(contact);
    this.reset();
  };

  render() {
    const { name, number } = this.state;
    const { onSubmit, onChange } = this;

    return (
      <FormStyle onSubmit={onSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onChange}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.onChange}
          />
        </Label>
        <BtnStyle type="submit">Add contact</BtnStyle>
      </FormStyle>
    );
  }
}
