import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/operations';
import css from './ContactsStyle.module.css';
const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const formattedPhone = number.replace(/ x\d+$/, '');

  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li className={css.name}>
      {name}: {formattedPhone}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactListItem;
