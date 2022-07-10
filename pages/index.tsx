import Carousel from "../components/Carousel"
import RecipeCard from "../components/RecipeCard"
import SearchBar from "../components/SearchBar"

const Home= () => {
  return (
    <>
      <SearchBar />
      <RecipeCard />
      <Carousel />
    </>
  )
}

export default Home