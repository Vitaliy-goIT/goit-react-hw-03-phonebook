import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ onFilter, onDelete }) => {
  return (
    <ul>
      {onFilter.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <ContactItem onDelete={onDelete} contact={{ name, number, id }} />
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  onFilter: PropTypes.arrayOf(PropTypes.object),
};
