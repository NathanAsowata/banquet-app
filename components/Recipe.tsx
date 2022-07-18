import styles from "../styles/Recipe.module.scss"
import Image from "next/image"

interface propTypes {
    mealDetails:{
        idMeal: string,
        strMeal: string,
        strCategory: string,
        strMealThumb: string,
        strArea: string
    }
  }

const Recipe = ({mealDetails}:propTypes) => {
  return (
    <div key={mealDetails.idMeal} className={styles.container}>
                        <Image 
                        src={mealDetails.strMealThumb} 
                        alt={mealDetails.strMeal} 
                        width={200} 
                        height={200}
                        layout="responsive"
                        />
                        <span>
                        <h1>{mealDetails.strMeal}</h1>
                        <p>{mealDetails.strArea} Food</p>
                        <p><i>{mealDetails.strCategory}</i></p>
                      </span>
                  </div>
  )
}

export default Recipe