# Star Wars API Display with Vue.js, Vite, and Tailwind CSS

This project utilizes HTML, CSS, and Javascript with Vue.js, Vite, and Tailwind CSS to consume and display data from the Star Wars API (SWAPI) in an organized manner. Additionally, it implements a sorting mechanism on the frontend. Feel free to use any other framework or library you consider necessary to accomplish the task.

## Instructions

1. Clone this repository.
2. Run `yarn install` or `npm install` to install dependencies.
3. Run `yarn dev` or `npm run dev` to start the development server.
4. Open your browser and navigate to the provided localhost link.

## Project Overview

- **Vue.js and Vite:** Vue.js is the primary JavaScript framework used for building the UI components, and Vite is the build tool used to enhance the development experience.
- **Tailwind CSS:** Used for styling the application to create a responsive and visually appealing design.
- **HTML:** Structures the page and hosts the user interface.
- **Javascript (Vue.js):** Consumes the API and dynamically displays and sorts the data.

## API Consumption

The API used is [SWAPI](https://swapi.dev/documentation), specifically the "planet" resource. Data is retrieved through API calls and presented in an organized manner in the interface.

## Questions and Answers

After completing the code, the following questions were addressed:

### 1. What's a closure? Where in the code is there a closure?

A closure is a function that has access to variables outside of its lexical scope. In this codebase, closures are prevalent, especially in the use of arrow functions. Arrow functions inherently capture the lexical scope in which they are defined, making them examples of closures. One instance of this is demonstrated in the following example:

```javascript
const getEpisodeNumber = (id) => {
  const romanNumbers = ["I", "II", "III", "IV", "V", "VI"];
  return `Episode ${romanNumbers[id - 1]}`;
};
```

In this example, the arrow function getEpisodeNumber captures the romanNumbers array from its surrounding scope, illustrating the concept of a closure

### 2. Which are the potential side-effects in any function? Could you point out any of these cases in your code? Are they expected? Can they be avoided?

Side effects in a function are observable changes outside the function. While the code may have side effects, such as API calls that result in data updates, it's crucial to minimize side effects, especially in functions that are meant to be pure. A pure function, by definition, should not have side effects and should always return the same output for the same input. Striving for pure functions enhances code predictability, testability, and maintainability. In the provided code, one potential side effect is the API call, which can be managed through proper error handling and loading mechanisms.

