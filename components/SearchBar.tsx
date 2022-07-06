import styles from "../styles/SearchBar.module.scss"
import { BsSearch } from "react-icons/bs"

const SearchBar = () => {
  return (
    <form className={styles.form}>
        <input className={styles.input} placeholder="Find a recipe..." />
        <button className={styles.button}>
            <BsSearch />
        </button>
    </form>
  )
}

export default SearchBar