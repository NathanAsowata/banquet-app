import NavBar from "../components/NavBar";
import {render, screen } from "@testing-library/react"

describe("Navigation Bar Test", () => {
    it("should display the logo", () => {
        const Navigation = render(<NavBar />)
        const Logo = screen.getByText("Banquet App")
        expect(Logo).toBeVisible()
    })
})