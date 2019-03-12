#!/usr/bin/env node    
const program = require('commander');
const {prompt} = require('inquirer');
const {
    addcustomer,
    findcustomer,
    updatecustomer,
    removecustomer,
    listcustomers
} = require('./index');

const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: "customer's first name"
    },
    {
        type: 'input', 
        name: 'lastname',
        message: "customer's Last Name"
    },
    {
        type: 'input',
        name: 'phone',
        message: "customer's Phone number"
    },
    {
        type: 'input',
        name: 'email',
        message: "customer's email address"
    }
]

program
    .version('1.0.0')
    .description("First Cli app");

// program
//     .command('add <firstname> <lastname> <phone> <email>')
//     .alias('a')
//     .description('add a customer')
//     .action((firstname, lastname, phone, email) => {
//         addcustomer({firstname, lastname, phone, email});
//     });

// Add Command
program
    .command('add')
    .alias('a')
    .description('add a customer')
    .action(() => {
        prompt(questions).then(answers => addcustomer(answers));
    });

// Find Command
program
    .command('find <name>')
    .alias('f')
    .description('find the customer')
    .action(name => findcustomer(name));

// Update Command
program
    .command('update <_id>')
    .alias('u')
    .description('update a customer')
    .action((_id ) => {
        prompt(questions).then(answers => updatecustomer(_id, answers));
    });

// Remove Command
program
    .command('remove <_id>')
    .alias('r')
    .description('remove the customer')
    .action(_id => removecustomer(_id));

// List Command
program
    .command('list')
    .alias('l')
    .description('List all customers')
    .action(()=> listcustomers());

program.parse(process.argv);