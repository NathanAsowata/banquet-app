import styles from "../styles/RecipeCard.module.scss"
import Image from "next/image"
import food from "../public/food.png"
import Link from "next/link"

interface recipeTypes {
  meal: string,
  thumbNail: string,
  id: string
}

const RecipeCard = ({meal, thumbNail, id}: recipeTypes) => {
  return (
    <Link href={`/details/${id}`}><a className={styles.link}>
      <div className={styles.card} key={id} >
          <Image src={thumbNail} alt={meal} className={styles.image} width={200} height={200} />
          <h3 className={styles.foodName}>{meal}</h3>
      </div>
    </a></Link>
  )
}

export default RecipeCard