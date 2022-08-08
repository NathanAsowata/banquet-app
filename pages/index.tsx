import Head from "next/head"
import Recipe from "../components/Recipe"
import RecipeCard from "../components/RecipeCard"
import SearchBar from "../components/SearchBar"
import styles from "../styles/Home.module.scss"

interface propTypes {
  recipes:{
    meals:{
    strMeal: string,
    strMealThumb: string,
    idMeal: string
  }[]
  }
}

const Home= ({recipes}:propTypes) => {

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
        <h2 className={styles.category}>Popular recipes</h2>
        <section className={styles.content}>
          {recipes.meals.map(meal => {
            return (
              <Recipe key={meal.idMeal} mealDetails={meal} />
            ) 
          })}
        </section>
    </>
  )
}


export const getServerSideProps = async () => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=american`)
  const recipes = await res.json();
  

  return {
    props: {
      recipes
    }
  }
}

export default Home