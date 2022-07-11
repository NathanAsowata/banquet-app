import styles from "../../styles/search.module.scss"
import SearchBar from '../../components/SearchBar'
import SearchResult from "../../components/SearchResult"
import Head from "next/head"

const search = () => {
  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
        <header className={styles.search}>
            <SearchBar />
        </header>
        <SearchResult />
    </>
  )
}

export default search