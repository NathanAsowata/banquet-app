import { ChangeEvent, useState } from "react";
import styles from "../styles/SearchBar.module.scss"
import Link from "next/link";

const SearchBar = () => {

  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value)
  }

  const handleSearch = (event: { preventDefault: () => void; }) => {
      if (userInput === "") {
        event.preventDefault();
        alert("Type your search")
      }
  }

  return (
    <form className={styles.form}>
        <input className={styles.input} 
          placeholder="Find a recipe..." 
          value={userInput} 
          onChange={(e) => handleUserInput(e)}
          required
        />
        <Link href={`/search/${userInput}`}>
          <button type="submit" className={styles.button} onClick={handleSearch}> Search</button>
        </Link>
    </form>
  )
}

export default SearchBar