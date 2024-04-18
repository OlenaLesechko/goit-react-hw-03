import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul className={css.list}>
        {contacts.map(contact => (
            <li key={contact.id} className={css.item}>
            <Contact
                name={contact.name}
                number={contact.number}
                onDelete={() => onDeleteContact(contact.id)}
            />
            </li>
        ))}
        </ul>
    );
}