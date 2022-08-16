import PropTypes from 'prop-types';

export const Filter = ({ inputValue, onChange }) => {
  return (
    <input type="text" name="filter" value={inputValue} onChange={onChange} />
  );
};

Filter.propType = {
  inputValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
