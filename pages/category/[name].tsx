import styles from "../../styles/search.module.scss"
import Head from "next/head"
import SearchBar from "../../components/SearchBar"
import SearchResult from "../../components/SearchResult"

const categoryPage = () => {
  return (
    <>
        <Head>
            <title>Categories</title>
        </Head>
        <header className={styles.search}>
            <SearchBar />
        </header>
        <SearchResult />
    </>
  )
}

export default categoryPage