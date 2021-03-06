# Marker
The marker position on the map

### Package Name
+ **alt** - Flux library for React.
+ **async** - For managing asynchronous flow.
+ **babel** - ES6 compiler.
+ **body-parser** - For parsing POST request data.
+ **colors** - Pretty console output messages.
+ **compression** - Gzip compression.
+ **express** - Web framework for Node.js.
+ **history** - Manage session history in browsers, used by react-router.
+ **mongoose** - MongoDB ODM with validation and schema support.
+ **morgan** - HTTP request logger.
+ **react** - React
+ **react-dom** - React rendering, it is no longer bundled with React.
+ **react-router** - Routing library for React.
+ **request** - For making HTTP requests to Online API.
+ **serve-favicon** - For serving favicon.png icon.
+ **socket.io** - To display how many users are online in real-time.
+ **swig** - To render the initial HTML template.
+ **underscore** - Helper JavaScript utilities.

### Gulp Task
+ **vendor** - Concatenates all JS libraries into one file.
+ **browserify-vendor** - For performance reasons, NPM modules specified in the dependencies array are compiled and bundled separately. As a result, bundle.js recompiles a few hundred milliseconds faster.
+ **browserify** - Compiles and bundles just the app files, without any external modules like react and react-router.
+ **browserify-watch** - Essentially the same task as above but it will also listen for changes and re-compile bundle.js.
+ **styles** - Compiles LESS stylesheets and automatically adds browser prefixes if necessary.
+ **watch** - Re-compiles LESS stylesheets on file changes.
+ **default** - Runs all of the above tasks and starts watching for file changes.
+ **build** - Runs all of the above tasks then exits.