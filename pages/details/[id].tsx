import styles from "../../styles/details.module.scss"
import Head from 'next/head'
import Image from 'next/image'
import rice from "../../public/rice.png"


const details = () => {
  return (
    <>
    <Head>
        <title>Recipe Details</title>
    </Head>
    <div className={styles.header}>
        <section className={styles.recipeDetails}>
            <h1>Japanese Gohan Rice</h1>
            <p>Japanese food</p>
            <button>Watch on Youtube</button>
        </section>
        <Image src={rice} alt={`Japanese Gohan rice`} className={styles.image} />
    </div>

    <section className={styles.body}>
    <h2 className={styles.subheading}>Ingredients</h2>
    <ul className={styles.list}>
        <li><strong> Sushi Rice </strong> - 300g</li>
        <li><strong> Mirin </strong> - 1tbs</li>
        <li><strong> Pickle Juice </strong> - Garnish</li>
        <li><strong> Spring Onions </strong> - Garnish</li>
    </ul>
    
    <h2 className={styles.subheading}>Instructions</h2>
    <p>
    STEP 1: Rinsing and soaking your rice is key to achieving the perfect texture. 
    Measure the rice into a bowl, cover with cold water, then use your fingers to 
    massage the grains of rice – the water will become cloudy. Drain and rinse 
    again with fresh water. Repeat five more times until the water stays clear.
    <br />
    STEP 2: Tip the rinsed rice into a saucepan with 400ml water, or 200ml dashi and 
    200ml water, bring to the boil, then turn down the heat to a low simmer, cover 
    with a tight-fitting lid with a steam hole and cook for 15 mins. Remove from the 
    heat and leave to sit for another 15 mins, then stir through the mirin. Remove the 
    lid and give it a good stir. Serve with any or all of the optional toppings.
    </p>
    </section>
    </>
  )
}

export default details