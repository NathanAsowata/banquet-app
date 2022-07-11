import styles from "../styles/SearchBar.module.scss"

const SearchBar = () => {
  return (
    <form className={styles.form}>
        <input className={styles.input} placeholder="Find a recipe..." />
        <button className={styles.button}>
          <span className={styles.text}>Search</span>
        </button>
    </form>
  )
}

export default SearchBar