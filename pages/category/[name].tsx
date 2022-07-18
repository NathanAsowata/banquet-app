import styles from "../../styles/search.module.scss"
import Head from "next/head"
import SearchBar from "../../components/SearchBar"
import Recipe from "../../components/Recipe"

interface propTypes {
  data: {
    meals: {
      strMeal: string,
      strMealThumb: string,
      idMeal: string
    }[]
  }
} 

const CategoryPage = ({data}:propTypes) => {
  return (
    <>
        <Head>
            <title>Categories</title>
        </Head>
        <header className={styles.search}>
            <SearchBar />
        </header>
        <main className={styles.searchResult}>
          {data.meals.map(meal => {
            return <Recipe key={meal.idMeal} mealDetails={meal} />
          })}
        </main>
    </>
  )
}

export const getServerSideProps = async (context: any) => {
    const category = context.query.name
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    const data = await res.json()
     return{
      props:{
        data
      }
     }
}

export default CategoryPage