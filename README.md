# angular-webpack-starter1

This is an example Angular application using [Webpack](https://webpack.github.io/) for module management and packing.
In order to install dependencies and run the application ```node``` with ```npm``` should be installed. Node 4 and npm 3 are recommanded.

All the dependencies required for the build system, testing and so on are managed with npm and defined in [package.json](https://github.com/andreiantal/angular-webpack-starter1/blob/master/package.json). They can be installed with:
```
npm install
```

###Tools used:

Frontend:
 - ```Angular``` 1.4.9
 - ```Angular Material``` 1.0.2
 - ```ngAnimate``` & ```ngAria``` (required dependencies)

Dev tools:
 - ```webpack``` & ```webpack dev server``` for package management and js bundling and development server
 - ```babel``` for es6 transpiling
 - ```node-sass```for SASS preprocessing
 - ```style-loader```, ```css-loader```, ```sass-loader``` and ```autoprefixer-loader``` for CSS bundling
 - ```eslint``` for code linting using [airbnb](https://github.com/airbnb/javascript) style guide
 - testing
   - test runner: ```karma``` with ```chrome-launcher```
   - test framework: ```mocha```
   - test assertion library: ```chai```
   - test spies, stubs and mocks: ```sinon```
   - test coverage: ```istambul``` (TODO)


###Configured tasks

The project uses [NPM Scripts](https://docs.npmjs.com/misc/scripts) for running tasks. In order to run a task just enter the the command in the console. Please view the ```scripts``` section of  [package.json](https://github.com/andreiantal/angular-webpack-starter1/blob/master/package.json) for a detaild list of tasks.

####Running the app

```
npm start
```

This fires up ```webpack-dev-server``` that serves the code on [http://localhost:8080/](http://localhost:8080/). The server watches the code, and refreshes the page to reflect any modifications.

####Building the app

```
npm run build
```

This bundles the application code, uglyfing and minifying it. The result can be found in the ```dist``` directory, and can be served statically.

####Testing the app

```
npm test
```

This launches the Karma test runner with chrome as te defaul browser. A visual representation for the state of the tests can be found in ```test_results```, filed by browser. Karma will automatically watch the files and rerun tests when files change.

####Lint the code

```
npm run lint
```

This command runs ```eslint``` on the code and highlights any errors or warning, if any. Can be later configured for as a pre-commit requirement.

###Others

The app uses ```.editorconfig``` in order to have an unified programming experience across diferent IDE's and editors.
