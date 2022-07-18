import styles from "../styles/Recipe.module.scss"
import Image from "next/image"
import { useRouter } from "next/router"
import { FormEvent } from "react"

interface propTypes {
    mealDetails:{
        idMeal: string,
        strMeal: string,
        strMealThumb: string,
        strCategory?: string,
        strArea?: string
    }
  }

const Recipe = ({mealDetails}:propTypes) => {

    const router = useRouter()
    const showDetails = (event: FormEvent) => {
        event.preventDefault()
        router.push(`/details/${mealDetails.idMeal}`)
    }

  return (
    <div key={mealDetails.idMeal} className={styles.container} onClick={showDetails}>
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