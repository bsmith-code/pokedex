## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/).
- Yarn. Make sure you have yarn installed. ```npm i -g yarn```

### Installation

1. Clone the repository: ```git clone https://github.com/bsmith-code/pokedex```
2. Install node modules: ```yarn```

### Hosts
1. Add ```127.0.0.1 pokedex.brianmatthewsmith.local``` to your /etc/hosts file

### Scripts
- Development: ```yarn start```
  - This will open the application in your default web browser. You can view the project at http://pokedex.brianmatthewsmith.local:3004.
- Production: ```yarn build```
  - This will generate a dist folder containing the optimized and minified build.
- Testing: ```yarn test```
  - This will execute the test suite and provide information on any test failures.

### Incomplete items
1. Implement husky for pre-commit and pre-push hooks (linting and tests).
2. Better exception handling.
3. Better mocks for tests.
4. Better loading states.
5. Integration and e2e tests.
6. Grid filtering when searching for pokemon.
7. Set search value to pokemon URL param when choosing a pokemon from the grid.
8. Local storage event listener for multi-tab support.
9. Implement error boundaries.

### Concurrent Environment
Running a React app in a concurrent environment typically refers to leveraging React's Concurrent Mode, which is a set of new features that help React applications stay responsive and gracefully adjust to different levels of priority and concurrency. Concurrent Mode allows React to work on multiple tasks simultaneously, making the user experience smoother and more responsive.

Here are the key concepts and steps involved in running a React app in a concurrent environment:
1. Enabling concurrent mode.
2. Use concurrent features such as Suspense and useTransition.
3. Utilize time slicing to break down large units of work into smaller chunks.
4. Error boundaries and retry logic.


# Front End Assessment
Please get it back to us within 72 hours if possible. If you have any questions please let us know.

## Overview

This project should take approximately 2+ hours to complete and help PrizePicks assess your front end knowledge and development style.

If you find the project takes longer than you’d like please submit a functional version of what you have. We're interested in assessing a functioning project even if all of the business requirements are not implemented.

## The Problem
Ash and his friends are on a new adventure to catch even more Pokemon! Before they set off on this journey they need some tools. As we all know every great Pokemon trainer needs a reliable Pokedex to identify Pokemon. It’s a good thing they have you! Ash has asked if you would be willing to build him a brand new Pokedex with core features and a couple of enhancements.

## Business Requirements
Please attempt to implement the following business requirements:
- Use the Pokemon API to make API requests for data https://pokeapi.co/docs/v2.
- Able to search for any Pokemon.
- Able to see a history of what has been searched and revisit at anytime.

## Technical Requirements
The following technical requirements must be met:
- You are allowed to use scaffolding technology like “Create React App” or similar.
- This project should be done with the latest React framework.
- This project should be done with the latest Redux framework.
- This project should be done using TypeScript.
- This project should be done using version control, preferably git.
- This project can be styled with SCSS/CSS or Styled Components if anything needs to be styled.
- This project should include a README that addresses anything you may not have completed. It should also address what additional changes you might need to make if the application were intended to run in a concurrent environment. Any other comments or thoughts about the project are also welcome.

## Bonus Points
- Able to see details about abilities, moves, species, sprites and types upon searching.
- Able to see other evolutions of Pokemon and be able to navigate to specific Pokemon in the evolution chain.
- A sleek and intuitive layout that resembles a Pokedex.
- Automated tests that ensure the business logic implemented is correct.


## Submission Requirements
Submit a link to a hosted git repository or tarball of the git repository of the finished project to the submission link. In addition, Please email the link to the recruiter.