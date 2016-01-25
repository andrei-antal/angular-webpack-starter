# angular-webpack-starter1

An example Angular application using webpck for module management and packing.
In order to run the application and install dependencies, ```node``` with ```npm``` should be installed. Node 4 and npm 3 are recommanded. 

To install dependencies run: 
```
npm install
```

###Tools used:

For a full list of installed packages, please view [package.json](https://github.com/andreiantal/angular-webpack-starter1/blob/master/package.json)

Frontend:
 - ```Angular``` 1.4.9
 - ```Angular Material``` 1.0.2
 - ```ngAnimate``` & ```ngAria``` (required dependencies)

Dev tools:
 - ```webpack``` & ```webpack dev server``` for package management and js bundling
 - ```babel``` for es6 transpiling
 - ```node-sass```for SASS preprocessing
 - ```style-loader```, ```css-loader```, ```sass-loader``` and ```autoprefixer-loader``` for CSS bundling
 - ```eslint``` for code linting, using ```airbnb``` style guide
 - testing
   - test runner: ```karma``` with ```chrome-launcher```
   - test framework: ```mocha```
   - test assertion library: ```chai```


###Configured tasks

The project uses NPM Scripts for running tasks. In order to run a task just enter the the command in the console. Please view the ```scripts``` section of  [package.json](https://github.com/andreiantal/angular-webpack-starter1/blob/master/package.json) for a detaild list of tasks.

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

This launches the Karma test runner with chrome as te defaul browser. A visual representation for the state of the tests can be found in ```test_results```, filed by browser.

####Lint the code

```
npm run lint
```

This command runs ```eslint``` on the code and highlights any errors or warning, if any. Can be later configured for as a pre-commit requirement.
