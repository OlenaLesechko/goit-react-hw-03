import css from './SearchBox.module.css';

export default function SearchBar({ searchTerm, onChange }) {
    return (
        <div className={css.div}>
        <p>Find contacts by name</p>
        <input type="text" value={searchTerm} onChange={onChange} />
        </div>
    );
}