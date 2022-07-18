import { ChangeEvent, useState } from "react";
import styles from "../styles/SearchBar.module.scss"
import { useRouter } from "next/router";

const SearchBar = () => {

  const router = useRouter()

  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value)
  }

  const handleSearch = (event: { preventDefault: () => void; }) => {
      if (userInput === "") {
        event.preventDefault();
        alert("Type your search")
      }else {
        event.preventDefault()
        router.push(`/search/${userInput}`)
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
          <button type="submit" className={styles.button} onClick={(event) => handleSearch(event)}> Search</button>
    </form>
  )
}

export default SearchBar