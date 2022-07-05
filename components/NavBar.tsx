// CSS styles for this component can be found in globals.scss page
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from "react"

const NavBar = () => {

  const [isDisplayed, setIsDisplayed ] = useState(false);
  const [responsiveDesign, setReponsiveDesign] = useState("menu");

  const handleMenu = () => {
    if (isDisplayed) {
      
      setReponsiveDesign("menu");
      
      setIsDisplayed(false);
    }else{
      setReponsiveDesign("responsive")

      setIsDisplayed(true);
    }
  }

  return (
    <nav className="nav">
      <span className="logo"> Banquet App</span>
      <span className={responsiveDesign}>
        <a href="#">Breakfast</a>
        <a href="#">Dessert</a>
        <a href="#">Vegetarian</a>
        <a href="#">Seafood</a>
        <a href="#">Pasta</a>
        <button className="button">Get a random recipe</button>
      </span>
      <GiHamburgerMenu className="icon" onClick={handleMenu} />
    </nav>
  )
}

export default NavBar