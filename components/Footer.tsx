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
            <Link href="https://www.linkedin.com/in/nathan-asowata-706624193/">
                <a><BsLinkedin className={styles.icon} /></a>
            </Link>
            <Link href="https://www.github.com/NathanAsowata/">
                <a><BsGithub className={styles.icon} /></a>
            </Link>
            <Link href="https://www.twitter.com/Nathan_Asowata/">
                <a><BsTwitter className={styles.icon} /></a>
            </Link>
        </section>
        <section className={styles.section} >
            <h2 className={styles.heading}>Major Categories</h2>
            <ul>
                <li><Link href="/category/breakfast"> Breakfast </Link></li>
                <li><Link href="/category/dessert">Dessert</Link></li>
                <li><Link href="/category/vegetarian">Vegetarian</Link></li>
                <li><Link href="/category/seafood">Seafood</Link></li>
                <li><Link href="/category/pasta">Pasta</Link></li>
                <li><Link href="/category/miscellanous">Miscellanous</Link></li>
            </ul>
        </section>
        <section className={styles.section} >
            <h2 className={styles.heading}>Other Categories</h2>
            <ul>
                <li><Link href="/category/beef">Beef</Link></li>
                <li><Link href="/category/chicken">Chicken</Link></li>
                <li><Link href="/category/pork">Pork</Link></li>
                <li><Link href="/category/lamb">Lamb</Link></li>
                <li><Link href="/category/starter">Starter</Link></li>
                <li><Link href="/category/side">Side</Link></li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer