import styles from "../../styles/search.module.scss"
import SearchBar from '../../components/SearchBar'
import Head from "next/head"
import Image from "next/image"

interface propTypes {
  results: {
    meals:{
      idMeal: string,
      strMeal: string,
      strCategory: string,
      strMealThumb: string

    }[]
  }
}


const Search = ({results}: propTypes) => {

  console.log(results.meals);
  
  
  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
        <header className={styles.search}>
            <SearchBar />
        </header>
        <section>
          {
            results.meals === null ? 
              <h1 className={styles.error}>No result for your search! Please try another search</h1> : 
              results.meals.map(meal => {
                return(
                  <div key={meal.idMeal} className={styles.recipeCard}> 
                    <Image 
                      src={meal.strMealThumb} 
                      alt={meal.strMeal} 
                      width={200} 
                      height={200} 
                      layout="responsive" 
                    />
                      <h1>{meal.strMeal}</h1>
                      <p>{meal.strCategory}</p>
                  </div>
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
    console.log(results);
    
    

    return {
      props: {
        results,
      }
    }
}


export default Search