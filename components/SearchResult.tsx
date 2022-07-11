import styles from "../styles/SearchResult.module.scss"
import RecipeCard from './RecipeCard'

const SearchResult = () => {
  return (
    <section className={styles.container}>
        <RecipeCard /> <RecipeCard /> <RecipeCard /> <RecipeCard /> <RecipeCard />
        <RecipeCard /> <RecipeCard /> <RecipeCard /> <RecipeCard /> <RecipeCard />
        <RecipeCard /> <RecipeCard /> <RecipeCard /> <RecipeCard /> <RecipeCard />
        <RecipeCard /> <RecipeCard /> <RecipeCard /> <RecipeCard /> <RecipeCard />
    </section>
  )
}

export default SearchResult