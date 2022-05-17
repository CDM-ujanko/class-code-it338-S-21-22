let IT338_S_21_22 = {
  name: 'Web Development Frameworks',
  code: 'IT338',
  key: 'IT338-S-21-22',
  term: 'Spring',
  academicYear: '2021-2022',
  location: 'Lewis 1005 / <a href="https://depaul.zoom.us/j/6138581159">Online</a>',
  time: 'Monday 5:45PM - 9:00PM',
  active: true,
  description: '<p>Introduction and deep dive into vue.js, an open-source Model–view–viewmodel ' +
    'JavaScript framework for building user interfaces and single-page applications. Intro into command line tools, like vue-cli, npm and node. <br/>' +
    '<h3>Important things to remember:</h3><ul>' +
    '<li>All assignments are due before the next class 5:45 PM and no late assignment will be accepted.</li>' +
    '<li>All assignments need to be uploaded to GitHub Classroom to receive the full credit.</li>' +
    '<li>The assignment link (GitHub Classroom) will be provided in the assignment section of the lecture notes.</li>' +
    '<li>All instructions for the assignments will be listed in the README.md of the Git repository</li>' +
    '<li>D2L will only be used for grading and posting the lecture recordings, you do not need to upload anything to D2l unless otherwise specified.</li>' +
    '<li>The lowest 1 to 2 (20%) homeworks will be dropped.</li>' +
    '<li>There will be several extra credit assignments throughout the class that will allow you to earn some extra points.</li>' +
    '<li>We have a slack group that you have been added to. Use it to get quick answers for problems you encounter. Good student answers can earn more extra credit points.</li>' +
    '<li>Write your own code, the more code you write the better you will learn.</li>' +
    '<li>Ask questions, if you didn\'t understand something, chances are there are more people with the same question, ask it! </li>' +
    '<li>We are going to cover some very complicated topics, if you are struggling with a specific topic, come to one of the office hours or contact me for an appointment. </li></ul>',
  links: [
    {
      name: 'Syllabus',
      description: 'The class Syllabus.',
      path: 'https://www.cdm.depaul.edu/academics/pages/classinfo.aspx?Term=20223&ClassNbr=37445&fid=1024009'
    }, {
      name: 'Class Code',
      description: 'The link to the class code repo.',
      path: 'https://github.com/CDM-ujanko/class-code-it338-S-21-22'
    }, {
      name: 'VueJS Documentation',
      description: 'Link to the VueJS site and documentation.',
      path: 'https://vuejs.org/'
    }, {
      name: 'Vue.js 3 By Example: Blueprints to Learn Vue Web Development, Full-stack Development, and Cross-platform Development Quickly',
      description: 'The main textbook used for class.',
      path: 'https://g.co/kgs/m2xB2J'
    }, {
      name: 'Vue.js devtools',
      description: 'Chrome devtools extension for debugging Vue.js applications, firefox version is also availabe.',
      path: 'https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg?hl=en'
    }, {
      name: 'Sequel Pro',
      description: 'Simple Mac only DB admin tool.',
      path: 'https://www.sequelpro.com/'
    }, {
      name: 'DBeaver',
      description: 'Free multi-platform database tool for developers, database administrators, analysts and all people who need to work with databases. Supports all popular databases: MySQL, PostgreSQL, SQLite, Oracle, DB2, SQL Server, Sybase, MS Access, Teradata, Firebird, Apache Hive, Phoenix, Presto, etc.',
      path: 'https://dbeaver.io/?ref=eversql.com'
    }, {
      name: 'JetBrains DataGrip',
      description: 'Very good multi platform tool for SQL development, it is a paid tool but you can get the student versions.',
      path: 'https://jetbrains.com/datagrip/'
    }
  ],
  lectures: [
    {
      name: 'Week 1',
      hash: 'week1',
      description: 'Read the <a href="https://vuejs.org/guide/introduction.html#what-is-vue">Vue guide</a> and Chapter 1 of the Book' +
        '<h3>Getting started with Vue</h3>' +
        '<p>The simples way to add Vue to the page is by adding this script to the html:</p>' +
        '<pre><code>' +
        '// development version, includes helpful console warnings\n' +
        '&lt;script src="https://unpkg.com/vue@3">&lt;/script>' +
        '</code></pre>' +
        '<p>Unlike the previous libraries the Vue template is data driven, everything you have in your data ' +
        'object can be accessed in the template using the {{}} (mustache) syntax by default. This can be change to what ever you want</p> ' +
        '<p>We can use v-if, v-for directives, (more on directives later) to condidionally display or loop over data:</p>' +
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
        '</code></pre>',
      code: [],
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
        due: 'Monday April 4<sup>th</sup> 5:45 PM',
        link: 'https://classroom.github.com/a/k0PuBa3A'
      }]
    }, {
      name: 'Week 2',
      hash: 'week2',
      description: '<p>Read the ' +
        '<a href="https://vuejs.org/guide/essentials/computed.html" target="_blank">Class and Style Bindings</a>, ' +
        '<a href="https://vuejs.org/guide/essentials/computed.html" target="_blank">Computed Properties</a>, ' +
        '<a href="https://vuejs.org/guide/essentials/watchers.html" target="_blank">Wathcers</a>, ' +
        '<a href="https://vuejs.org/guide/essentials/forms.html" target="_blank">Form Input Binding</a> and ' +
        '<a href="https://vuejs.org/guide/essentials/lifecycle.html" target="_blank">Lifecycle Hooks</a> ' +
        '<h3>Sryle Binding</h3>' +
        '<p>You can v-bind for classes and inline styles. Becasue they are use mroe than any other ' +
          'attribude binding Vue enases them by allwoing us to bind using objects, arrays or strings.</p>' +
          '<h4>Object example</h4>' +
          '<pre><code>' +
          'data() {\n' +
          '  return {\n' +
          '    classObject: {\n' +
          '      active: true,\n' +
          '      \'text-danger\': false\n' +
          '    }\n' +
          '  }\n' +
          '}\n' +
          '<div :class="classObject"></div>' +
          '</code></pre>' +
          '<h3>Binding styles with object</h3>' +
          '<pre><code>' +
          'data() {\n' +
          '  return {\n' +
          '    activeColor: \'red\',\n' +
          '    fontSize: 30\n' +
          '  }\n' +
          '}\n' +
          '<div :style="{ color: activeColor, fontSize: fontSize + \'px\' }"></div>' +
          '</code></pre>' +
        '<h3>Computed Properties</h3>' +
        '<p>A computed property is used to declaratively describe a value that depends on other values.' +
        ' When you data-bind to a computed property inside the template, Vue knows when to update the ' +
        'DOM when any of the values depended upon by the computed property has changed.</p>' +
        '<p>Computed properties are cached based on their reactive dependencies.' +
        ' A computed property will only re-evaluate when some of its reactive dependencies have changed.</p>' +
        '<pre><code>' +
        'var vm = new Vue({\n' +
        '  el: \'#example\',\n' +
        '  data: {\n' +
        '    name: \'bob\'\n' +
        '  },\n' +
        '  computed: {\n' +
        '    // a computed getter\n' +
        '    capitalizedName: function () {\n' +
        '      // `this` points to the vm instance\n' +
        '      return this.name.charAt(0).toUpperCase()\n ' +
        '           + this.name.slice(1).toLocaleLowerCase();\n' +
        '    }\n' +
        '  }\n' +
        '})' +
        '</code></pre>' +
        '<p>Name in this case will output <b>Bob</b></p>' +
        '<h3>Watchers</h3>' +
        '<p>While computed properties are more appropriate in most cases, there are times when' +
        ' a custom watcher is necessary. That’s why Vue provides a more generic way to react to' +
        ' data changes through the watch option. This is most useful when you want to perform' +
        ' asynchronous or expensive operations in response to changing data.</p>' +
        '<h3>v-bind vs v-model</h3>' +
        '<p>v-bind is used for one way data binding, binding a data property to an html attribute,' +
        ' changing the attribute does not affect the data but changing the data updates the attribute.</p>' +
        '<p>v-model crates a 2-way data biding so when used on an input, it will update the value in ' +
        'the data and changes to the data update the input.</p>' +
        '<pre><code>' +
        '// One way binding with v-value, updating the input does NOT change the data\n' +
        '&lt;input v-bind:value="DATA_KEY">\n\n' +
        '// One 2-way binding with v-model, updating the input changes the data\n' +
        '&lt;input v-model="DATA_KEY">\n\n' +
        '// Making the v-bind behave like v-model:\n' +
        '&lt;input v-bind:value="DATA_KEY"\n' +
        '   v-on:input="DATA_KEY = $event.target.value"\n' +
        '>' +
        '</code></pre>' +
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
        '<h3>Lifecycle Hooks</h3>' +
        '<p></p>' +
        '<img src="https://vuejs.org/assets/lifecycle.16e4c08e.png">',
      code: [],
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
        due: 'Monday April 11`<sup>th</sup> 5:45 PM',
        link: 'https://classroom.github.com/a/9jESFYlq'
      }]
    }, {
      name: 'Week 3',
      hash: 'week3',
      description: '<p>Read ' +
        '<a href="https://vuejs.org/guide/essentials/component-basics.html" target="_blank">Component basics</a></p></p>' +
        '<h3>Intro into components</h3>' +
        '<p>Components are reusable Vue instances with a name. Components are created very similar ' +
        'as Vue instances but instead of having an element, like in a Vue instance, components have a template. ' +
        'Since components are reusable Vue instances, they accept the same options as new Vue, such as data,' +
        ' computed, watch, methods, and lifecycle hooks.</p>' +
        '<pre><code>' +
        'Instance.component(\'my-component\', {\n' +
        '  data: function () {\n' +
        '    return {}\n' +
        '  },\n' +
        '  template: \'&lt;div>COMPONENT HTML&lt;/div>\'\n' +
        '})' +
        '</code></pre>' +
        '<p>We can use components as many times as we want just by referencing it in the parent template,' +
        ' the component name becomes the html tag: </p>' +
        '<pre><code>' +
        '// Crates two instances of the component we registered above\n' +
        '&lt;my-component>&lt;/my-component>\n' +
        '&lt;my-component>&lt;/my-component>\n' +
        '</code></pre>' +
        '<p>If we want to pass data to a component we can do so using props:</p>' +
        '<pre><code>' +
        'Instance.component(\'component-props\', {' +
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
        '<li>The data in components must be a function.</li>' +
        '<li>Never modify properties directly.</li>' +
        '<li>If we don\'t use v-bind:prop or the shorthand :prop Vue will treat our attribute as a string.</li>' +
        '</ul>' +
        '<p>We should never directly modify the props, but we can notify the parent of changes using events.</p>',
      code: [],
      assignments: [{
        name: 'Assignment 3',
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
        due: 'Monday April 18<sup>th</sup> 5:45 PM',
        link: 'https://classroom.github.com/a/AvPsU6J8'
      }]
    }, {
      name: 'Week 4',
      hash: 'week4',
      description: '<p>Read the For more read <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events" target="_blank">Events,</a> ' +
          '<a href="https://vuejs.org/guide/essentials/event-handling.html" target="_blank">Vue Events Handling</a>, ' +
          '<a href="https://vuejs.org/guide/components/events.html" target="_blank">Vue Component Events</a> and ' +
          '<a href="https://vuejs.org/guide/components/slots.html" target="_blank">Content Distributing with Slots</a></p></p>' +
          '<h3>Events JS</h3>' +
          '<p>In general events are actions or occurrences that happen in the system you are programming.' +
          ' In JS for example an event might be a click on a button, key press, hover, etc.' +
          ' DOM Events are sent to notify code of interesting things that have taken place.' +
          ' The function that executes when an event fires is called an Event Handler.</p>' +
          '<p>Examples of events in JS:</p>' +
          '<pre><code>' +
          '// Example of DOM Level 2 Events \n' +
          '// Add an event listener for unit change \n' +
          'unitsElement.addEventListener(\'change\', unitChangeHandler);\n' +
          '// Add an event listener for user type\n' +
          'userInputElement.addEventListener(\'input\', userInputHandler);\n' +
          '</code></pre>' +
          '<p>It is important to note that web events are not part of the core JavaScript' +
          ' language — they are defined as part of the JavaScript APIs built into the browser.' +
          ' What this means is that browser can handle events in different ways.' +
          ' Luckily nowadays things have been standardised. </p>' +
          '<p>Most basic inline event handler properties (bad idea to mix JS and HTML):</p>' +
          '<pre><code>' +
          '&lt;button onclick="alert(\'Hello, this is my old-fashioned event handler!\');">Press me&lt;/button>' +
          '</code></pre>' +
          '<p>Much better idea:</p>' +
          '<pre><code>' +
          'var btn = document.querySelector(\'button\');\n' +
          'btn.onclick = alert(‘This is the same this but a much better idea because we are not writing JS in the HTML’);' +
          '</code></pre>' +
          '<p>Event handler properties have less power and options, but better cross-browser compatibility (being supported as far back as Internet Explorer 8). </p>' +
          '<p>The event object has useful properties that we can access, one of them is target,' +
          '<pre><code>' +
          '// To add an event lister:\n' +
          'element.addEventListener(‘event-name’, function)\n' +
          '// To remove it:\n' +
          'element.removeEventListener(‘event-name’, function)' +
          '</code></pre>' +
          '<p>This method is similar to the  inline event handler properties, but they require using the addEventListener method. </p>' +
          '<p>The main difference is this:</p>' +
          '<pre><code>' +
          'element.addEventListener(‘event-name’, func0)\n' +
          'element.addEventListener(‘event-name’, func1)' +
          '</code></pre>' +
          '<p>In the case of inline event handler properties this would not be possible because ' +
          'the second property would overwrite the first one. With addEventListener both functions will be called.</p>' +
          '<p>When we trigger an event on a child node the ancestors of the child node are also notified, ' +
          'the events bubbles up the html tree. The following code will trigger when ever we click' +
          ' on anything on the page even though the bind is on the body. The target will be the actual html element.</p>' +
          '<pre><code>' +
          'document.body.addEventListener(\'click\', function (event) {\n' +
          '  console.log(\'body event listener\', event.target);\n' +
          '});' +
          '</code></pre>' +
          '<p>It is a good idea to clean up after yourselves, to not let event trigger if they are' +
          ' not necessary, once you are done with an event you can remove it using:</p>' +
          '<pre><code>' +
          '// For inline events\n' +
          'htmlElement.onclick = null;\n' +
          '// For Dom Level 2 events\n' +
          'document.removeEventListener(‘event’, function);' +
          '</code></pre>' +
          '<h3>Events in Vue js</h3>' +
          '<p>We can use the v-on directive to listen to DOM events and run some ' +
          'JavaScript when they’re triggered. @ is shorthand for v-on</p>' +
          '<pre><code>' +
          '&lt;a @[event]="doSomething"> ... &lt;/a>' +
          '</code></pre>' +
          'By default vue will pass the event object to our doSomething function.' +
          ' We can overwrite this by specifying args:' +
          '<pre><code>' +
          '&lt;a @[event]="doSomething(arg1, arg2 ...)"> ... &lt;/a>' +
          '</code></pre>' +
          'If we want the event with the custom arguments we can user the special $event variable: ' +
          '<pre><code>' +
          '&lt;a @[event]="doSomething($event, arg1, arg2 ...)"> ... &lt;/a>' +
          '</code></pre>' +
          '<p>It is a very common need to call event.preventDefault() or event.stopPropagation(). Vue allows us to use event modifiers in out templates:</p>' +
          '<pre><code>' +
          '&lt;!-- the click event\'s propagation will be stopped -->\n' +
          '&lt;a v-on:click.stop="doThis">&lt;/a>\n' +
          '\n' +
          '&lt;!-- the submit event will no longer reload the page -->\n' +
          '&lt;form v-on:submit.prevent="onSubmit">&lt;/form>\n' +
          '\n' +
          '&lt;!-- modifiers can be chained -->\n' +
          '&lt;a v-on:click.stop.prevent="doThat">&lt;/a>\n' +
          '\n' +
          '&lt;!-- just the modifier -->\n' +
          '&lt;form v-on:submit.prevent>&lt;/form>' +
          '</code></pre>' +
          '<p>Event modifies are used to manage event default behavior of events and propagation.</p>' +
          '<h3>Custom events in Vue js</h3>' +
          '<p>As we have discussed before, a child component should never update props, we use events ' +
          'to communicate changes from child to parent and let the parent mutate its own data.</p>' +
          '<pre><code>' +
          '// emit the event in the child component:\n' +
          'this.$emit(\'EVENT-NAME\');\n\n' +
          '// Listen for event in the parent template:\n' +
          '&lt;child-component v-on:EVENT-NAME="SOME-CODE-TO-EXECUTE">\n' +
          '&lt;/child-component> ' +
          '</code></pre>' +
          '<p>If we want to pass data to the event, we can do so by adding a second parameter:</p>' +
          '<pre><code>' +
          '// emit the event in the child component:\n' +
          'this.$emit(\'EVENT-NAME\', DATA);\n\n' +
          '// Listen for event in the parent template:\n' +
          '&lt;child-component v-on:EVENT-NAME="METHOD-NAME">\n' +
          '&lt;/child-component> ' +
          '</code></pre>' +
          '<p>The data we are passing will be available as a parametar in our method.</p>' +
          '<p>We can use v-model in components by registering the value prop and emitting the <b>\'input\'</b> event</p>' +
          '<pre><code>' +
          'Vue.component(\'my-component\', {\n' +
          '  props: [\'value\'],\n' +
          '  template: `\n' +
          '    &lt;input\n' +
          '      v-bind:value="value"\n' +
          '      v-on:input="$emit(\'input\', $event.target.value)"\n' +
          '    >\n' +
          '  `\n' +
          '})\n\n' +
          '&lt;my-component\n' +
          '  v-model="PARENT-VAR"\n' +
          '>&lt;/my-component>' +
          '</code></pre>' +
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
          ' is provided it will fall back to what the components have in the slot.</p>' +
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
          '<p>For more on slots read <a href="https://vuejs.org/guide/components/slots.html">Vue Slots</a></p>',
      code: [],
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
        due: 'Monday May 2<sup>nd</sup> 5:45 PM',
        link: 'https://classroom.github.com/a/6K0ly-To'
      }]
    }, {
      name: 'Week 5',
      hash: 'week5',
      description: '<p>Read <a href="https://vuejs.org/guide/scaling-up/sfc.html">Single file components</a> .</p>' +
        '<p> Install node and npm by going <a href="https://nodejs.org/en/" target="_blank">here</a> and following the instructions.</p>' +
        '<p> Install Vue CLI by going <a href="https://cli.vuejs.org/guide/installation.html" target="_blank">here</a> and following the instructions.</p>' +
        '<p>After installing node you should have node and npm available to you in the terminal.</p>' +
        '<pre><code>' +
        '// Check node version \n' +
        'node --version\n\n ' +
        '// Check npm version \n' +
        'npm --version\n' +
        '</code></pre>' +
        '<p>If you have the installed you will get something like v17.8.0 if installed.</p>' +
        '<h3>Node and Express</h3>' +
        '<p>Node.js is a platform for building server-side event-driven i/o application using javascript.' +
        ' Express.js is a framework based on node.</p>' +
        '<p>We can run a JS fine in the terminal just by doing: </p>' +
        '<pre><code>' +
        'node FILE-TO-RUN.js' +
        '</code></pre>' +
        '<p></p>' +
        '<h3>Node Package Manager npm</h3>' +
        '<p>npm is a package manager for Node.js A package manager makes installing, upgrading and removing ' +
        'project dependencies easier. Instead of manually including script tags in our html we can use npm.' +
        ' npm is driven by a file called <b>package.json</b> that has ' +
        'basic info about our project along with its dependencies.</p>' +
        '<pre><code>' +
        '{\n' +
        '  "name": "My Site",\n' +
        '  "version": "1.0.0",\n' +
        '  "description": "Uros Jankovic ",\n' +
        '  "author": "Uros Jankovic &lt;ujankovi@depaul.edu>",\n' +
        '  "private": true,\n' +
        '  "scripts": {...},\n' +
        '  "dependencies": {...}\n' +
        '}' +
        '</code></pre>' +
        '<p>Some useful npm commands: </p>' +
        '<pre><code>' +
        '// Initialize a project in the current directory: \n' +
        'npm init \n\n' +
        '// Install all dependencies from package.json \n' +
        'npm install \n\n' +
        '// Install a specific dependency and save to package.json \n' +
        'npm install PACKAGE-NAME --save \n' +
        '</code></pre>' +
        '<p>Note: Do NOT commit node_modules to github. You can use .gitignore to exclude it.</p>' +
        '<h3>Vue CLI</h3>' +
        '<p>Vue cli is a command line tool that allows us to, among other thinks, easily setup a new vue.js project.</p>' +
        '<p>We can use npm to install it globally:</p>' +
        '<pre><code>' +
        'npm install -g @vue/cli \n\n' +
        '// Check if we have it installed: \n' +
        'vue --version\n\n' +
        '// To initialize a new project \n' +
        'vue create PROJECT_NAME \n' +
        ' </code></pre>' +
        '<p>For more information on vue cli go <a href="https://cli.vuejs.org/" target="_blank">here</a>.</p>' +
        '<h3>Single Page Applications and Single File Components</h3>' +
        '<p>After crating a new project using vue cli you will notice that we have a new type of file, <b>.vue</b>.' +
        ' All of these files are single-file components, and we can use them to create self-contained ' +
        'components. Unlike what we did so far with <b>Vue.component(\'component\')</b>, we are not polluting the Vue namespace,' +
        ' the component is only added when another component or an instance asks for it.</p>' +
        '<p>Single File Components can some with their own styles so are also scoped to the component,' +
        ' no need to add global css and worry about specificity and selectors.</p>' +
        '<p>At the end of the day, <b>.vue</b> files get compiled to regular js files.</p>' +
        '<p>For more on single file components read ' +
        '<a href="https://vuejs.org/guide/scaling-up/sfc.html" target="_blank">this article.</a></p>' +
        '<h3>Sass and Scss</h3>' +
        '<p>Sass and Scss are CSS supersets that allow us to write css in a more organized way. </p>' +
        '<p>Sass and Scss help us write more optimized css, but they get compiled to css.</p>' +
        '<p>For more on Scss and Sass go <a href="https://sass-lang.com/guide">here</a>.</p>',
      code: [],
    }, {
      name: 'Week 6',
      hash: 'week6',
      description: '<p>Read at VI - Routing and <a href="https://router.vuejs.org/guide/#html" target="_blank">Vue router</a></p>' +
        '<h3>Routing</h3>' +
        '<p>In web development, routing often means splitting the application into different areas usually based on rules that are derived from the current browser URL.</p>' +
        '<p>Single-page applications (SPAs) are web apps that load only once (server provides a single template)' +
        ' and JavaScript is used to dynamically render different pages.</p>' +
        '<p>A URL is a reference (i.e. address) to a resource on the Internet and is often made up of: The protocol identifier. The hostname (i.e. domain name). A pathname.</p>' +
        '<p>When we do routing in single page application we only have one synchronous HTTP GET request,' +
        ' the rest of the data is fetched asynchronously, all subsequent `page loads` are handled by javascript.</p>' +
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
        '<h3>Dynamic route matching</h3>' +
        '<p>We often need to attach multiple entries to a single component and pass some data along to it (ID).' +
        ' If we wanted to create a route for a store and wanted to match item/:id we can easily do that using Dynamic Route Matching</p>' +
        '<p>We only need to register our route with a dynamic segment:</p>' +
        '<pre><code>' +
        'const router = new VueRouter({\n' +
        '  routes: [\n' +
        '    // dynamic segments start with a colon\n' +
        '    { path: \'/item/:id\', component: Item }\n' +
        '  ]\n' +
        '})' +
        '</code></pre>' +
        'Now we can access the ID via the router in out app: <b>this.$route.params.id</b>' +
        '<p>Another way to access route information is to pass them as props:</p>' +
        '<pre><code>' +
        'const router = new VueRouter({\n' +
        '  routes: [\n' +
        '    // dynamic segments start with a colon\n' +
        '    { path: \'/item/:id\', component: Item, props: true }\n' +
        '  ]\n' +
        '})' +
        '</code></pre>' +
        '<p>Now you can register the route param (id in the case of the example) and use it as any other prop.</p>' +
        '<h3>Nested Routes</h3>' +
        '<p>If we wanted to have nested routes, for example <b>item/1/edit</b> and <b>item/2/preview</b> ' +
        'we can do that by adding a children array of object to the path. </p>' +
        '<pre><code>' +
        'const router = new VueRouter({\n' +
        '  routes: [\n' +
        '    { path: \'/item/:id\', component: Item,\n' +
        '      children: [\n' +
        '        {\n' +
        '          path: \'edit\',\n' +
        '          component: EditItem\n' +
        '        },\n' +
        '        {\n' +
        '          path: \'preview\',\n' +
        '          component: PreviewItem\n' +
        '        }\n' +
        '      ]\n' +
        '    }\n' +
        '  ]\n' +
        '})' +
        '</code></pre>' +
        '<h3>History Mode Vs Hash Mode</h3>' +
        '<p>Buy default the Vue router will be in hash mode, meaning all pages will be prefixed by a hash (#). ' +
        'This website is an example of this. In Hash mode you are always going to the default (index) page of the' +
        ' site and than JavaScript parses the hash and points the user to the correct page. This is easier to deploy, but makes it so that a user can get `lost`, ' +
        'meaning the user might endup on a page not controlled by our vue app, <a href="/~ujankovi/badpage/" target="_blank">/~ujankovi/badpage/</a> ' +
        'is an example of this. The will end up on a 404 served by apache.</p>' +
        '<p>History mode requires some setup on the server side of things (apache, nginx) because you have to make sure ' +
        'that every request to the application is sent to your entry js file. This way all of the users requests are handled by our app.</p>' +
        '<p>We will talk more about this when we cover deploying our apps.</p>',
      assignments: [{
        name: 'Assignment 5 (Final Project 1)',
        description: '<ul>' +
          '<li>For this assignment you will continue work in the final project.</li>' +
          '<li>Go to the Final project page and accept in.</li>' +
          '<li>Install Node.js and Vue Cli</li>' +
          '<li>Use vue-cli to create a final project folder and all the files.</li>' +
          '<li>Create a README.md file and write something about you project.</li>' +
          '<li>Follow the instructions from GitHub to initialize a repo locally and to create a first commit.</li>' +
          '<li>Use the examples shown in class to add the router to your project.</li>' +
          '<li>Before committing make sure your app doesn\'t have any compilation errors.</li>' +
          '<li><pre><code>' +
          'git add --all\n' +
          'git commit -m "I did assignment 5"\n' +
          'git push</code></pre>' +
          '</ul> ',
        due: 'Monday May 9<sup>th</sup> 5:45 PM',
        link: 'https://classroom.github.com/a/AdjJYf4r'
      }]
    },
  ]
};

export default IT338_S_21_22;
