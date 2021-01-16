first create index - app.js in your customized folder

2. run: "yarn init" in cmd so then we will have package.json file :)

3. run: "yarn add live-server babel-cli6.24.1" in cmd so then we will have yarn.lock and node_modules folder and added scripts to package.json :)

4. write and add "scripts" in package.json with this details:
 "scripts": {
    "serve": "live-server public",
    "build": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
  },

5. install webpack locally. version (3.1.0). then make a file named: "webpack.config.js". then add "--watch" package.json => scripts to web-pack as below.

webpack.config.js should be like:
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
};

package.json:
{
  "name": "expensify-app",
  "version": "1.0.0",
  "description": "this is the second project which is done with course of andrew mead from Udemy by MJ Nouri and the start date was 25/8/2020",
  "main": "index.js",
  "author": "Mohammadjavad Nouri",
  "license": "MIT",
  "scripts": {
    "serve": "live-server public",
    "build": "webpack --watch",
    "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
  },
  "dependencies": {
    "babel-cli": "6.24.1",
    "live-server": "^1.2.1",
    "webpack": "3.1.0"
  }
}




6.  open two cmd lines and run: "yarn run build" and in the second one run "yarn run serve"

7. additional and optional: to use babel from webpack we should install babel core:
run: "yarn add babel-core@6.25.0 babel-loader@7.1.1"

then you should add "module rules" to webpack.config.js as below:
in detali: run all js files: "test: /\.js$/" through babel loader: 
"babel-loader" except: "node_modules"

const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};




then we should add a file named babel.rc to the main root which is a json file.
this allows us pass all commands in cmd
{
  "presets": ["env", "react"]
}


after having it installed, if had error, check in package.json and make sure all the below installed:

"babel-cli": "6.24.1",
"babel-core": "6.25.0",
"babel-loader": "7.1.1",
"babel-plugin-transform-class-properties": "6.24.1",
"babel-preset-env": "1.5.2",
"babel-preset-react": "6.24.1"




======================================================
//##** optional:
9. webpack dev-server run: "yarn add webpack-dev-server@2.5.1"
then in webpack.config.json add: "contentBase: path.join(__dirname, 'public')" to devServer which you should add and write it. as below:

const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
    devtool: "cheap-module0eval-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
    },
  },
};


and then we should just add a script to package.json to be able to run it over the terminal:
we will remove build-babel.
then edit build to just webpack (it means just remove "--watch")
then add: "dev-server":"webpack-dev-server" as below:

const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};


=====================================================
10. setting up webpack with CSS

again in webpack.config.js we should define new rules to make webpack able to read that as before:
for having a simple css with react we add: "test: /\.css$/" and "use:['style-loader','css-loader']" in module in rules in webpack.config.js as below

but please pay attention we should install style-loader and css-loader modules from cmd by running: 
"yarn add style-loader@18.0.2 css-loader@0.28.4"

then this is  just enough to import "./styles/styles.css" to app.js

which is inefficient! :)
=====================================================
11. setting up webpack with SCSS

in webpack.config.js change /\.css$/ to /\.scss$/ which "test" is set to. 

we need to install "sass-loader" and "style-loader" from cmd as always by yarn add  .....


then add these to config webpack... : test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],

as below:

const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};


================================================
12. after those things we can install react-router to be able to use Links and routing easily
yarn add react-router-dom@4.2.2
for making our dev-server to be able to see other links with "/"
we add " historyApiFallback:true " to webpack.config.js in devServer.