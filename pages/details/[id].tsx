import styles from "../../styles/details.module.scss"
import Head from 'next/head'
import Image from 'next/image'
import rice from "../../public/rice.png"
import Link from "next/link"


interface propTypes {
    meals: {
      strMeal: string,
      strCategory: string,
      strArea: string,
      strInstructions: string,
      strMealThumb: string,
      strYoutube: string,
      strIngredient1: string,
      strIngredient2: string,
      strIngredient3: string,
      strIngredient4: string,
      strIngredient5: string,
      strIngredient6: string,
      strIngredient7: string,
      strIngredient8: string,
      strIngredient9: string,
      strIngredient10: string,
      strIngredient11: string,
      strIngredient12: string,
      strIngredient13: string,
      strIngredient14: string,
      strIngredient15: string,
      strIngredient16: string,
      strIngredient17: string,
      strIngredient18: string,
      strIngredient19: string,
      strIngredient20: string,
      strMeasure1: string,
      strMeasure2: string,
      strMeasure3: string,
      strMeasure4: string,
      strMeasure5: string,
      strMeasure6: string,
      strMeasure7: string,
      strMeasure8: string,
      strMeasure9: string,
      strMeasure10: string,
      strMeasure11: string,
      strMeasure12: string,
      strMeasure13: string,
      strMeasure14: string,
      strMeasure15: string,
      strMeasure16: string,
      strMeasure17: string,
      strMeasure18: string,
      strMeasure19: string,
      strMeasure20: string,
      strSource: string
    }[]
}

const Details = ({meals}: propTypes) => {


  return (
    <>
    <Head>
        <title>Recipe Details</title>
    </Head>
    {meals.map(meal => {
      return(
        <main key={meal.strMeal}>
        <div className={styles.header}>
          <section className={styles.recipeDetails}>
              <h1>{meal.strMeal}</h1>
              <p>{meal.strArea} Food</p>
              <Link href={meal.strYoutube}>
                <a target={"_blank"}>
                <button>Watch on Youtube</button>
                </a>
              </Link>
          </section>
          <Image src={meal.strMealThumb} alt={meal.strMeal} width={500} height={500} />
      </div>

      <section className={styles.body}>
      <h2 className={styles.subheading}>Ingredients</h2>
      <ul className={styles.list}>
          <li><strong> {meal.strIngredient1} </strong> - {meal.strMeasure1}</li>
          <li><strong> {meal.strIngredient2} </strong> - {meal.strMeasure2}</li>
          <li><strong> {meal.strIngredient3} </strong> - {meal.strMeasure3}</li>
          <li><strong> {meal.strIngredient4} </strong> - {meal.strMeasure4}</li>
          <li><strong> {meal.strIngredient5} </strong> - {meal.strMeasure5}</li>
          <li><strong> {meal.strIngredient6} </strong> - {meal.strMeasure6}</li>
          <li><strong> {meal.strIngredient7} </strong> - {meal.strMeasure7}</li>
          <li><strong> {meal.strIngredient8} </strong> - {meal.strMeasure8}</li>
          <li><strong> {meal.strIngredient9} </strong> - {meal.strMeasure9}</li>
          <li><strong> {meal.strIngredient10} </strong> - {meal.strMeasure10}</li>
          <li><strong> {meal.strIngredient11} </strong> - {meal.strMeasure11}</li>
          <li><strong> {meal.strIngredient12} </strong> - {meal.strMeasure12}</li>
          <li><strong> {meal.strIngredient13} </strong> - {meal.strMeasure13}</li>
          <li><strong> {meal.strIngredient14} </strong> - {meal.strMeasure14}</li>
          <li><strong> {meal.strIngredient15} </strong> - {meal.strMeasure15}</li>
          <li><strong> {meal.strIngredient16} </strong> - {meal.strMeasure16}</li>
          <li><strong> {meal.strIngredient17} </strong> - {meal.strMeasure17}</li>
          <li><strong> {meal.strIngredient18} </strong> - {meal.strMeasure18}</li>
          <li><strong> {meal.strIngredient19} </strong> - {meal.strMeasure19}</li>
          <li><strong> {meal.strIngredient20} </strong> - {meal.strMeasure20}</li>
      </ul>
      
      <h2 className={styles.subheading}>Instructions</h2>
      <p className={styles.Instructions}>{meal.strInstructions}</p>
      </section>
    </main>
      )
    }) }
    </>
  )
}

export const getServerSideProps = async (context: any) => {
    const foodId = context.query.id

    if (foodId === "random") {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      const details = await res.json()

      return{
        props: {
          meals: details.meals
        }
      }

    } else{
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
      const details = await res.json()

      return{
        props: {
          meals: details.meals
        }
      }
      
    }
    
}

export default Details