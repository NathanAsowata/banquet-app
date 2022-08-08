import Recipe from "../components/Recipe";
import {render, screen, fireEvent} from "@testing-library/react"


    const food = {
        idMeal: "2",
        strMeal: "Rice",
        strMealThumb: "/rice.png",
    }



describe("Recipe card tests", () => {
    it("should display recipe card", () => {
        const RecipeItem = render(<Recipe mealDetails={food} />)
        const RecipeCard = screen.getByTestId("recipes")
        expect(RecipeCard).toBeVisible()
    })
    it("should display recipe image", () => {
        const RecipeItem = render(<Recipe mealDetails={food} />)
        const imageElement = screen.getByRole("img")
        expect(imageElement).toBeVisible()
    })
    it("should display recipe name", () => {
        const RecipeItem = render(<Recipe mealDetails={food} />)
        const textElement = screen.getByText("Rice")
        expect(textElement).toBeVisible()
    })
})