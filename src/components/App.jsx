import { Component } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { Box } from './Box';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.length > 0) {
      const lsItems = JSON.parse(localStorage.getItem('contact'));
      this.setState({ contacts: lsItems });
    } else {
      this.setState(prevState => ({
        contacts: prevState.contacts,
      }));
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }

  handleFilterChange = e => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });
  };

  filterContactList = () => {
    const { contacts, filter } = this.state;
    const validFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(validFilter)
    );
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;
    const findName = contacts.find(
      contact => contact.name === data.name.trim()
    );

    if (!findName) {
      this.setState(prevState => ({
        contacts: [data, ...prevState.contacts],
      }));
    } else {
      return alert(`${findName.name} is already in contacts.`);
    }
  };

  render() {
    const {
      handleDeleteContact,
      handleFilterChange,
      filterContactList,
      formSubmitHandler,
    } = this;
    const { filter } = this.state;

    return (
      <Box padding={5}>
        <Section title="Phonebook">
          <Form onSubmit={formSubmitHandler} />
        </Section>

        <Box
          as="div"
          display="inline-block"
          width="400px"
          padding={4}
          margin-top={6}
        >
          <Section title="Contacts">
            <Filter inputValue={filter} onChange={handleFilterChange} />

            <ContactList
              onFilter={filterContactList()}
              onDelete={handleDeleteContact}
            />
          </Section>
        </Box>
        <GlobalStyles />
      </Box>
    );
  }
}
