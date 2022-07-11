import styles from "../styles/TrendingRecipes.module.scss"
import RecipeCard from "./RecipeCard"


const TrendingRecipes = () => {
  return (
    <div className={styles.container}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
    </div>
  )
}

export default TrendingRecipes