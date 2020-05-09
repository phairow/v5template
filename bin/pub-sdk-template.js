#!/usr/bin/env node

/**
 * CLI entry point. Parse args and run the main app.
 */

let main = require('../dist/main');
let minimist = require('minimist');
let newline = require('os').EOL;

let margs = minimist(process.argv.slice(2));

let title = 'PubNub SDK Template Generator';
let beginMessage = `${title} - begin`;
let completeMessage = `${title} - complete`;
let exitErrorMessage = `${title} - exit with errors`;

process.stdout.write(newline + beginMessage + newline + newline);

process.on('beforeExit', (code) => {
  process.stdout.write(newline + newline + completeMessage + newline + newline);
});

process.on('uncaughtException', (e) => {
  process.stdout.write(newline + newline + exitErrorMessage + newline + newline);
  process.stderr.write('uncaughtException' + newline + newline);
  process.stderr.write(e.message + newline + newline);
  process.exit(1);
})

try {
  main.run(margs);
} catch(e) {
  process.stdout.write(newline + newline + exitErrorMessage + newline + newline);
  process.stderr.write('exception in main run method' + newline + newline);
  process.stderr.write(e.message + newline + newline);
  process.exit(1);
}
