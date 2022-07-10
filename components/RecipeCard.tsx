import styles from "../styles/RecipeCard.module.scss"
import Image from "next/image"
import food from "../public/food.png"

const RecipeCard = () => {
  return (
    <div className={styles.card}>
        <Image src={food} className={styles.image} />
        <h3 className={styles.foodName}>Japanese gohan rice</h3>
        <p className={styles.foodArea}>Japanese food</p>
    </div>
  )
}

export default RecipeCard