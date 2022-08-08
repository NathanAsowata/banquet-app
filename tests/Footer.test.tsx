import Footer from "../components/Footer";
import {render, screen} from "@testing-library/react"

describe("Footer test", () => {
    it("should display the footer", () => {
        const footer = render(<Footer />)
        const footerElement = screen.getByTestId("footer")
        expect(footerElement).toBeVisible()
    })
})