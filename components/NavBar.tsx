// CSS styles for this component can be found in globals.scss page
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from "react"
import Link from "next/link";

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

      <span className="logo">
        <Link href="/">
          <a> Banquet App </a>
        </Link>
      </span>


      <span className={responsiveDesign}>

        <Link href='/category/breakfast'>
          <a>Breakfast</a>
        </Link>

        <Link href='/category/dessert'>
          <a>Dessert</a>
        </Link>

        <Link href='/category/vegetarian'>
          <a>Vegetarian</a>
        </Link>

        <Link href='/category/seafood'>
          <a>Seafood</a>
        </Link>
        <Link href='/category/pasta'>
          <a>Pasta</a>
        </Link>

        <Link href='/details/random'>
          <button className="button">Get a random recipe</button>
        </Link>

      </span>
      <GiHamburgerMenu className="icon" onClick={handleMenu} />
    </nav>
  )
}

export default NavBar