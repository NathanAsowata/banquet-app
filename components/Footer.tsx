import Link from "next/link"
import {BsLinkedin,BsGithub, BsTwitter} from "react-icons/bs"
import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <section className={styles.section} >
            <h2 className={styles.heading} >About this project</h2>
            <p className={styles.text} >Banquet is a culinary app that helps you find recipes for any kind of meal.
                 It can also help you get inspired and make the most out of your meals by 
                 providing you with tips from other users.
            </p>
            <p className={styles.text} >
                Data provided by <Link href={`https://www.themealdb.com/api.php`}>
                    <a target="_blank"> TheMealDB</a></Link> 
                <br />
                Designed and built by <Link href={`http://www.nathanasowata.com/`}>
                    <a target="_blank"> Nathan Asowata</a></Link>
            </p>
            <BsLinkedin className={styles.icon} />
            <BsGithub className={styles.icon} />
            <BsTwitter className={styles.icon} />
        </section>
        <section className={styles.section} >
            <h2 className={styles.heading}>Major Categories</h2>
            <ul>
                <li>Breakfast</li>
                <li>Dessert</li>
                <li>Vegetarian</li>
                <li>Seafood</li>
                <li>Pasta</li>
                <li>Miscellanous</li>
            </ul>
        </section>
        <section className={styles.section} >
            <h2 className={styles.heading}>Other Categories</h2>
            <ul>
                <li>Beef</li>
                <li>Chicken</li>
                <li>Pork</li>
                <li>Lamb</li>
                <li>Starter</li>
                <li>Side</li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer