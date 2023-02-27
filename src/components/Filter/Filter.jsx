import { useDispatch, useSelector } from 'react-redux';
import { selectedFilter } from 'redux/filter/selector';
import { setFilter } from '../../redux/filter/slice';
import { Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectedFilter);
  const handleOnChange = event => {
    dispatch(setFilter(event.target.filter));
  };

  return (
    <Input
      type="text"
      placeholder="Type to search..."
      value={filter}
      name="filter"
      id="search"
      onChange={handleOnChange}
    />
  );
};
