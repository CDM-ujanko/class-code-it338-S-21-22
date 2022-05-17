let IT339_F_21_22 = {
  name: 'Server-Side Web Development Frameworks',
  code: 'IT339',
  key: 'IT339-F-21-22',
  term: 'Spring',
  academicYear: '2021-2022',
  location: 'Online',
  time: 'M/W 10:10AM - 11:40AM',
  active: false,
  description: '<p>Advanced server-side web application servers and services to support' +
      ' MVC architectures and data and resources required in front-end frameworks. ' +
      'Development of server-side application services and APIs using current code libraries ' +
      'and frameworks. Research into application server frameworks and the comparative' +
      ' analysis of strengths, weaknesses, opportunities, and problems.</p>' +
      '<h3>Important things to remember:</h3><ul>' +
      '<li>Our classes are going to be online using ' +
      ' <a href="https://depaul.zoom.us/j/6138581159" target="_blank">zoom</a> (same room as the office hours).</li>' +
      '<li>All assignments are due before the next (Monday) class 10:10 AM and no late assignment will be accepted.</li>' +
      '<li>All assignments need to be uploaded to GitHub to receive the full credit.</li>' +
      '<li>Every Assignmnt will have an invitation link.</li>' +
      '<li>The lowest  1 to 2 assignments with the lowest grade will be dropped (25%).</li>' +
      '<li>There will be several extra credit assignment throughout the class that will allow you to earn some extra points.</li>' +
      '<li>On top of extra credt assignments, answering questions on Slack and class participation can be given extra credit points.</li>' +
      '<li>Write your own code, the more code you write the better you will learn.</li>' +
      '<li>Ask questions, if you didn\'t understand something, chances are there are more people with the same question, ask it! </li>' +
      '<li>We are going to cover some very complicated topics, if you are struggling with a specific topic,' +
      ' come to one of the office hours or contact me for an appointment.</li>' +
      '</ul>',
  links: [
    {
      name: 'Syllabus',
      description: 'The class Syllabus.',
      path: 'https://www.cdm.depaul.edu/academics/pages/classinfo.aspx?term=20221&classNbr=4267&fid=1024009'
    }, {
      name: 'Class Code',
      description: 'The link to the class code repo.',
      path: 'https://github.com/CDM-ujanko/class-code-IT339-F-21-22'
    }, {
      name: 'Node.js Web Development, Server-side web development made easy with Node 14 using practical examples, 5th Edition',
      description: 'The Book',
      path: 'https://g.co/kgs/hgDcZw'
    }, {
      name: 'Book Code',
      description: 'The Git repo with all of the code from the book.',
      path: 'https://github.com/PacktPublishing/Node.js-Web-Development-Fifth-Edition'
    }, {
      name: 'Git Handbook',
      description: 'Git Basics refresher',
      path: 'https://guides.github.com/introduction/git-handbook/'
    }, {
      name: 'Final Project',
      description: 'The link to the final project repo',
      path: 'https://classroom.github.com/a/zuYaAxGg'
    }
  ],
  lectures: [
    {
      name: 'Week 1',
      hash: 'week1',
      description: 'Read chapeters 1: About Node.js and 2: Setting up Node.js, pages 27 to 71' +
          '<p>Before starting with this class make sure you have ' +
          '<a href="https://git-scm.com/downloads">Git</a> and <a href="https://nodejs.org/en/">NodeJS</a> installed.</p>' +
          '<h3>Instalation</h3>' +
          '<h4>macOS</h4>' +
          '<p>The easies way to install macOS is via <a href="https://brew.sh/">Homebrew.</a>' +
          ' after that you can run:' +
          '<pre><code>' +
          'brew install node@14' +
          '</code></pre>' +
          'The book uses Node.js 14 but the lastst will work as well, (just omit the @14)</p>' +
          '<h4>Windows</h4>' +
          '<p>Just go to <a href="https://nodejs.org/en/download/">Download Node.js</a>, download ' +
          'the LTS installer, and follow the instuctions.</p>' +
          '<h3>Node.js</h3>' +
          '<p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network' +
          ' applications. While it is the same programming language, the JavaScipt that runs in the Node.js does ' +
          'not have the same features as the brower (DOM API). HTML, SVG, or XML documents as objects are not' +
          ' part of the core JavaScript language.</p>' +
          '<p>Node.js has beein growing in popularity over the recent years, and it currently used by ' +
          'companies such as Walmart, PayPal, LinkedIn, etc. Look at <a href="https://nodesource.com/node-by-numbers" target="_blank"> Node source</a>' +
          ' to see some download stats for nodeJS. </p>' +
          '<h3>The event Loop</h3>' +
          '<p>The event loop is what allows Node.js to perform non-blocking I/O operations — despite the ' +
          'fact that JavaScript is single-threaded — by offloading operations to the system ' +
          'kernel whenever possible.\n' +
          '\n' +
          'Since most modern kernels are multi-threaded, they can handle multiple operations executing ' +
          'in the background. When one of these operations completes, the kernel tells Node.js so that the' +
          ' appropriate callback may be added to the poll queue to eventually be</p>' +
          '<p>For more read <a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/">What is the Event Loop?</a></p>' +
          '<h3>Callbacks and scope</h3>' +
          '<p>A callback function, is a function that is passed as an argument to another function; ' +
          'that function is expected to call back (execute) the argument when some sort of event happens.' +
          ' A click handler is an example of this.</p>' +
          '<p>JavaScript has function scope: Each function creates a new scope. ' +
          'Scope determines the accessibility (visibility) of these variables. Variables defined inside' +
          ' a function are not accessible (visible) from outside the function.</p>' +
          '<h4>Arrow functions</h4>' +
          '<p><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Arrow Functions</a>' +
          ' is a compact alternative to a traditional function expression,<b> () => {}</b> in js do not have their own bindings to this or super.</p>' +
          '<h4>var vs let</h4>' +
          '<p>Variables declared with let have their scope in the block for which they are defined, as well as in any contained sub-blocks. ' +
          'In this way, let works very much like var. The main difference is that the scope of a var variable is the entire enclosing function.</p>' +
          '<p>Variables declared with var are moved to the top of the current scope (to the top of the current script or the current function).' +
          ' This is referred to as <i>hoisting</i></p>' +
          '<h4>Strict Mode</h4>' +
          '<p>To enable strict mode you should begin your script with <b>\'use strict\'</b> (single or double quotes).</p>' +
          '<p>Without strict mode mistyping a variable name creates a new global variable. In strict mode,' +
          ' this will throw an error, making it impossible to accidentally create a global variable.</p>' +
          '<p>For more go read <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode">this article</a></p>' +
          '<h3>The file system</h3>' +
          '<p>For interacting with the file system we will be using node FS module. For more on the ' +
          'module reference the <a href="https://nodejs.org/api/fs.html#fs_file_system" target="_blank">File System documentations.</a></p>' +
          '<pre><code>' +
          'const fs = require(\'fs\');\n' +
          '</code></pre>' +
          '<p>It is good practice to declare modules with `const` as they will not change.</p>' +
          '<h3>Commandline arguments</h3>' +
          '<p>You can access the arguments of your executing program under <b>process.argv</b> where the' +
          ' first two arguments are going to be node and the full path of the program being executed.</p>' +
          '<h3>Watching files</h3>' +
          '<p>Watching a file in node is as simple as invoking the watch function on the fs module:</p>' +
          '<pre><code>' +
          'const fs = require(\'fs\');\n' +
          'fs.watch(FILENAME, CALLBACK)' +
          '</code></pre>' +
          '<p>The first argument is the file to watch and the second is the callback to execute when a change has happened.</p>' +
          '<h3>Event emitter</h3>' +
          '<p>The <a href="https://nodejs.org/api/events.html#events_class_eventemitter" target="_blank">EventEmitter' +
          ' Class</a> provides a way to dispatch and capture events. Streams inherit from the EventEmitter.</p>' +
          '<h3>Reading and writing files</h3>' +
          '<p>For reading and writing files we use the fs readFile and writeFile</p>' +
          '<pre><code>' +
          'fs.readFile(FILE_NAME, CALLBACK);\n' +
          'fs.writeFile(FILENAME, CONTENT, CALLBACK)' +
          '</code></pre>' +
          '<p><a href="https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback">Read File documentation</a></p>' +
          '<p><a href="https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback">Write File documentation</a></p>',
      assignments: [{
        name: 'Assignment 1',
        description: '<ul>' +
            '<li>Go to the assignment page and accept in.</li>' +
            '<li>Read the README.md for the assignment instructions.</li>' +
            '<li>Clone the assignment to your computer</li>' +
            '<li>To submit you can use:</li>' +
            '<li><pre><code>' +
            'git add --all\n' +
            'git commit -m "I did assignment 1"\n' +
            'git push</code></pre>' +
            '</ul> ',
        due: 'Monday September 20<sup>th</sup> 10:10 AM',
        link: 'https://classroom.github.com/a/I8LgKflv'
      }]
    }, {
      name: 'Week 2',
      hash: 'week2',
      description: 'Read chapeters 3: Exploring Node.js modules, pages 72 to 130' +
          '<h3>Node Package Manger (npm)</h3>' +
          '<p>In a general sense a package manager is a programming language\'s tool to create project ' +
          'environments and easily import external dependencies. When you install node it comes with npm,' +
          ' and you can use it in the terminal the just by typing in <b>npm</b></p>' +
          '<p>Package manages are not a js idea, they exist in just about every language, composer for ' +
          'php, pip for python, even some OS have their own (yum, apt-get, brew). </p>' +
          '<p>Node is both the package manger (the command line tool) and the repo for hosting ' +
          'the packages <a href="https://npmjs.com" target="_blank">npm.org</a>, very similar to the distinction between git and GitHub.</p>' +
          '<p>To start using npm go to the project repository and type in <b>npm init</b> ' +
          'after filling in the prompts, you will see a package.json file has been created with some basic info ' +
          'of your project and its dependencies. All the dependencies will be in a node_modules directory, never commit this directory.</p>' +
          '<p>For a full list of available setting in package.json go <a href="https://docs.npmjs.com/files/package.json" target="_blank">here</a>.</p>' +
          '<p>To install a npm package and use it in your project you should run:</p>' +
          '<pre><code>' +
          'npm install PACKAGE_NAME' +
          '</code></pre>' +
          '<p>This will install the latest version of the package. If for example you do <b>npm install --save-dev mocha</b>' +
          ' you will see something like "mocha": "^8.1.3 in your dev Dependencies of package.json. ' +
          'The carrot stand for the latest minor version grater than 8.1.3. The number 8 stand for ' +
          'major release (not backwards comparable), 1 for minor releases (adds functionality), 3 for patch (bug fixes).</p>' +
          '<p>Be mindful of the fact that your dependencies can and will have additional dependencies. ' +
          'Event thought your code might not have a bug or a vulnerability a dependency might, always ' +
          'look if the package is maintained, what dependencies it will bring into' +
          ' your project, at how popular it is, and last and most importantly, make sure you are ' +
          ' up to date on the latest bug fixes and patches. </p>' +
          '<h3>JavaScript Modules</h3>' +
          '<p>Are mechanisms for splitting JavaScript programs up into separate modules that can ' +
          'be imported when needed. In recent years the using modules has become available in the browers as well,' +
          ' node has had that abillity for years. CommonJS <a href="https://nodejs.org/en/knowledge/getting-started/what-is-require/">Require</a>' +
          '<pre><code>' +
          'const fs = require(\'fs\');' +
          '</code></pre></p>' +
          '<p>ES modules are a more standard way to use modueles and Since Node v12 (April 2019),' +
          ' support for ES modules is enabled by default.</p>' +
          '<h4>Export</h4>' +
          '<p>We can write JS files that hadle one type of logic of an application or are a standlone module.' +
          '<pre><code>' +
          '// module.mjs\n' +
          'function private() {}\n\n' +
          'function square(x) {\n' +
          '  return x * x;\n' +
          '}\n' +
          '\n' +
          'function timesTwo(x) {\n' +
          '  return x * 2;\n' +
          '}\n\n' +
          'export { square, timesTwo };' +
          '</code></pre></p>' +
          '<h4>Import</h4>' +
          '<p>From the above ecample we can import by doing:' +
          '<pre><code>' +
          'import { * } from \'./module.mjs\';\n' +
          '</code></pre></p>' +
          '<p>The * will import everyhting the module.mjs, and we will have <b>square</b> and <b>timesTwo</b> ' +
          'function available but not <b>private</b>, because it is never exported. We can also pick what' +
          ' we want to export by doing:' +
          '<pre><code>' +
          'import { timesTwo } from \'./module.mjs\';\n' +
          '</code></pre>' +
          'Now we only have the <b>timesTwo</b> function.' +
          '</p>' +
          '<h4>Named exports vs default exports</h4>' +
          '<p>The above example is a named export we can also have default exports if we ' +
          'only have one:' +
          '<pre><code>' +
          '// module.mjs\n' +
          'function timesTwo(x) {\n' +
          '  return x * 2;\n' +
          '}\n\n' +
          'export default timesTwo;' +
          '</code></pre></p>' +
          '</p>' +
          '<p>Than to imort:' +
          '<pre><code>' +
          'import myFunctionName from \'./module.mjs\';\n' +
          '</code></pre>' +
          '</p>' +
          '<p>Named exports are useful to export several values. During the import, one will be able' +
          ' to use the same name to refer to the corresponding value.<p>' +
          '<p>Concerning the default export, there is only a single default export per module. ' +
          'A default export can be a function, a class, an object or anything else. ' +
          'This value is to be considered as the “main” exported value since it will be the ' +
          'simplest to import. For more look at the ' +
          '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export" target="_blank">documentation</a></p>'
    }, {
      name: 'Week 3',
      hash: 'week3',
      description: 'Read chapter 4: HTTP Servers and Clients, pages 130 to 185' +
          '<h3>JavaScript Classes</h3>' +
          '<p>Classes are a template for creating objects. They encapsulate data with code to ' +
          'work on that data. We can declare classes in JavaScipt:' +
          '<pre><code>' +
          'class Rectangle {\n' +
          '  constructor(height, width) {\n' +
          '    this.height = height;\n' +
          '    this.width = width;\n' +
          '  }\n' +
          '}\n' +
          '</code></pre></p>' +
          '<p>The above creates a new rectange class, we can create an instance of it by doing:' +
          '<pre><code>' +
          'const rect = new Rectangle(10, 10)' +
          '</code></pre>' +
          '</p>' +
          '<h3>Extending classes</h3>' +
          '<p>We can use extends to create a new class that will have all the sam methods and' +
          ' properties as the class we are extending from. We can also add new properties or' +
          ' overwrite existing methods.' +
          '<pre><code>' +
          'class Square extends Rectangle {\n' +
          '  #side;\n' +
          '\n' +
          '  constructor(side) {\n' +
          '    super(side, side);\n' +
          '    this.#side = side;\n' +
          '  }\n' +
          '}\n' +
          '</code></pre> ' +
          'Now when we create a square, it calls, super (Rectange) the classes it extends from' +
          ' and passes its side as both sides.</p>' +
          '<h3>Event Emitter</h3>' +
          '<p>The same way the frowser has the API, that allows us to use things like the click,' +
          ' keydown and input events, we can use the node <a href="https://nodejs.org/api/events.html">events module</a>' +
          ' to create our won evnts.' +
          '<pre><code>' +
          'import {EventEmitter} from \'events\';\n\n' +
          'let emitter = new EventEmitter();\n' +
          '\n' +
          'emitter.on(\'myEvent\', () => {\n' +
          '  console.log(\'event happened!\');\n' +
          '})\n' +
          '\n' +
          'emitter.emit(\'myEvent\');' +
          '</code></pre>' +
          'As long as we have the refference to the emitter, we can emit an event and anyone listening will be notified.' +
          'The frst argument is the name of the event and the rest are the payload. </p>' +
          '<h3>Http Server</h3>' +
          '<p>We can use the bult in http node module to create a simple http server with:' +
          '<pre><code>' +
          'import * as http from \'http\';\n' +
          '\n' +
          'const server = http.createServer();\n' +
          'const PORT = 4000;\n' +
          'const HOST = \'127.0.0.1\';\n' +
          '\n' +
          'server.on(\'request\', (req, resp) => {\n' +
          '  console.log(req);\n' +
          '  resp.writeHead(\'200\', \'Content Type: text/plain\');\n' +
          '  resp.end(\'Hello World! \\n\');\n' +
          '});\n' +
          '\n' +
          'server.listen(PORT, HOST);\n' +
          'console.log(`Server running on http://${HOST}:${PORT}`)' +
          '</code></pre>' +
          'This create a simple page when we go to http://localhost:4000. ' +
          'For more look at the <a href="https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener">documentation</a></p>',
      assignments: [{
        name: 'Assignment 2',
        description: '<ul>' +
            '<li>Go to the assignment page and accept in.</li>' +
            '<li>Read the README.md for the assignment instructions.</li>' +
            '<li>Clone the assignment to your computer</li>' +
            '<li>To submit you can use:</li>' +
            '<li><pre><code>' +
            'git add --all\n' +
            'git commit -m "I did assignment 2"\n' +
            'git push</code></pre>' +
            '</ul> ',
        due: 'Monday October 4<sup>th</sup> 10:10 AM',
        link: 'https://classroom.github.com/a/vqzd-t8t'
      }]
    }, {
      name: 'Week 4',
      hash: 'week4',
      description: 'Continue reading chapter 4 (Express): HTTP Servers and Clients, pages 130 to 185' +
          '<h3>Express and Node.js</h3>' +
          '<p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.' +
          'With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.</p>' +
          '<p>Setting up a skelleton express app:</p>' +
          '<pre><code>' +
          '// Create express app\n' +
          'var express = require("express")\n' +
          'var app = express()\n' +
          '\n' +
          '// Server port\n' +
          'var HTTP_PORT = 8000 \n\n' +
          '// Start server\n' +
          'app.listen(HTTP_PORT, () => {\n' +
          '    console.log("Server running on port PORT"\n);' +
          '});\n\n' +
          '// Root endpoint\n' +
          'app.get("/", (req, res, next) => {\n' +
          '    res.json({"message":"Ok"})\n' +
          '});' +
          '</code></pre>' +
          '<h3>npx</h3>' +
          '<p>Executes &lt;command> either from a local node_modules/.bin, or from a central cache,' +
          ' installing any packages needed in order for &lt;command> to run.' +
          ' By default, npx will check whether &lt;command> exists in $PATH, or in the local project' +
          ' binaries, and execute that. If &lt;command> is not found, it will be installed prior to execution.</p>' +
          '<p>For more read the <a href="https://www.npmjs.com/package/npx">documentation</a></p>' +
          '<h3>Express application generator</h3>' +
          '<p>We can use the express application generatop ro quickly create an application skelleton ' +
          '(if you installed express generator globally, use <b>npx express-generator</b> otherwise):' +
          '<pre><code>' +
          'express --view=hbs --git' +
          '</pre></code>' +
          'For help:' +
          '<pre><code>' +
          'express --help' +
          '</pre></code>' +
          'For more look at the <a href="https://expressjs.com/en/starter/generator.html">documentation' +
          '</a></p>' +
          '<h3>HTTP Methods</h3>' +
          '<h4>GET</h4>' +
          '<p>GET requests do not change the state of the resource, these are said to be safe methods. ' +
          'GET requests do not have a body so they have a size limit, the size of the url string (2048).' +
          ' Every tome you got to a web page you are doing a GET request. </p>' +
          '<h4>POST</h4>' +
          '<p>The POST verb is most-often utilized to create new resources. POST carries request parameter in message body.</p>' +
          '<h4>PUT</h4>' +
          '<p>The PUT method replaces the current object with the one we are sending in the body.' +
          ' To use the PUT we have to know the full path of the recourse.</p>' +
          '<h4>DELETE</h4>' +
          '<p>The DELETE method deletes the specified resource.</p>' +
          '<h3>Postman</h3>' +
          '<p>Postman makes issuing HTTP requests very easy, without writing any code. ' +
          'It comes in handy for testing APIs. You can download ' +
          '<a href="https://www.postman.com/" target="_blank">the App</a> or the ' +
          '<a href="https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop//%40" target="_blank">Chrome extension.</a></p>' +
          '<h3>REST</h3>' +
          '<p>Stands for REpresentational State Transfer. It is an architecture style for ' +
          'designing loosely coupled applications over HTTP, that is often used in the development of web services.' +
          ' REST does not enforce any rule regarding how it should be implemented at lower level, ' +
          'it just put high level design guidelines and leave you to think of your own implementation.</p>' +
          '<p>For more on rest look at <a href="https://restfulapi.net/rest-architectural-constraints/"> this article</a>.</p>' +
          '<h3>Building a simple rest API with node NodeJS and Express.</h3>' +
          '<p>In Order for out application to be able to consume data we are going to need a module for sending ajax requests,' +
          ' if you already have jQuery in your project you can use it, or something like <a href="https://github.com/axios/axios" target="_blank">axios</a>.</p>' +
          '<p>Minimum required for the API: </p>' +
          '<pre><code>' +
          '// Create express app\n' +
          'var express = require("express")\n' +
          'var app = express()\n' +
          '\n' +
          '// Server port\n' +
          'var HTTP_PORT = 8000 \n\n' +
          '// Start server\n' +
          'app.listen(HTTP_PORT, () => {\n' +
          '    console.log("Server running on port PORT"\n);' +
          '});\n\n' +
          '// Root endpoint\n' +
          'app.get("/", (req, res, next) => {\n' +
          '    res.json({"message":"Ok"})\n' +
          '});' +
          '</code></pre>' +
          '<h3>Express Middleware</h3>' +
          '<p>Middleware functions are functions that have access to the request object (req),' +
          ' the response object (res), and the next function in the application’s request-response cycle.' +
          ' The next function is a function in the Express router which, when invoked, executes the' +
          ' middleware succeeding the current middleware. ' +
          '<a href="http://expressjs.com/en/guide/writing-middleware.html">Documentation</a></p>',
      assignments: [{
        name: 'Assignment 3',
        description: '<ul>' +
            '<li>Go to the assignment page and accept in.</li>' +
            '<li>Read the README.md for the assignment instructions.</li>' +
            '<li>Clone the assignment to your computer</li>' +
            '<li>To submit you can use:</li>' +
            '<li><pre><code>' +
            'git add --all\n' +
            'git commit -m "I did assignment 3"\n' +
            'git push</code></pre>' +
            '</ul> ',
        due: 'Wednesday October 13<sup>th</sup> 10:10 AM',
        link: 'https://classroom.github.com/a/EdLRnV1_'
      }],
    }, {
      name: 'Week 5',
      hash: 'week5',
      description: 'Read chapter 5 and 6: Your First Express Application and Implementing the Mobile-First\n' +
          'Paradigm pages 185 to 260\'' +
          '<h3>Async await</h3>' +
          '<p>More recent additions to the JavaScript language are async functions and the await keyword,' +
          ' added in ECMAScript 2017. These features basically act as syntactic sugar on top of promises,' +
          ' making asynchronous code easier to write and to read afterwards. They make async code ' +
          'look more like old-school synchronous code, so they\'re well worth learning. </p>' +
          '<p>An async function is a function declared with the async keyword, and the await ' +
          'keyword is permitted within them. The async and await keywords enable asynchronous,' +
          ' promise-based behavior to be written in a cleaner style, avoiding the need to explicitly ' +
          'configure promise chains.</p>' +
          '<p>The await expression causes async function execution to pause until a Promise is settled' +
          ' (that is, fulfilled or rejected), and to resume execution of the async function after fulfillment. ' +
          'When resumed, the value of the await expression is that of the fulfilled Promise.</p>' +
          '<p>If the Promise is rejected, the await expression throws the rejected value.<p>' +
          '<p>If the value of the expression following the await operator is not a Promise, it\'s converted to a resolved Promise.</p>' +
          '<p>For more read the look at <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await">this article</a></p>' +
          '<h3>Pyramid of doom</h3>' +
          '<p>When we have asunc callback functions that depaned on oneanother we very quickly ' +
          'start weitting code that looks like:' +
          '<pre><code>' +
          'function1((data1) => {\n' +
          '  if (data1.err) { // handle error 1 }\n' +
          '  function2((data2) => {\n' +
          '    if (data2.err) { // handle error 2 }\n' +
          '      function3((data3) => {\n' +
          '        if (data3.err) { // handle error 3 }\n' +
          '        // we can finally use data3\n' +
          '      })\n' +
          '  })' +
          '})' +
          '</code></pre>' +
          'Promisses dicussed in previus lectures and async and await help us write code that works ' +
          'the same as before, just much easier to read, undersand and debug.</p>',
      assignments: [{
        name: 'Assignment 4',
        description: '<ul>' +
            '<li>Go to the assignment page and accept in.</li>' +
            '<li>Read the README.md for the assignment instructions.</li>' +
            '<li>Clone the assignment to your computer</li>' +
            '<li>To submit you can use:</li>' +
            '<li><pre><code>' +
            'git add --all\n' +
            'git commit -m "I did assignment 3"\n' +
            'git push</code></pre>' +
            '</ul> ',
        due: 'Monday October 18<sup>th</sup> 10:10 AM',
        link: 'https://classroom.github.com/a/nVyDNJSH'
      }]
    }, {
    name: 'Week 6',
    hash: 'week6',
    description: 'Read chapter 7: Data Storage and retrieval, pages 261 to 311' +
        '<h3>Data sotrage and retreval</h3>' +
        '<p>The way you store data will be dependent on the type of application you are writting,' +
        ' the size of the dataset, frequency of writes/reads. We will cover a few in class but here is a list of' +
        ' ones suported by <a href="https://expressjs.com/en/guide/database-integration.html">express</a>.</p>' +
        '<p>An important thing to remember is that getting data from a database in not instantaneous,' +
        ' it has to be done via asynchronous requests. We need to deal with the fact that we do not have the data when' +
        ' the user is requesting it. We can call asynchronous requests with this in one of 3 ways,' +
        ' callbacks, promises or async/await</p>' +
        '<h4>SQLite and MySql</h4>' +
        '<p>When working with SQL database we need to write queries. ' +
        'There are many tools out there, but <a href="https://dbeaver.io/?ref=eversql.com">DBeaver</a> and <a href="https://www.sequelpro.com/">Sequel Pro</a> are two that are Free to use.</p>' +
        '<p>If you have a JetBrains (student) account <a href="https://jetbrains.com/datagrip/">DataGrip</a> is also a good option.</p>' +
        '<h4>Connection to mysql</h4>' +
        '<p>After installing MySql make not of the port the service is running at, 3306 is the ' +
        'default and the default user is root root. Only use the default user for dev setup. </p>' +
        '<pre><code>' +
        'mysql.createConnection({\n' +
        '      host: \'localhost\',\n' +
        '      user: \'root\',\n' +
        '      password: \'root\',\n' +
        '      database: \'YOUR_DB_NAME\'\n' +
        '    });' +
        '</code></pre>' +
        '<p>After you have the connection you can use the query method to fetch and manipulate the data.</p> ' +
        '<pre><code>' +
        'connection.query(\'SELECT * FROM notes;\', callback)\n' +
        '</code></pre>' +
        '<p>For more read the documentation: <a href=" https://github.com/mysqljs/mysql">https://github.com/mysqljs/mysql</a></p>' +
        '<h3>SQLite</h3>' +
        '<p>The queries for sqllite are going to be exactly the same as the ones for mysql, the only difference is in the way we connect.' +
        '<pre><code>' +
        'var sqlite3 = require(\'sqlite3\').verbose();\n' +
        'var db = new sqlite3.Database(\':memory:\');\n' +
        '</code></pre>' +
        '</p>' +
        '<p>You can use SQLite as both in memory or you can use the filesystem to presist the data.</p>',
    }, {
      name: 'Week 7',
      hash: 'week7',
      description:
          'Read chapter 8: Authentication users with a microservice, pages 311 to 382' +
          '<h3>MongoDB</h3>' +
          '<p>MongoDB is a NoSQL database, it uses JSON-like documents with optional schemas. ' +
          'It saves us the hastle of having to write SQL.</p>' +
          '<h4>Installing mongo community endition:</h4>' +
          '<p>Follow the instruction from <a href="https://docs.mongodb.com/manual/installation/">this link</a>' +
          ' to install MongoDB community edition for you OS.</p>' +
          '<h4>Compass</h4>' +
          '<p>Similarly to how we use DBeaver, DataGrip, etc. as the GUI tool for MySQL,' +
          ' Compass is a GUI for MongoDB. You can <a href="https://www.mongodb.com/try/download/compass">download it here</a>.</p>' +
          '<h3>Map, Reduce and Filter</h3>' +
          '<p>Are general concepts used for manipulating data, converting one thing into another, or finding what you need in a set of data. </p>' +
          '<h4>Map</h4>' +
          '<p>A map function takes an array and returns a new array with the mapper function applied to every element.</p>' +
          '<pre><code>' +
          '[1, 2, 4].map((x) x * 2);\n' +
          '// Will return ' +
          '[2, 4, 8]' +
          '</code></pre>' +
          '<h4>Filter</h4>' +
          '<p>A filter function takes an array and returns a new array that is a subset of the original one.' +
          ' This is done by applying a function to every element that returns a boolean.' +
          ' If the function evaluates the element to true the element is placed into the new array or skipped otherwise.</p>' +
          '<pre><code>' +
          '[1, 2, 4].filter((x) => x > 2);\n' +
          '// Will return ' +
          '[4]' +
          '</code></pre>' +
          '<h4>Reduce</h4>' +
          '<p>A reduce function takes an array and returns a single element. Sum or join are both examples of reducer functions.</p>' +
          '<pre><code>' +
          '// The second param is the starting value.\n' +
          '[1, 2, 4].reduce((acc, x) => acc + x, 0);\n' +
          '// Will return ' +
          '7' +
          '</code></pre>',
      assignments: [{
        name: 'Assignment 5',
        description: '<ul>' +
            '<li>Go to the assignment page and accept in.</li>' +
            '<li>Read the README.md for the assignment instructions.</li>' +
            '<li>Clone the assignment to your computer</li>' +
            '<li>To submit you can use:</li>' +
            '<li><pre><code>' +
            'git add --all\n' +
            'git commit -m "I did assignment 5"\n' +
            'git push</code></pre>' +
            '</ul> ',
        due: 'Monday November 1<sup>st</sup> 10:10 AM',
        link: 'https://classroom.github.com/a/ng2jsBY2'
      }]
    }, {
      name: 'Week 8',
      hash: 'week8',
      description: '<h3>Axios</h3>' +
          '<p>Promise based HTTP client for the browser and node.js. We can use it to send http requests,' +
          ' its a more modern alternative to the request module. For more go to the <a href="https://github.com/axios/axios" target="_blank">GitHub Page</a></p>' +
          '<h3>Commander</h3>' +
          '<p>Commander is a node module that makes it very easy to create command-line interfaces. ' +
          'look at <a href="https://www.npmjs.com/package/commander" target="_blank">the documentation</a>for more information.</p>' +
          '<pre><code>' +
          'const program = require(commander);\n' +
          'program\n' +
          '  .option(...)\n' +
          '  .command(...)' +
          '  .parse(process.argv);' +
          '</code></pre>' +
          '<p>You can make your commander program as simple/complicated as you want but you must pass' +
          ' the node arguments to its process method in order to work.</p>' +
          '<h4>Node Passport</h4>' +
          '<p>Passport is authentication middleware for Node. It is designed to serve a singular purpose: ' +
          'authenticate requests. When writing modules, encapsulation is a virtue, so Passport delegates ' +
          'all other functionality to the application. This separation of concerns keeps code clean and maintainable,' +
          ' and makes Passport extremely easy to integrate into an application.</p>' +
          '<pre><code>' +
          'npm install passport passport-jwt' +
          '</code></pre>' +
          '<p>For a full documentation go to <a href="http://www.passportjs.org/docs/">http://www.passportjs.org/docs/</a> </p>' +
          '<h4>Using JWT as Identity Provided</h4>' +
          '<p>After we have issued a token to the user we can use the <b>ExtractJwt</b> to get the token and add validation to any of our endpoints. </p>',
      assignments: [{
        name: 'Assignment 6',
        description: '<ul>' +
            '<li>Go to the assignment page and accept in.</li>' +
            '<li>Read the README.md for the assignment instructions.</li>' +
            '<li>Clone the assignment to your computer</li>' +
            '<li>To submit you can use:</li>' +
            '<li><pre><code>' +
            'git add --all\n' +
            'git commit -m "I did assignment 5"\n' +
            'git push</code></pre>' +
            '</ul> ',
        due: 'Wednesday November 10<sup>st</sup> 10:10 AM',
        link: 'https://classroom.github.com/a/J2Y4q4q5'
      }]
    }, {
      name: 'Week 9',
      hash: 'week9',
      description: 'Read chapter Unit Testing and Functional Testing pages 609 - 627' +
          '<h3>Mocha with Chai</h3>' +
          '<p>Chai is a BDD / TDD assertion library for nodeJS, it makes writing tests much easier and readable.' +
          'Everything you would use Chai for can be done in mocha without it, it just makes writing and reading the tests much easier. </p>' +
          '<pre><code>' +
          'const expect = chai.expect;\n' +
          '\n' +
          'expect(foo).to.be.a(\'string\');\n' +
          'expect(foo).to.equal(\'bar\');\n' +
          'expect(foo).to.have.lengthOf(3);\n' +
          'expect(tea).to.have.property(\'flavors\')\n' +
          '  .with.lengthOf(3);</code></pre>' +
          '<h3>Testing with mocha</h3>' +
          '<p>To start using mocha you need to do:</p>' +
          '<pre><code>' +
          'npm install --save-dev mocha' +
          '</code></pre>' +
          '<p>The save dev flag will only require that module for development, our end users' +
          ' will never run tests and therefore we do not need it in the production version of our code,' +
          ' unlike something like moment or jQuery.</p>' +
          '<p>All the tests need to be in a <i>test</i> directory, and we need to add the following to our package.json</p>' +
          '<pre><code>' +
          '  "scripts": {\n' +
          '    "test": "mocha"\n' +
          '  },' +
          '</code></pre>' +
          '<p>To run the test open the terminal in the project folder and:</p>' +
          '<pre><code>' +
          'npm run test' +
          '</code></pre>' +
          '<p>For a full list of available methods and features' +
          ' go to the <a href="https://mochajs.org/" target="_blank"> mocha documentation</a></p>',
      assignments: [{
        name: 'Final Project',
        description: '' +
            '<p>Finish your work on the final project. Use the class code as examples and feel free to ' +
            'ask any question or join office hours before the deadline. For the full requirements look' +
            ' at the README.md but your finals project should:</p>' +
            '<ul>' +
            '<li>Look and feel like a website, it should look and work like a finished site.</li>' +
            '<li>Extra credit will be awarded to students that provide a link to the live site and that go beyond the original requirements.</li>' +
            '<li><pre><code>' +
            'git add --all\n' +
            'git commit -m "Done with this class!"\n' +
            'git push</code></pre>' +
            '</ul> ',
        due: 'Sunday November 28<sup>st</sup> 23:59',
        link: 'https://classroom.github.com/a/zuYaAxGg'
      }]
    }, {
      name: 'Week 10',
      hash: 'week10',
      description: 'Read chapeter 11: Deploying Node.js Microservices with Docker' +
          '<h3>Docker</h3>' +
          '<p>Docker is a set of platform as a service products that use OS-level virtualization to ' +
          'deliver software in packages called containers. Containers are isolated from one another' +
          ' and bundle their own software, libraries and configuration files; they can ' +
          'communicate with each other through well-defined channels.' +
          '<pre><code>' +
          '// Build the dokcer containers:\n' +
          'docker compose build\n\n' +
          '// access the container:\n' +
          'docker exec -it CONTAINER ID /bin/sh \n\n' +
          '// Build, recreate, start and attach the containers\n ' +
          'docker compose up ' +
          '</code></pre>' +
          '</p>' +
          '<a href="https://docs.docker.com/engine/reference/commandline/compose_up/">Documentation</a>' +
          '<h4>Dockerfile</h4>' +
          '<p>Docker can build images automatically by reading the instructions from a Dockerfile. ' +
          'A Dockerfile is a text document that contains all the commands a user could call on the' +
          ' command line to assemble an image. Using docker build users can create an automated build' +
          ' that executes several command-line instructions in succession.</p>' +
          '<a href="https://docs.docker.com/engine/reference/builder/">Documentation</a>' +
          '<h4>Docker compose file</h4>' +
          '<p>Compose is a tool for defining and running multi-container Docker applications. ' +
          'With Compose, you use a YAML file to configure your application’s services. ' +
          'Then, with a single command, you create and start all the services from your configuration. </p>' +
          '<a href="https://docs.docker.com/compose/compose-file/">Documentation</a>' +
          '<h3>Deploying to a server</h3>' +
          '<p>Make sure you look at <a href="https://education.github.com/pack" target="_blank">Github Student Developer Pack</a> ' +
          'before you start paying for different parts of your application, it offers a lot of stuff for free,' +
          ' including a $50 dollar credit with Digital Ocean.</p>' +
          '<h3>Buy a box - hosting service</h3>' +
          '<p>In order to make our sites publicly accessable, we need a hosting service. ' +
          'A box with a static IP that is going to have a high uptime where we can put our app and Database.</p>' +
          '<p>There is a bunch of hosting providers out there, and you can take your pick, for the in class example we will be using Digital Ocean</p>' +
          '<h4>Loggin into the box</h4>' +
          '<p>After you bou your hosting you will get a user and an IP address.' +
          'For login into the box we will be using the ssh command:</p>' +
          '<pre><code>' +
          'ssh user@IP_ADDRESS' +
          '</code></pre>' +
          '<h4>Installing apache</h4>' +
          '<pre><code>' +
          '// Updating the local package index\n' +
          'sudo apt update\n\n' +
          '// Install apache\n' +
          'sudo apt install apache2\n\n' +
          '</code></pre>' +
          '<h4>Adjusting the firewall</h4>' +
          '<p>We need to expose port 80 (HTTP) before our sire can be accessed.</p>' +
          '<pre><code>' +
          '// Set firewall rules to allow apache on port 80\n' +
          'sudo ufw allow \'Apache Full\'\n\n' +
          '// Show the status of apache and make sure everything is running.\n' +
          'sudo systemctl status apache2\n\n' +
          '</code></pre>' +
          '<p>At this point if we go to http://IP_OF_YOUR_BOX you should see the apache example page.</p>' +
          '<h4>Silencing warning</h4>' +
          '<p>If you are seeing a warning saying <i>Could not reliably determine the server’s fully qualified domain name, using 127.0.1.1 for ServerName“</i>' +
          ' You can do the add this line to the end of your <b>/etc/apache2/apache2.conf</b></p>' +
          '<pre><code>' +
          'ServerName localhost\n' +
          '</code></pre>' +
          '<p>Enable proxy for apache:</p>' +
          '<pre><code>' +
          'sudo a2enmod proxy\n' +
          'sudo a2enmod proxy_http' +
          '</code></pre>' +
          '<p>Next we need to create a new site config file in our <b>/etc/apache2/sites-available/SITE-NAME.conf</b> and paste in:</p>' +
          '<pre><code>' +
          '&lt;VirtualHost *:80>\n' +
          '    ServerAdmin webmaster@localhost\n' +
          '    ServerName SITE-NAME.com\n' +
          '    ServerAlias www.SITE-NAME.com\n' +
          '    DocumentRoot /var/www/html\n' +
          '    ErrorLog &#36;{APACHE_LOG_DIR}/error.log\n' +
          '    CustomLog &#36;{APACHE_LOG_DIR}/access.log combined\n' +
          '    ProxyRequests Off\n' +
          '    ProxyPreserveHost On\n' +
          '    ProxyVia Full\n' +
          '    &ltProxy *>\n' +
          '       Require all granted\n' +
          '    &lt/Proxy>\n' +
          '\n' +
          '   &ltLocation />\n' +
          '      ProxyPass http://127.0.0.1:3000/\n' +
          '      ProxyPassReverse http://127.0.0.1:3000/\n' +
          '   &lt/Location>' +
          '    &ltDirectory "/var/www/FOLDER">\n' +
          '        AllowOverride All\n' +
          '    &lt/Directory>' +
          '&lt;/VirtualHost>' +
          '</pre></code>' +
          '<p>Sites in apache can be enabled and disabled with:</p>' +
          '<pre><code>' +
          'a2dissite SITENAME\n\n' +
          'a2ensite SITENAME\n' +
          '</code></pre>' +
          '<p>For the changes to take effect you need to restart apache:</p>' +
          '<pre><code>' +
          'sudo systemctl restart apache2' +
          '</code></pre>' +
          '<h3>Using FTPS to transfer the files.</h3>' +
          '<p>We want to take user <b>notes</b> directory ' +
          'and place all of its content to <b>/var/www/notes</b> using an FTP clien. You can use ' +
          'what ever client you want, FileZila is a good cross-platform one. You will need an IP of your box, ' +
          'a username and a password.</p>' +
          '<p>After this step you should be able to access your app on the IP address of your box.</p>' +
          '<h4>Installing node for the server</h4>' +
          '<pre><code>' +
          '# Using Ubuntu\n' +
          'curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -\n' +
          'sudo apt-get install -y nodejs' +
          '</code></pre>' +
          '<p><a href="https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions-enterprise-linux-fedora-and-snap-packages" target="_blank">Node installation</a>' +
          ' instructions reference (if you want to use a different version of node or a different OS) </p>' +
          '<h4>PM2 process manager</h4>' +
          '<p>In order for us to easily be able to start and stop our node server, we will use PM2.</p>' +
          '<pre><code>' +
          '// Install pm2\n' +
          'sudo npm install -g pm2\n\n' +
          '// Start our server\n' +
          'pm2 start index.mjs\n\n' +
          '</code></pre>' +
          '<p>Because we are using dotenv to load enviroment variables we can preload the dotenv module with:</p>' +
          '<pre><code>' +
          'node -r dotenv/config index.mjs' +
          '</code></pre>' +
          '<p>In order to pass that argument to node from pm to we have to create a new scipt pm.config.js</p>' +
          '<pre><code>' +
          'module.exports = {\n' +
          '  apps : [{\n' +
          '    name      : \'Notes Application\',\n' +
          '    script    : \'index.mjs\',\n' +
          '    node_args : \'-r dotenv/config\',\n' +
          '  }],\n' +
          '}' +
          '</code></pre>' +
          '<p>Now we can run or app with:</p>' +
          '<pre><code>' +
          'pm2 start pm2.config.js' +
          '</code></pre>' +
          '<p>Some useful pm2 commands</p>' +
          '<pre><code>' +
          '// Stop an application with this command (specify the PM2 App name or id):\n' +
          'pm2 stop app_name_or_id\n\n' +
          '// Restart an application with this command (specify the PM2 App name or id):\n' +
          'pm2 restart app_name_or_id\n\n' +
          '// The list of applications currently managed by PM2 \n' +
          'pm2 list\n\n' +
          '// More information about a specific application\n' +
          'pm2 info example\n' +
          '</code></pre>' +
          '<h3>Database</h3>' +
          '<p>Install Mongodb on our server</p>' +
          '<pre><code>' +
          '// import the public GPG key for the latest stable version of MongoDB\n' +
          'curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -\n\n\n' +
          '// Creates a file in the sources.list.d directory named mongodb-org-4.4.list:\n' +
          'echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list\n\n' +
          '// Update\n' +
          'sudo apt update\n\n' +
          '// Install mongodb:\n' +
          'sudo apt install mongodb-org\n\n' +
          '// Start mongodb:\n' +
          'sudo systemctl start mongod.service\n\n' +
          '</code></pre>' +
          '<p>To check the serive is running:</p>' +
          '<pre><code>' +
          'sudo systemctl status mongod' +
          '</code></pre>' +
          '<p>After installing mongodb we need to run a few commands in the mongo shell to create a database:</p>' +
          '<pre><code>' +
          '// Crates a database called it339-notes, replace with what you want to call your DB:\n' +
          'db = db.getSiblingDB(\'it339-notes\');\n' +
          'db.createCollection(\'notes\');\n' +
          'db.notes.insertMany([\n' +
          '  {\n' +
          '    key: \'1\',\n' +
          '    title: \'My First Note\',\n' +
          '    body: \'hello!\'\n' +
          '  }\n' +
          ']);\n' +
          '</code></pre>' +
          '<p>The above is the same script we used to initialize the data in docker</p>' +
          '<h3>Domain</h3>' +
          '<p>Same as hosting, there are a lot of choices for buying a domain. This is completely up to you, ' +
          'you can get a domain for free through you Github Education Pack from name.com</p>' +
          '<p>After you have your domain all you need is to set an A record for it.' +
          'We want to use @ as the name and our IP. You can leave TTL (time to live) as the default.</p>' +
          '<h3>Adding Cert with Let\'s Encrypt</h3>' +
          '<p>Before starting you have to make sure you have two domain A records ' +
          'pointing to your host, one @ and one for www.</p>' +
          '<pre><code>' +
          'sudo add-apt-repository ppa:certbot/certbot\n\n' +
          'sudo apt install python-certbot-apache' +
          '</code></pre>' +
          '<p>After this all we have to do is Obtain the SSL Cert</p>' +
          '<pre><code>' +
          'certbot --apache -d your_domain -d www.your_domain\n' +
          '</code></pre>' +
          '<p>Note: this only adds a cert to the Notes app.</p>' +
          '<h3>Final thoughts</h3>' +
          '<p>There are a lot of ways this can be improved, I encourage you to get a hosting service ' +
          'and break it a few times. Readup on apache or try doing the same thing with nginx. ' +
          'Worst case scenario is you have to redo the steps on this page. ' +
          '<b>Try installing an SSL cert for the rest API</b>, adding a subdomain, etc.</p>',
      assignments: [{
        name: 'Final Project',
        description: '' +
            '<p>Finish your work on the final project. Use the class code as examples and feel free to ' +
            'ask any question or join office hours before the deadline. For the full requirements look' +
            ' at the README.md but your finals project should:</p>' +
            '<ul>' +
            '<li>Look and feel like a website, it should look and work like a finished site.</li>' +
            '<li>Extra credit will be awarded to students that provide a link to the live site and that go beyond the original requirements.</li>' +
            '<li><pre><code>' +
            'git add --all\n' +
            'git commit -m "Done with this class!"\n' +
            'git push</code></pre>' +
            '</ul> ',
        due: 'Sunday November 28<sup>st</sup> 23:59',
        link: 'https://classroom.github.com/a/zuYaAxGg'
      }]
    }
  ]
};

export default IT339_F_21_22;
