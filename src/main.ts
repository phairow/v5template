/**
 * Load the yeoaman environment and run the generator
 */
import * as yeoman from 'yeoman-environment';
import { ParsedArgs } from 'minimist';

let env = yeoman.createEnv();
env.register(require.resolve('./sdk'), 'pub:sdk');

let done = () => {
  process.stdout.write('generation complete, exiting...');
};

export function run(margs: ParsedArgs) {
  let language = margs._[0];
  let dest = margs._[1];

  env.run('pub:sdk', { language, dest }, done);
}
