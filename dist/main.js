"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Load the yeoaman environment and run the generator
 */
const yeoman = require("yeoman-environment");
let env = yeoman.createEnv();
env.register(require.resolve('./sdk'), 'pub:sdk');
let done = () => {
    process.stdout.write('generation complete, exiting...');
};
function run(margs) {
    let language = margs._[0];
    let dest = margs._[1];
    env.run('pub:sdk', { language, dest }, done);
}
exports.run = run;
