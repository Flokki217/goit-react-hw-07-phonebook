import css from './FilterStyle.module.css';
import { changeFilter } from 'components/redux/filterSlice';
import { selectFilter } from 'components/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <label>
      Find contact by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filter;
