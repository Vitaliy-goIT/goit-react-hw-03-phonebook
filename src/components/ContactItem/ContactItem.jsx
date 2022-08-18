import PropTypes from 'prop-types';
import { DelBtnStyle, TextStyle } from './ContactItem.styled';

export const ContactItem = ({ contact, onDelete }) => {
  const { name, number, id } = contact;
  return (
    <>
      <TextStyle>
        {name} : {number}
      </TextStyle>

      <DelBtnStyle
        onClick={() => {
          onDelete(id);
        }}
        type="button"
      >
        Delete
      </DelBtnStyle>
    </>
  );
};

ContactItem.propType = {
  contact: PropTypes.object.isRequired,
};
