import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ItemStyle, ListStyle } from './ContactList.styled';

export const ContactList = ({ onFilter, onDelete }) => {
  return (
    <ListStyle>
      {onFilter.map(({ name, number, id }) => {
        return (
          <ItemStyle key={id}>
            <ContactItem onDelete={onDelete} contact={{ name, number, id }} />
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

ContactList.propTypes = {
  onFilter: PropTypes.arrayOf(PropTypes.object),
};
