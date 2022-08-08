## How I worked on this project
My goal was to build a web app that requires data from an external REST API
* I built this app based on designs I created on Figma: [Link to the Figma design](https://www.figma.com/file/5895yc0eBRnEHSWlnovMcq/Banquet-App?node-id=0%3A1)
* I used the REST API provided by [TheMealDB.com](https://www.themealdb.com/api.php)

## How to navigate this project
* `components` folder contains code for each component.
* `pages` folder contains the TypeScript code for each page.
* `public` folder contains images I used in this project.
* `styles` folder contains the Sass styles for each page and component.
* `tests` folder contains all the tests i wrote for this project.  

## Why I built this project this way
* I used NextJS for this project because it allows me to fetch data from an external API on the server side rather than on the client side thus making it safe for production.
* I used Sass to style this project because it offers nesting which helps to keep things organised.
* Using CSS modules helps me avoid namespace collision for CSS classes.
* My plan is to work professionally as a frontend developer and I realised that the ability to fetch data from a REST API is an important skill for frontend developers. That is why I used data from an existing API in this project.

## If I had more time I would change this
* I would add end-to-end tests with Cypress.


## Available Scripts
In the project directory, you can run:
* `npm dev` - To start development server.
* `npm start` - To start the app in production mode.
* `npm test` - To run tests

