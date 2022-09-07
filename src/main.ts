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
  // first unnamed argument is a command
  let command = margs._[0];
  let templateInputDirectory = margs['templatein'];
  let specificationInputDirectory = margs['specificationin'];
  let outputDirectory = margs['out'];
  let specification = margs['spec'];

  try {
    env.run(
      'pub:sdk',
      {
        command,
        templateInputDirectory,
        specificationInputDirectory,
        outputDirectory,
        specification
      },
      done
    );
  } catch (e) {
    console.log('error in run', e);
  }
}
