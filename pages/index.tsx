import RecipeCard from "../components/RecipeCard"
import SearchBar from "../components/SearchBar"
import TrendingRecipes from "../components/TrendingRecipes"

const Home= () => {
  return (
    <>
      <SearchBar />
      <RecipeCard />
      <TrendingRecipes />
    </>
  )
}

export default Home