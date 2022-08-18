import PropTypes from 'prop-types';
import { FilterStyle } from './filter.styled';

export const Filter = ({ inputValue, onChange }) => {
  return (
    <FilterStyle
      type="text"
      name="filter"
      value={inputValue}
      onChange={onChange}
    />
  );
};

Filter.propType = {
  inputValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
