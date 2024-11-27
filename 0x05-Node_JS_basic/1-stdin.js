#!/usr/bin/node

/**
 * Creates a program that will be executed through
 * the command line
 */

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  if (data != null) {
    process.stdout.write(`Your name is: ${data}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
  // process.exit();
});
