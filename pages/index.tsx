import Head from "next/head"
import SearchBar from "../components/SearchBar"
import TrendingRecipes from "../components/TrendingRecipes"
import styles from "../styles/Home.module.scss"

const Home= () => {
  return (
    <>
    <Head>
      <title>Find amazing recipes - Banquet App</title>
    </Head>
    <header className={styles.header}>
      <h1 className={styles.title}>Find recipes to make any kind of meal</h1>
      <p className={styles.text}>Whether you are looking for a new way to make a classic dish, 
        or just trying to figure out what to cook for dinner, our app has got you covered</p>
      <SearchBar />
    </header>
      <h2 className={styles.category}>Breakfast Recipes</h2>
      <TrendingRecipes />

      <h2 className={styles.category}>Dessert Recipes</h2>
      <TrendingRecipes />

      <h2 className={styles.category}>Vegetarian Recipes</h2>
      <TrendingRecipes />

      <h2 className={styles.category}>Seafood Recipes</h2>
      <TrendingRecipes />

      <h2 className={styles.category}>Pasta Recipes</h2>
      <TrendingRecipes />
    </>
  )
}

export default Home