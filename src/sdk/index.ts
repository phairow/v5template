/**
 * The generator entry point. Process the inputs.
 */

import * as Generator from 'yeoman-generator';
import * as SwaggerParser from 'swagger-parser';
import { openApiParser } from "../definition/parse/openapi/openApiParser";
import * as path from 'path';
import * as fs from 'fs';
import * as Mustache from 'mustache';
import { SdkApiDefinition } from '../definition/format/SdkApiDefinition';

enum Language {
  JavaScript = 'javascript',
  TypeScript = 'typescript',
  Java = 'java',
  Python = 'python',
  Ruby = 'ruby',
  Go = 'go',
  CSharp = 'csharp',
  ObjectiveC = 'objectivec',
  CCore = 'ccore',
  Swift = 'swift',
  PHP = 'php',
  Rust = 'rust',
}

export type RenderTemplate = {
  ejs: (template: string, context: object, fileName: string, extension: string, subDir?: string) => void;
  mustache: (template: string, context: object, fileName: string, extension: string, subDir?: string) => void;
}

export default class SdkGenerator extends Generator {
  public selectedLanguage: Language = Language.JavaScript;
  public destinationDirectory: string = 'out';

  public outputDir: string = '';
  public templateDir: string = '';

  public async default() {
    if (this.options.language) {
      this.selectedLanguage = this.options.language.toLowerCase();
    } else {
      let chosenLanguage: keyof typeof Language;
      chosenLanguage = (await this.prompt(this._promptForLanguage())).language;
      this.selectedLanguage = Language[chosenLanguage];
    }

    if (this.options.dest) {
      this.destinationDirectory = this.options.dest;
    } else {
      this.destinationDirectory = (await this.prompt(this._promptForDestination())).destination;
    }

    this.outputDir = this.destinationDirectory + '/' + this.selectedLanguage.toLocaleLowerCase() + '/';
    this.templateDir =
      path.resolve(__dirname, '../../src/sdk/template/', this.selectedLanguage.toLowerCase()) + '/';

    let processor = await import('./process/' + this.selectedLanguage.toLowerCase());

    let renderTemplate: RenderTemplate = {
      ejs: (template: string, context: object, fileName: string, fileExtension: string, subDir?: string) => {
        let outFile = this.outputDir + (subDir ? subDir + '/' : '') + fileName + '.' + fileExtension;
        this.fs.copyTpl(
          this.templatePath(this.templateDir + template + '.ejs'),
          this.destinationPath(outFile),
          context,
        );
      },
      mustache: (template: string, context: object, fileName: string, fileExtension: string, subDir?: string) => {
        try {
          let outFile = this.outputDir + (subDir ? subDir + '/' : '') + fileName + '.' + fileExtension;
          let templateString = fs.readFileSync(this.templateDir + template + '.mustache', 'utf8');
          let output = Mustache.render(templateString, context, (partialName) => { return fs.readFileSync(this.templateDir + partialName + '.mustache', 'utf8') });
          this.fs.write(outFile, output);
        } catch (e) {
          console.log(e);
        }
      }
    }
    
    let apis = await this._parseOpenapiSpecs();
    
    processor.process(this, apis, renderTemplate);
  }

  private _promptForLanguage(): Generator.Questions {
    let question: Generator.Questions = {
      name: 'language',
      type: 'list',
      message: 'Select a language',
      choices: Object.keys(Language),
      default: this.selectedLanguage,
    };

    return question;
  }

  private _promptForDestination(): Generator.Questions {
    let question: Generator.Questions = {
      name: 'destination',
      message: 'Enter destination path',
      default: this.destinationDirectory,
    };

    return question;
  }

  private async _parseOpenapiSpecs(): Promise<SdkApiDefinition[]> {
    let schemaDir = path.resolve(__dirname, '../../specifications/');
    let specificationFiles: string[] = [];

    fs.readdirSync(schemaDir).forEach((file) => {
      let schemaPath = path.join(schemaDir, file);
      let stats = fs.statSync(schemaPath);

      if (stats.isFile() && file !== 'responses.yaml' && path.extname(schemaPath) === '.yaml') {
        specificationFiles.push(schemaPath);
      } else if (stats.isDirectory()) {
        let subDir = file;
        let schemaDirSubfolder = path.resolve(__dirname, '../../specifications/', subDir);
        fs.readdirSync(schemaDirSubfolder).forEach((subFile) => {
          let schemaPath = path.join(schemaDir, subDir, subFile);
          let stats = fs.statSync(schemaPath);
    
          if (stats.isFile() && path.extname(schemaPath) === '.yaml') {
            specificationFiles.push(schemaPath);
          }
        });
      }
    });

    let specsToProcess = specificationFiles.map(async (schemaPath) => {
      return await openApiParser(this, schemaPath);
    });

    return await Promise.all(specsToProcess);
  }
}
