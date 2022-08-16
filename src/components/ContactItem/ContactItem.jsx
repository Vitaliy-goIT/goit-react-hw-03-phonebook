import PropTypes from 'prop-types';

export const ContactItem = ({ contact, onDelete }) => {
  const { name, number, id } = contact;
  return (
    <div>
      <span>
        {name} : {number}
      </span>

      <button
        onClick={() => {
          onDelete(id);
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

ContactItem.propType = {
  contact: PropTypes.object.isRequired,
};
