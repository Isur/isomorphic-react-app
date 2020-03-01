# Starter

Isomoprhic React Application.

## Table of contents
- [Getting Started](#getting-started)
- [Running the tests](#running-the-tests)
- [Deployment](#deployment)
- [Built with](#built-with)
- [Authors](#authors)
- [License](#license)

## Getting Started:

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To start this project you need `npm`, `node` an `linux` system.

Recommended: `docker`, `docker-compose`

### Installing

To install packages:

`npm install`

To run development envinronment use

`npm run dev`

It will test code with eslint rules and fix it if possible.
Afterwards webpack.ts will build and launch application.

## Running the tests
### Unit tests
Test and generate coverage report:

`npm run test`

Test, watch and generate coverage report:

`npm run test_watch`

### Linter
Run linter:

`npm run linter`

and fix if possible:

`npm run linter-fix`

## Deployment:

If you want to deploy your app on live system use:

`npm run build`

It will check your code and build the application.

To start it use:

`npm run start`

You can also build docker image:

`docker build -t [name] .`

To run with database and pgAdmin:

`docker-compose up`

## Built with

- [Webpack](https://webpack.js.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express)
- [React](https://reactjs.org/)
- [Babel](https://babeljs.io/)
- [Typescript](https://www.typescriptlang.org/index.html)
- [SASS](https://sass-lang.com/)
- [Eslint](https://eslint.org/)

## Authors
- **Artur Bednarczyk** - *Initial work* -  [Isur](https://github.com/isur)

## License

This project is licensed under the MIT License
