import { selectFilteredContacts } from 'components/redux/selectors';
import { useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import css from './ContactsStyle.module.css';
const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactWrapp}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
        ></ContactListItem>
      ))}
    </ul>
  );
};

export default ContactList;
