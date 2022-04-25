const { program } = require('commander');

program
  .name('hello-program')
  .description('It says hi!')
  .version('1.0.0');


program
  .command('hello <name>')
  .description('it says hi!')
  .action((name) => {
    console.log('Hello! ' + name );
  })

program.parse(process.argv);