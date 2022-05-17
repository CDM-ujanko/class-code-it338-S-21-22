let IT339_F_20_21 = {
  name: 'Server-Side Web Development Frameworks',
  code: 'IT339',
  key: 'IT339-F-20-21',
  term: 'Spring',
  academicYear: '2020-2021',
  location: 'Online',
  time: 'Thursday 5:45PM - 9:00PM',
  active: false,
  description: '<p>Advanced server-side web application servers and services to support' +
    ' MVC architectures and data and resources required in front-end frameworks. ' +
    'Development of server-side application services and APIs using current code libraries ' +
    'and frameworks. Research into application server frameworks and the comparative' +
    ' analysis of strengths, weaknesses, opportunities, and problems.</p>' +
    '<h3>Important things to remember:</h3><ul>' +
    '<li>Because of the current pandemic, our classes are going to be online using' +
    ' <a href="https://depaul.zoom.us/j/958583329" target="_blank">zoom</a> (same room as the office hours).</li>' +
    '<li>All assignments are due before the next class 5:45 PM and no late assignment will be accepted.</li>' +
    '<li>All assignments need to be uploaded to ' +
    '<a href="https://classroom.github.com/classrooms/49106636-it339-f-2020-2021" target="_blank">GitHub</a> to receive the full credit.</li>' +
    '<li>The lowest  1 to 2 assignments with the lowest grade will be dropped ( 25%).</li>' +
    '<li>There will be several extra credit assignment throughout the class that will allow you to earn some extra points.</li>' +
    '<li>Write your own code, the more code you write the better you will learn.</li>' +
    '<li>Ask questions, if you didn\'t understand something, chances are there are more people with the same question, ask it! </li>' +
    '<li>We are going to cover some very complicated topics, if you are struggling with a specific topic,' +
    ' come to one of the office hours or contact me for an appointment.</li>' +
    '</ul>',
  links: [
    {
      name: 'Syllabus',
      description: 'The class Syllabus.',
      path: 'https://www.cdm.depaul.edu/academics/pages/classinfo.aspx?Term=20211&ClassNbr=10555&fid=1024009'
    }, {
      name: 'Class Code',
      description: 'The link to the class code repo.',
      path: 'https://github.com/CDM-ujanko/class-code-it339-F-20-21'
    }, {
      name: 'Node.js 8 the Right Way Practical, Server-Side JavaScript That Scales',
      description: 'The Book',
      path: 'https://www.google.com/books/edition/Node_js_8_the_Right_Way/oA9QDwAAQBAJ?hl=en&gbpv=0'
    }, {
      name: 'Git Handbook',
      description: 'Git Basics refresher',
      path: 'https://guides.github.com/introduction/git-handbook/'
    }
  ],
  lectures: [
    {
      name: 'Week 1',
      hash: 'week1',
      description: 'Read chapter 1 and 2 of the book.' +
        '<p>Before starting with this class make sure you have ' +
        '<a href="https://git-scm.com/downloads">Git</a> and <a href="https://nodejs.org/en/">NodeJS</a> installed.</p>' +
        '<h3>The Event Loop</h3>' +
        '<p>The event loop is what allows Node.js to perform non-blocking I/O operations — despite the ' +
        'fact that JavaScript is single-threaded — by offloading operations to the system ' +
        'kernel whenever possible.\n' +
        '\n' +
        'Since most modern kernels are multi-threaded, they can handle multiple operations executing ' +
        'in the background. When one of these operations completes, the kernel tells Node.js so that the' +
        ' appropriate callback may be added to the poll queue to eventually be</p>' +
        '<h3>Callbacks and scope</h3>' +
        '<p>A callback function, is a function that is passed as an argument to another function; ' +
        'that function is expected to call back (execute) the argument when some sort of an event happens.' +
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
        '<p>It is good practice to declare modules with cost as they will not change.</p>' +
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
        ' Class</a> provides a way to dispatch and capture events.  Streams inherit from the EventEmitter.</p>' +
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
        due: 'Thursday September 17<sup>th</sup> 5:45 PM',
        link: 'https://classroom.github.com/a/GiHkdajs'
      }]
    }, {
      name: 'Week 2',
      hash: 'week2',
      description: 'Read chapter 3 of the book.' +
        '<h3>Networking with Sockets</h3>' +
        '<p>In order to start working with sockets we first need to include the <b>net</b> module from node</p>' +
        '<pre><code>' +
        'const net = require(\'net\');' +
        '</code></pre>' +
        '<p>To create a server you can call the create server method on the net module and tell it to listen on a given port.</p>' +
        '<pre><code>' +
        'let server = net.createServer(CONNECTION_CALLBACK);\n' +
        'server.listen(PORT, CALLBACK);' +
        '</code></pre>' +
        '<p>You can use the nc/telnet commands, or the chat client code from class to connect to the server. ' +
        'Note for windows users: telnet command needs to be enabled Turn Windows Features on and off.</p>' +
        '<h3>Classes</h3>' +
        'Classes in js are created with the class key word:' +
        '<pre><code>' +
        'class Shape {\n' +
        '  constructor(name) {    \n' +
        '    this.name = name;\n' +
        '  }\n' +
        '}' +
        '</code></pre>' +
        '<p>To create an instance of the shape class above you can :</p>' +
        '<pre><code>' +
        'let square = new Shape(\'square\')' +
        '</code></pre>' +
        '<p>Now the square variable is an instance of shape and we can access all properties and methods of Shape on it.</p>' +
        '<p>A class can extend another class:</p>' +
        '<pre><code>' +
        'class Hexagon extends Shape {\n' +
        '  constructor(name) {\n' +
        '  // call the super class constructor and pass in the name parameter\n' +
        '    super(name); \n' +
        '  }' +
        '</code></pre>' +
        '<p>The Hexagon class has on the methods of the shape but it can have its own or overwrite the ones from shape.</p>' +
        '<p>For more on classes reference the ' +
        '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" target="_blank">MDN Class Documentation</a></p>' +
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
        ' go to the <a href="https://mochajs.org/" target="_blank"> mocha documentation</a></p>' +
        '<h3>Windows Subsystem for Linux (Optional)</h3>' +
        '<p>As some of you might have noticed sometimes we run into program that will not run natively ' +
        ' on windows. One solution is to run you node programs in GitBash itself, it emulates a linux like os' +
        ' so it should work for the most part. A more involved and bulletproof way of getting ' +
        'things to work is to use Windows Subsystem For Linux. This creates a Linux virtual environment' +
        ' that runs inside your windows OS, that way you can run all examples from class.</p>' +
        '<p>Follow the instruction <a href="https://www.windowscentral.com/install-windows-subsystem-linux-windows-10" target="_blank">here</a>' +
        'to install WSL, I recommend Ubuntu but any flavor will work.</p>' +
        '<p>After you install WSL you will need install node on it, <a href="https://github.com/nodesource/distributions/blob/master/README.md">here are the instructions</a>.</p>' +
        '<p>All of the windows files will be in <b>/mnt</b> so <b>cd /mnt/c</b> will take you to your C drive.</p>',
      assignments: [{
        name: 'Assignment 2',
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
        due: 'Thursday September 24<sup>th</sup> 5:45 PM',
        link: 'https://classroom.github.com/a/oFLw-xMv'
      }]
    }, {
      name: 'Week 3',
      hash: 'week3',
      description: 'Read chapter 5 and look at chapter 4 of the book.' +
        '<h3>Data format</h3>' +
        '<h4>JSON</h4>' +
        '<p>JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. </p>' +
        '<p>We have already seen json in package.json, the look like js object. To conver them to and from their string format into javascript objects we use the JSON module.</p>' +
        '<pre><code>' +
        'JSON.decode(STRING)\n' +
        'JSON.stringify(STRING)' +
        '</code></pre>' +
        '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON" target="_blank">MDN JSON Documentation</a> ' +
        '<h4>XML</h4>' +
        '<p>Extensible Markup Language (XML) is a markup language that defines a set ' +
        'of rules for encoding documents in a format that is both human-readable and machine-readable.</p>' +
        '<p>XML is very similar to HTML, but you define your own tags and everything that is was open myst be closed.</p>' +
        '<p>HTML is used for display proposes, we display content XML is used for transmitting data.</p>' +
        '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON" target="_blank">MDN XML</a> ' +
        '<h3>Css selector refresher.</h3>' +
        '<p>When working with HTML or XML we often need to get a node from the tree and do something with it.' +
        ' We can do this by targeting the node in the same way we would in css.</p>' +
        '<p>In HTML we would use <b>document.querySelector(SELECTOR)</b> of jQueries <b>$(SELECTOR)</b></p>' +
        '<p>CSS selector can be as simple or as complicate as you want, take a look at ' +
        '<a href="https://www.w3schools.com/cssref/css_selectors.asp">this w3schools guide</a> for css selectors.</p>' +
        '<p>Important thing to note when writing actual css is what rule will be applied if multiple colide,' +
        ' <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" target="_blank">CSS Precedence / CSS Specificity</a></p>' +
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
        '// The second param is the starting value.' +
        '[1, 2, 4].reduce((acc, x) => acc + x, 0);\n' +
        '// Will return ' +
        '7' +
        '</code></pre>' +
        '<h3>Class Notes</h3>' +
        '<p>The book uses curl to fetch the rdf-files, you shouldn\'t have any issues but if yu do' +
        ' you can go directly to the url and download the file.</p>' +
        '<pre><code>' +
        'curl -O http://gutenberg.org/cache/epub/feeds/rdf-files.tar.bz2' +
        '</code></pre>' +
        '<p>The tar command is used to compressing files, tar is available on windows 10 but you can use any archiving tool. </p>' +
        '<pre><code>' +
        'tar -xvjf rdf-files.tar.bz2' +
        '</code></pre>' +
        '<p></p>',
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
        due: 'Thursday October 1<sup>st</sup> 5:45 PM',
        link: 'https://classroom.github.com/a/vkw7oXpf'
      }]
    }, {
      name: 'Week 4',
      description: 'Read chapter 6 of the book.' +
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
        '<h3>Axios</h3>' +
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
        '<h3>Elasticsearch</h3>' +
        '<p>Elasticsearch is a full-text, distributed NoSQL database. is a highly ' +
        'scalable open-source search and analytics engine.' +
        ' It allows you to store, search, and analyze big volumes of data quickly and in near real time.</p>' +
        '<h4>Installation</h4>' +
        '<p>For Windows users:</p>' +
        '<ul><li>Go <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/windows.html" target="_blank">here</a> download the installer.</li>' +
        '<li>Go through the installation and leave all setting as default.</li>' +
        '<li>Elasticsearch will now be installed as a service.</li></ul>' +
        '<p>For Mac users:</p>' +
        '<ul><li>Install <a href="https://brew.sh/" target="_blank">homebrew</a> if you don\'t already have it.</li>' +
        '<li>Go <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/brew.html" target="_blank"> here</a> and follow the homebrew instructions.</li></ul>' +
        '<p>On a Mac you can start it by typing in <b>elasticsearch</b> in the terminal. On Windows it will run automatically.</p>' +
        '<p>By default it runs on <a href="http://localhost:9200" target="_blank"></a>localhost:9200"</p>' +
        '<h4>Elasticsearch url examples</h4>' +
        '<pre><code>' +
        '// Get info about the books index\n' +
        'GET http://localhost:9200/books\n\n' +
        '// Get the book with the id of pg1000\n' +
        'GET http://localhost:9200/books/book/pg1000\n\n' +
        '// Search for the books with author "Twain" and only show the title field\n' +
        'GET http://localhost:9200/_search?q=authors:Twain&_source=title\n\n' +
        '// Get the first 1000 books\n' +
        'GET http://localhost:9200/books/_search?size=1000\n\n' +
        '// Crate/Update the book at id pg1000\n' +
        'PUT http://localhost:9200/books/book/pg1000\n\b' +
        '// Create the index of books\n' +
        'PUT http://localhost:9200/books\n\n' +
        '// Delete the books index\n' +
        'DELETE http://localhost:9200/books\n\n' +
        '// Delete the book with ID of pg1000\n' +
        'DELETE http://localhost:9200/books/book/pg1000\n\n' +
        '// Create a new book, will generate a random id\n' +
        'POST http://localhost:9200/books/book\n\n\n' +
        '// Get the status of current indices\n' +
        'GET http://localhost:9200/_cat/indices?v\n' +
        '</code></pre>',
      hash: 'week4',
      assignments: [{
        name: 'Assignment 4',
        description: '<ul>' +
          '<li>Go to the assignment page and accept in.</li>' +
          '<li>Read the README.md for the assignment instructions.</li>' +
          '<li>Clone the assignment to your computer</li>' +
          '<li>To submit you can use:</li>' +
          '<li><pre><code>' +
          'git add --all\n' +
          'git commit -m "I did assignment 4"\n' +
          'git push</code></pre>' +
          '</ul> ',
        due: 'Thursday October 8th<sup>st</sup> 5:45 PM',
        link: 'https://classroom.github.com/a/Z7VzI1QP'
      }]
    }, {
      name: 'Week 5',
      description: 'Read chapter 7 of the book.' +
        '<h3>Promises</h3>' +
        '<p>Promises are a different, better way of handing asynchronous code. Essentially, a ' +
        'promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.</p>' +
        '<p>Unlike callbacks promises have the following guarantees:</p>' +
        '<ul><li>Callbacks will never be called before the completion of the current run of the JavaScript event loop.</li>' +
        '<li>Callbacks added with then(), as above, will be called even after the success or failure of the asynchronous operation.</li>' +
        '<li>Multiple callbacks may be added by calling then() several times. Each callback is executed one after another, in the order in which they were inserted.</li></ul>' +
        '<p>Because then() function reruns a new promises chaining them is also much simpler than callbacks.</p>' +
        '<h3>Express and node</h3>' +
        '<p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.' +
        'With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.</p>' +
        '<p>Read <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promises</a> ' +
        'and <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await">Async await</a></p>' +
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
        '</code></pre>',
      hash: 'week5',
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
        due: 'Thursday October 15th<sup>st</sup> 5:45 PM',
        link: 'https://classroom.github.com/a/YxhSM7Nw'
      }]
    }, {
      name: 'Week 6',
      description: 'Skim chapter 8 of the book, we will be using Vue in class. ' +
        '<h3>Vue</h3>' +
        '<p>The simples way to add Vue to the page is by adding this script to the html:</p>' +
        '<pre><code>' +
        '// development version, includes helpful console warnings\n' +
        '&lt;script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js">&lt;/script>' +
        '</code></pre>' +
        '<h4>Vue CLI</h4>' +
        '<p> For out example we will be using vue-cli to help us generate a full project with all ' +
        'the bells and whistles, go <a href="https://cli.vuejs.org/guide/installation.html" target="_blank">here</a> and follow the installation instructions. </p>' +
        '<h4>Templating</h4>' +
        '<p>We can use v-if, v-for directives, (more on directives later) to conditionally display or loop over data:</p>' +
        '<pre><code>' +
        '&lt;span v-if="CONDITION">Now you see me&lt;/span>\n' +
        '&lt;ul v-for="item in items">\n' +
        '  &lt;li>{{item}}&lt;/li>\n' +
        '&lt;/ul>' +
        '</code></pre>' +
        '<p>Unlike handlebars or other templating languages vue directives are written like html attributes</p>' +
        '<p>We can use the v-bind directive to bind a specific data property:</p>' +
        '<pre><code>' +
        '// Bind the title attribute to the message value\n' +
        '&lt;span v-bind:title="message">&lt;/span>' +
        '</code></pre>' +
        '<p>We can invoke methods from the template on specific events</p>' +
        '<pre><code>' +
        '// Once this button is clicked the method with the name of METHOD_NAME will be invoked\n' +
        '&lt;button v-on:click="METHOD_NAME">Click me!&lt;/button>\n' +
        '</code></pre>' +
        '<h3>Lifecycle Hooks</h3>' +
        '<p></p>' +
        '<img src="https://vuejs.org/images/lifecycle.png" alt="Vue Lifecycle">' +
        '<h3>Form Input Bindings</h3>' +
        '<p> When crating forms you can use the v-model directive to create two-way data' +
        ' bindings on form input, textarea, and select elements.</p>' +
        '<pre><code>' +
        '// Checkbox example' +
        '&lt;input type="checkbox" id="checkbox" v-model="DATA_VALUE">\n' +
        '&lt;label for="checkbox">{{ DATA_VALUE }}&lt;/label>\n' +
        '</code></pre>' +
        '<p>v-model will ignore the initial value, checked, or selected attributes ' +
        'found on any form elements. It will always treat the Vue instance data as the source of truth.' +
        ' In the example above, the checkbox checked value will be driven by the value of the DATA_VALUE ' +
        'and any html attribute will be ignored.</p>' +
        '<p>We can use the .lazy, .number, .trim modifiers with v-model</p>' +
        '<pre><code>' +
        '// Sync after the change events \n' +
        '&lt;input v-model.lazy="MESSAGE">\n\n' +
        '// Automatically casts to number \n' +
        '&lt;input v-model.number="NUMBER" type=number>\n\n' +
        '//Trims the whitespace from user input \n' +
        '&lt;input v-model.trim="MESSAGE">\n\n' +
        '</code></pre>' +
        '<h3>Intro into Components</h3>' +
        '<p>Components are reusable Vue instances with a name. Components are created very similar ' +
        'as Vue instances but instead of having an element, like in a Vue instance, components have a template.' +
        'Since components are reusable Vue instances, they accept the same options as new Vue, such as data,' +
        ' computed, watch, methods, and lifecycle hooks.</p>' +
        '<pre><code>' +
        'Vue.component(\'my-component\', {\n' +
        '  data: function () {\n' +
        '    return {}\n' +
        '  },\n' +
        '  template: \'&lt;div>COMPONENT HTML&lt;/div>\'\n' +
        '})' +
        '</code></pre>' +
        '<p>We can use components as many times as we want just by referencing it in the parent template,' +
        ' the component name becomes an html tag: </p>' +
        '<pre><code>' +
        '// Crates two instances of the component we registered above' +
        '&lt;my-component>&lt;/my-component>\n' +
        '&lt;my-component>&lt;/my-component>\n' +
        '</code></pre>' +
        '<p>If we want to pass data to a component we can do so using props:</p>' +
        '<pre><code>' +
        'Vue.component(\'component-props\', {' +
        '  props: {\n' +
        '   title: String\n' +
        '}\n' +
        '  data: function () {\n' +
        '    return {}\n' +
        '  },\n' +
        '  template: \'&lt;div>COMPONENT HTML&lt;/div>\'\n' +
        '})\n\n' +
        '// Using the new component with the title prop:\n' +
        '&lt;component-props title="SOME STRING">&lt;/component-props>\n' +
        '</code></pre>' +
        '<p>Props are custom attributes you can register on a component. When a value is passed to a prop attribute,' +
        ' it becomes a property on that component instance.</p>' +
        '<p></p>' +
        '<h3>Important things to remember:</h3>' +
        '<ul>' +
        '<li>Vue components must have one and only one element in the template tag.</li>' +
        '<li>The data in components must be a function.</li>' +
        '<li>Never modify properties directly.</li>' +
        '<li>If we don\'t use v-bind:prop or the shorthand :prop Vue will treat our attribute as a string.</li>' +
        '</ul>' +
        '<p>We should never directly modify the props, but we can notify the parent of changes using events.</p>',
      hash: 'week6',
      assignments: [{
        name: 'Final Project Proposal',
        description: '<ul>' +
          '<li>Go to the final project page and accept in.</li>' +
          '<li>Think about the application you want to build for your final project.</li>' +
          '<li>Describe what your project will do in the README.md.</li>' +
          '<li>Set clear goals for yourself. (<i>I want to build a blog that will...</i>)</li>' +
          '<li>You are encouraged to discuss the final project in the Final Project Slack channel.</li>' +
          '<li>Your project must have a front facing application, a backend and some sort of database/datastore. All the other details are left up to you.</li>' +
          '<li>This will not be graded as regular assignment but is required as the final project will take up 40% of your grade.</li>' +
          '<li>All the additional commits for the Final Project will be done in this repo.</li>' +
          '<li>To submit you can use:</li>' +
          '<li><pre><code>' +
          'git add --all\n' +
          'git commit -m "Final Project Proposal"\n' +
          'git push</code></pre>' +
          '</ul>',
        due: 'Thursday October 22nd<sup>st</sup> 5:45 PM',
        link: 'https://classroom.github.com/a/b_gep-Co'
      }]
    }, {
      name: 'Week 7',
      description:
        '<h3>Slots</h3>' +
        '<p>Slots are very useful when we want to pass some html to our components. For example: </p>' +
        '<pre><code>' +
        'Vue.component(\'my-component\', {\n' +
        '  template: `\n' +
        '    &lt;div>\n' +
        '      &lt;slot>&lt;/slot>\n' +
        '    &lt;/div>\n' +
        '  `\n' +
        '})' +
        '\n// and using it:\n ' +
        '&lt;my-component>\n' +
        '  SOME-HTML\n' +
        '&lt;/my-component>' +
        '</code></pre>' +
        '<p>That slot has access to the same instance properties (i.e. the same “scope”) as the rest of the template.' +
        ' The slot does not have access to <my-components>‘s scope.</p>' +
        '<p>Html inside the slot will be treated as the default value, if nothing' +
        ' is provided it will fall back to what the components has in the slot.</p>' +
        '<p>If we want more than one slot we can use named slots:</p>' +
        '<pre><code>' +
        '&lt;slot name="custom-slot">&lt;/slot>\n\n' +
        '// and than use it as:\n' +
        '&lt;my-component>\n' +
        '  &lt;custom-slot>\n' +
        '     SOME-HTML\n' +
        '  &lt;/custom-slot>\n' +
        '&lt;/my-component>' +
        '</code></pre>' +
        '<p>For more on slots read <a href="https://vuejs.org/v2/guide/components-slots.html">Vue Slots</a></p>' +
        '<h3>Vue Router</h3>' +
        '<pre><code>' +
        '// import the router and tell your vue app to use it.\n' +
        'import VueRouter from \'vue-router\'\n' +
        'Vue.use(VueRouter)\n' +
        '\n' +
        '// Set up the actual routs by giving them a name and a component.\n' +
        '  const routes = [\n' +
        '  {\n' +
        '    path: \'/\',\n' +
        '    name: \'PATH_NAME\',\n' +
        '    component: COMPONENT_NAME\n' +
        '  }, {\n' +
        '    path: \'*\',\n' +
        '    name: \'404\',\n ' +
        '    component: () => import(/* webpackChunkName: "404" */ \'../views/404.vue\')\n' +
        '  }\n\n' +
        '// Setup router and place it in History mode\n' +
        'const router = new VueRouter({\n' +
        '  mode: \'history\',\n' +
        '  base: process.env.BASE_URL,\n' +
        '  routes\n' +
        '})' +
        '</code></pre>' +
        '<p>Once we have added the router and created the routes we need to add a Router View and Router Links to our HTML</p>' +
        '<pre><code>' +
        '&lt;router-link to="/PATH_1">Go to PATH ONE&lt;/router-link>\n' +
        '&lt;router-link to="/PATH_2">to PATH TWO&lt;/router-link>\n' +
        '&lt;router-view>&lt;/router-view>' +
        '</code></pre>' +
        '<p> Another easy way to add the router is by using Vue Cli</p>' +
        '<pre><code>' +
        '// Creates the initial scaffolding for router:\n' +
        'vue add router' +
        '</code></pre>' +
        '</code></pre>' +
        '<p>History mode requires some setup on the server side of things (apache, nginx) because you have to make sure ' +
        'that every request to the application is sent to your entry js file. This way all of the users requests are handled by our app.</p>' +
        '<p>We will talk more about this when we cover deploying our apps.</p>',
      hash: 'week7',
      assignments: [{
        name: 'Assignment 7',
        description: '' +
          '<p>Go to the final project page and accept in if you have not already done so. ' +
          'For this assignment you are going to start on the fronted portion for your project. For full credit you must:</p>' +
          '<ul>' +
          '<li>Install Vue CLI.</li>' +
          '<li>Use Vue cli to create a new project in you final project directory.</li>' +
          '<li>You do not need to setup an api (just the front end), you can use mock data for now.</li>' +
          '<li>Directly copy the data into the data function or import JSON files.</li>' +
          '<li>You have to have 2 routes, at least one dynamic. (book/:id is a dynamic route)</li>' +
          '<li>You have to have at least one component that has to be used at least once.</li>' +
          '<li>The functionally of the components and the site is determined by the project.</li>' +
          '<li>It must be clear to the user what the site is and what to do.</li>' +
          '<li>Do not submit your project with JavaScript errors, you will be docked for JS errors.' +
          ' If the assigment has to many errors to fix in a reasonable time it will receive no points. </li>' +
          '</ul>' +
          '<p>To submit you can use:</p>' +
          '<pre><code>' +
          'git add --all\n' +
          'git commit -m "Final Project Proposal"\n' +
          'git push</code></pre>',
        due: 'Thursday October 29<sup>st</sup> 5:45 PM',
        link: 'https://classroom.github.com/a/b_gep-Co'
      }]
    }, {
      name: 'Week 8',
      hash: 'week8',
      description: 'Read chapter 9 of the book,' +
        '<h3>Additional DB connections.</h3>' +
        '<p>The database choice is completely up to you, here is a <a href="https://expressjs.com/en/guide/database-integration.html">list connection examples</a> for express.</p>' +
        '<p>For mac users, if you don\'t already have it consider installing <a href="https://brew.sh/">Homebrew</a>, a mac package manager.</p>' +
        '<p>If you decide to go with MongoDB follow <a href="https://docs.mongodb.com/manual/administration/install-community/">instructions here</a> to install it.</p>' +
        '<h4>MySql</h4>' +
        '<p>The class example uses <a href="https://github.com/mysqljs/mysql">node mysql</a>. ' +
        'This choice is arbitrary and you can choose any type of database you are familiar with.' +
        'For a full list of available databases look at: <a href="https://expressjs.com/en/guide/database-integration.html">node connection examples</a></p>' +
        '<p>An important thing to remember is that getting data from a database in not instantaneous,' +
        ' it has to be done via asynchronous requests (very similar to when we do ajax requests, ' +
        'Asynchronous JavaScript and XML). We need to deal with the fact that we do not not when' +
        ' the response will come back from the server. We can asynchronous requests with this in one of 2 ways,' +
        ' callbacks or promises</p>' +
        '<h4>MySql DB management applications</h4>' +
        '<p>When working with MySql or other database we often need to write queries. ' +
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
        'connection.query(\'SELECT * FROM users;\', callback)\n' +
        '</code></pre>' +
        '<p>For more read the documentation: <a href=" https://github.com/mysqljs/mysql">https://github.com/mysqljs/mysql</a></p>',
      assignments: []
    }, {
      name: 'Week 9',
      hash: 'week9',
      description:
        '<h3>Authentication</h3>' +
        '<h4>Storing passwords</h4>' +
        '<p>In the example in class we were storing user information in out local database,' +
        ' this is fine, but you should NEVER store a plain text password in the database. ' +
        'You can use a module like <a href="https://www.npmjs.com/package/bcrypt">bcrypt</a> to hash your passwords. </p>' +
        '<h4>REST is stateless</h4>' +
        '<p>Because we cannot maintain state between request we have to authorise all protected endpoints.' +
        'For example if a user request a bundle, we have to have a to tell that that user can access that resource. ' +
        'We could (bad idea) send the username and password with every request. </p>' +
        '<p>HTTP transfers data as plain that can be read by anyone between the server and the client, NEVER send sensitive information over HTTP.</p>' +
        '<a href="https://searchsecurity.techtarget.com/tip/How-to-encrypt-and-secure-a-website-using-HTTPS">https://searchsecurity.techtarget.com/tip/How-to-encrypt-and-secure-a-website-using-HTTPS</a>' +
        '<p>A better way is to issue a token to the user on login, that they will send back with' +
        ' requests that need Authorization. Than we can use that to determine if the user can or cannot get to a resource.</p>' +
        '<h4>JWT</h4>' +
        '<p>JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.</p>' +
        '<p>We will use JWT to sign our user object and make sure that the tokens are issued by our server. ' +
        'Note: The object inside our token is not secured or encrypted, but signed. We are veryfuing the signature not securing the data.</p>' +
        '<a href="https://jwt.io/" target="_blank">https://jwt.io/</a> ' +
        '<a href="https://tools.ietf.org/html/rfc7519" target="_blank">https://tools.ietf.org/html/rfc7519</a> ' +
        '<p>For creating the tokens we will use <a href="https://www.npmjs.com/package/jsonwebtoken">jsonwebtoken</a>.</p>' +
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
        '<p>After we have issued a token to the user we can use the <b>ExtractJwt</b> to get the token and add validation to any of our endpoints. </p>'
    }, {
      name: 'Week 10',
      hash: 'week10',
      description: '<h3>Deploying to a server</h3>' +
        '<p>Make sure you look at <a href="https://education.github.com/pack" target="_blank">Github Student Developer Pack</a> ' +
        'before you start paying for different parts of your application, it offers a lot of stuff for free,' +
        ' including a $50 dollar credit with Digital Ocean.</p>' +
        '<h3>Buy a box - hosting service</h3>' +
        '<p>In order to make our sites publicly accessable, we need a hosting service. ' +
        'A box with a static IP that is going to have a high up time where we can put our Vue App, API and Database.</p>' +
        '<p>There a a bunch of hosting providers out there and you can take your pick, for the in class example we will be using Digital Ocean</p>' +
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
        '// Set firewall rules to allow apache on por 80\n' +
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
        '<p>For the changes to take effect you need to restart apache:</p>' +
        '<pre><code>' +
        'sudo systemctl restart apache2' +
        '</code></pre>' +
        '<h3>Building app and using FTPS to transfer the files.</h3>' +
        '<p>In order to build your Vue app all you need is to go to the app directory and run:</p>' +
        '<pre><code>' +
        'npm run build' +
        '</code></pre>' +
        '<p>This will create a new directory in your app called <b>dist</b>. We want to take this directory ' +
        'and place all of its content to <b>/var/www/html</b> using an FTP clien. You can use ' +
        'what ever client you want, FileZila is a good cross platform one. You will need an IP of your box, ' +
        'a user name and a password.</p>' +
        '<p>After this step you should be able to access your app on the IP address of your box.</p>' +
        '<h3>Updating apache for history mode</h3>' +
        '<p>We have to allow for rewrites using .htacess files. This lets us use history mode ' +
        'in the router. First we have to enable the rewrite module.</p>' +
        '<pre><code>' +
        '// Enable apache mod rewrite:\n' +
        'sudo a2enmod rewrite\n\n' +
        '// Make sure that the apache config syntax is correct:\n' +
        'sudo apache2ctl configtest\n\n' +
        '// Restart apache:\n' +
        'sudo systemctl restart apache2\n\n' +
        '</code></pre>' +
        '<p>After we have enabled it we have to allow for the use of .htaccess files. We do this by creating a new ' +
        ' site config file lines in our <b>/etc/apache2/sites-available/SITE-NAME.conf</b> and paste in:</p>' +
        '<pre><code>' +
        '&lt;VirtualHost *:80>\n' +
        '    ServerAdmin webmaster@localhost\n' +
        '    ServerName SITE-NAME.com\n' +
        '    ServerAlias www.classexample.com\n' +
        '    DocumentRoot /var/www/html\n' +
        '    ErrorLog &#36;{APACHE_LOG_DIR}/error.log\n' +
        '    CustomLog &#36;{APACHE_LOG_DIR}/access.log combined\n' +
        '    &ltDirectory "/var/www/FOLDER">\n' +
        '        AllowOverride All\n' +
        '    &lt/Directory>' +
        '&lt;VirtualHost>' +
        '</code></pre>' +
        '<p>We have create a new site now we have to enable it:</p>' +
        '<pre><code>' +
        '// Make sure you do not have errors in your config\n' +
        'a2ensite your_domain.conf\n\n' +
        '//enable site\n' +
        'a2ensite your_domain.conf\n' +
        '</code></pre>' +
        '<p>Now we need to tell apahache that all requests made to this serve need to be redirected to the index.html file.' +
        'This is done in an .htaccess file in the <b>/var/www/html/.htaccess</b>, just create the file and add the following:</p>' +
        '<pre><code>' +
        '&lt;IfModule mod_rewrite.c>\n' +
        '  RewriteEngine On\n' +
        '  RewriteBase /\n' +
        '  RewriteRule ^index\\.html$ - [L]\n' +
        '  RewriteCond %{REQUEST_FILENAME} !-f\n' +
        '  RewriteCond %{REQUEST_FILENAME} !-d\n' +
        '  RewriteRule . /index.html [L]\n' +
        '&lt;/IfModule>' +
        '</code></pre>' +
        '<h4>Installing node for the server</h4>' +
        '<pre><code>' +
        '# Using Ubuntu\n' +
        'curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -\n' +
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
        'pm2 start server.js\n\n' +
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
        '<h3>API</h3>' +
        '<p>It would be a good idea at this point to edit the <b>Access-Control-Allow-Origin</b> hosts in your server.' +
        ' This will limit your application api access to the vue app only:</p>' +
        '<pre><code>' +
        '  res.header("Access-Control-Allow-Origin", "YOUR_DOMAIN_OR_IP");\n' +
        '</code></pre>' +
        '<h3>Database</h3>' +
        '<p>Install MySql on our server</p>' +
        '<pre><code>' +
        '// Install mysql\n' +
        'sudo apt install mysql-server\n\n' +
        '// Setup mysql:\n' +
        'sudo mysql_secure_installation\n\n' +
        '</code></pre>' +
        '<p>After installing MySQL we need to run a few SQL queries to setup a user and to create a database:</p>' +
        '<pre><code>' +
        '// Crates a database called it338, replace with what you want to call your DB:\n' +
        'CREATE DATABASE it338;\n\n' +
        '// Change the password for the root user\n' +
        'ALTER USER \'root\'@\'localhost\' IDENTIFIED WITH mysql_native_password BY \'password\';\n\n' +
        '// Flush privileges\n' +
        'FLUSH PRIVILEGES;' +
        '</code></pre>' +
        '<pre><code>' +
        '// TO connect to mysql you can use:\n' +
        'mysql -p -u USER\n\n' +
        '// To switch databases you can use:\n\n' +
        'USE DATABASE_NAME;' +
        '</code></pre>' +
        '<p>Now we need to update the connection to the database (SqlService) with our new MySql password and the database name.</p>' +
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
        '<p>Note: this only adds a cert to the vue app, you also need to add one for the express app.</p>' +
        '<h3>Final thoughts</h3>' +
        '<p>There are a lot of ways this can be improved, I encourage you to get a hosting service ' +
        'and break it a few times. Readup on apache or try doing the same thing with nginx. ' +
        'Worst case scenario is you have to redo the steps on this page. ' +
        '<b>Try installing an SSL cert for the rest API</b>, adding a subdomain, etc.</p>',
      assignments: [{
        name: 'Final Project',
        description: '' +
          '<p>Finish your work on the final project. You the class code as examples and feel free to ' +
          'ask any question or join office hours before the deadline.</p>' +
          '<ul>' +
          '<li>Look and feel like a website, it should look and work like a finished site.</li>' +
          '<li>Extra credit will be awarded to students that provide a link to the live site and that go beyond the original requirements.</li>' +
          '<li><pre><code>' +
          'git add --all\n' +
          'git commit -m "Done with this class!"\n' +
          'git push</code></pre>' +
          '</ul> ',
        due: 'Sunday November 22<sup>nd</sup> 23:59',
        link: 'https://classroom.github.com/a/b_gep-Co'
      }]
    }
  ]
};

export default IT339_F_20_21;
