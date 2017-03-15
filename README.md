Simple Webpack boilerplate
==

What for it?
--

This is boilerplate for simple ES6 vanilla js project. It is not for React or something else, it is for regular web pages. Also it can be simply integrated into an existing project (PHP site for example)

What is included?
--
* Babel with es2015 preset
* Sass loader with auto-prefixer
* Extract text webpack plugin for creating external styles file

How to
--
Just clone the repository and install dependencies:
```
npm install
```
Then you can run webpack watcher and edit sources in `src` folder:
```
npm run watch
```
Or you can build sources manualy:
```
npm run build
```
Build production sources:
```
npm run prod
```
