import SearchBar from "../components/SearchBar";
import {fireEvent, render, screen } from "@testing-library/react"

describe("Navigation Bar Test", () => {
    it("should display search bar", () => {
        const Search = render(<SearchBar />)
        const inputElement = screen.getByRole("textbox")
        const searchButton = screen.getByRole("button")
        expect(inputElement).toBeVisible()
        expect(searchButton).toBeVisible()
    })
    it("should accept user input", () => {
        const Search = render(<SearchBar />)
        const inputElement = screen.getByRole("textbox")
        fireEvent.change(inputElement, {target:{value: "cake"}})
        expect(inputElement).toHaveDisplayValue("cake")
    })
})