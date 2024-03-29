import styles from "../../styles/search.module.scss"
import SearchBar from '../../components/SearchBar'
import Head from "next/head"
import Recipe from "../../components/Recipe"
import { useRouter } from "next/router"

interface propTypes {
  results: {
    meals:{
      idMeal: string,
      strMeal: string,
      strCategory: string,
      strMealThumb: string,
      strArea: string
    }[]
  }
}


const Search = ({results}: propTypes) => {
  
  const router = useRouter()
  const searchItem = router.query.userInput

  return (
    <>
      <Head>
        <title>{searchItem} - Search</title>
      </Head>
        <header className={styles.search}>
            <SearchBar />
        </header>
        <section className={styles.searchResult}>
          {
            results.meals === null ? 
              <h1 className={styles.error}>No result for your search! Please try another search</h1> : 
              results.meals.map(meal => {
                return(
                  <Recipe mealDetails={meal} key={meal.idMeal} />
                )
              })
          }
        </section>
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  const searchRequest = context.query.userInput

    const res = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${searchRequest}`)
    const results = await res.json()
    
    

    return {
      props: {
        results,
      }
    }
}


export default Search