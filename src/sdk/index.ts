/**
 * The generator entry point.
 */

import * as Generator from 'yeoman-generator';
import * as path from 'path';
import * as fs from 'fs';
import * as Mustache from 'mustache';
import { Command } from './command.enum';
import { Specification } from './specification.enum';
import { processOpenApi } from './processOpenApi';
import { SdkApiDefinition } from '../definition/format/SdkApiDefinition.js';
import { parseOpenApiSpecs } from '../definition/parse/openapi/openApiParser.js';
// import { processProtoBuf } from './processProtoBuf';

export type ParseSpecification = (
  generator: SdkGenerator,
  schemaDirectory: string,
) => Promise<SdkApiDefinition[]>;

export type RenderTemplate = (
  template: string,
  context: object,
  fileName: string,
  extension: string,
  subDir?: string
) => void;

// command,
// templateInputDirectory,
// specificationInputDirectory,
// outputDirectory,
// specificationType

export default class SdkGenerator extends Generator {
  public command: Command = Command.template;
  public specification: Specification = Specification.openapi;
  public templateInputDirectory: string = './';
  public specificationInputDirectory: string = './';
  public outputDirectory: string = 'out';

  public async default() {

    if (this.options.command) {
      this.command = this.options.command as Command;
    } else {
      this.command = (await this.prompt(this._promptForCommand())).command as Command;
    }

    if (this.options.specification) {
      this.specification = this.options.specification as Specification;
    } else {
      this.specification = (await this.prompt(this._promptForSpecification())).specification as Specification;
    }
    
    if (this.options.templateInputDirectory) {
      this.templateInputDirectory = this.options.templateInputDirectory;
    } else {
      this.templateInputDirectory = (await this.prompt(this._promptForTemplateInputDirectory())).templateInputDirectory;
    }
    
    if (this.options.specificationInputDirectory) {
      this.specificationInputDirectory = this.options.specificationInputDirectory;
    } else {
      this.specificationInputDirectory = (await this.prompt(this._promptForSpecificationInputDirectory())).specificationInputDirectory;
    }
    
    if (this.options.outputDirectory) {
      this.outputDirectory = this.options.outputDirectory;
    } else {
      this.outputDirectory = (await this.prompt(this._promptForOutputDirectory())).outputDirectory;
    }

    let renderTemplate: RenderTemplate = (template: string, context: object, fileName: string, fileExtension: string, subDir?: string) => {
      try {
        let outFile = this.outputDirectory + (subDir ? subDir + '/' : '') + fileName + '.' + fileExtension;
        let templateString = fs.readFileSync(path.join(this.templateInputDirectory, template)  + '.mustache', 'utf8');
        let output = Mustache.render(templateString, context, (partialName) => { return fs.readFileSync(path.join(this.templateInputDirectory, partialName) + '.mustache', 'utf8'); });
        this.fs.write(outFile, output);
      } catch (e) {
        console.log(e);
      }
    }

    try {
      if (this.specification === Specification.openapi) {
        let apis = await parseOpenApiSpecs(this, this.specificationInputDirectory);
        await processOpenApi(this, apis, renderTemplate);
      // } else if (this.specification === Specification.protobuf) {
      //   await processProtoBuf(this, renderTemplate);
      } else {
        console.log('specification type not supported: ', this.specification);
      }
    } catch (e) {
      console.log('error in process', e);
    }
  }

  private _promptForCommand(): Generator.Questions {
    let question: Generator.Questions = {
      name: 'command',
      type: 'list',
      message: 'Select a command',
      choices: Object.keys(Command),
      default: this.command,
    };

    return question;
  }

  private _promptForSpecification(): Generator.Questions {
    let question: Generator.Questions = {
      name: 'specification',
      type: 'list',
      message: 'Select a specification type',
      choices: Object.keys(Specification),
      default: this.specification,
    };

    return question;
  }

  private _promptForTemplateInputDirectory(): Generator.Questions {
    let question: Generator.Questions = {
      name: 'templateInputDirectory',
      message: 'Enter template input directory path',
      default: this.templateInputDirectory,
    };

    return question;
  }

  private _promptForSpecificationInputDirectory(): Generator.Questions {
    let question: Generator.Questions = {
      name: 'specificationInputDirectory',
      message: 'Enter specification input directory path',
      default: this.specificationInputDirectory,
    };

    return question;
  }

  private _promptForOutputDirectory(): Generator.Questions {
    let question: Generator.Questions = {
      name: 'outputDirectory',
      message: 'Enter output directory path',
      default: this.outputDirectory,
    };

    return question;
  }

}
