import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import RecipeCard from './RecipeCard';

const Carousel = () => {
  return (
    <CarouselProvider naturalSlideWidth={1000} naturalSlideHeight={1200}
         
        totalSlides={7} visibleSlides={4} >

        <ButtonBack>Back</ButtonBack>

        <Slider>
            <Slide index={0}>
                <RecipeCard />
            </Slide>

            <Slide index={1}>
                <RecipeCard />
            </Slide>

            <Slide index={2}>
                <RecipeCard />
            </Slide>


            <Slide index={3}>
                <RecipeCard />
            </Slide>

            <Slide index={4}>
                <RecipeCard />
            </Slide>

            <Slide index={5}>
                <RecipeCard />
            </Slide>

            <Slide index={6}>
                <RecipeCard />
            </Slide>

        </Slider>

        <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  )
}

export default Carousel