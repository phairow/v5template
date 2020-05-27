"use strict";
/**
 * The generator entry point. Process the inputs.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Generator = require("yeoman-generator");
const openApiParser_1 = require("../definition/parse/openapi/openApiParser");
const path = require("path");
const fs = require("fs");
const Mustache = require("mustache");
var Language;
(function (Language) {
    Language["JavaScript"] = "javascript";
    Language["TypeScript"] = "typescript";
    Language["Java"] = "java";
    Language["Python"] = "python";
    Language["Ruby"] = "ruby";
    Language["Go"] = "go";
    Language["CSharp"] = "csharp";
    Language["ObjectiveC"] = "objectivec";
    Language["CCore"] = "ccore";
    Language["Swift"] = "swift";
    Language["PHP"] = "php";
    Language["Rust"] = "rust";
})(Language || (Language = {}));
class SdkGenerator extends Generator {
    constructor() {
        super(...arguments);
        this.selectedLanguage = Language.JavaScript;
        this.destinationDirectory = 'out';
        this.outputDir = '';
        this.templateDir = '';
    }
    default() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.options.language) {
                this.selectedLanguage = this.options.language.toLowerCase();
            }
            else {
                let chosenLanguage;
                chosenLanguage = (yield this.prompt(this._promptForLanguage())).language;
                this.selectedLanguage = Language[chosenLanguage];
            }
            if (this.options.dest) {
                this.destinationDirectory = this.options.dest;
            }
            else {
                this.destinationDirectory = (yield this.prompt(this._promptForDestination())).destination;
            }
            this.outputDir = this.destinationDirectory + '/' + this.selectedLanguage.toLocaleLowerCase() + '/';
            this.templateDir =
                path.resolve(__dirname, '../../src/sdk/template/', this.selectedLanguage.toLowerCase()) + '/';
            let processor = yield Promise.resolve().then(() => require('./process/' + this.selectedLanguage.toLowerCase()));
            let renderTemplate = {
                ejs: (template, context, fileName, fileExtension, subDir) => {
                    let outFile = this.outputDir + (subDir ? subDir + '/' : '') + fileName + '.' + fileExtension;
                    this.fs.copyTpl(this.templatePath(this.templateDir + template + '.ejs'), this.destinationPath(outFile), context);
                },
                mustache: (template, context, fileName, fileExtension, subDir) => {
                    try {
                        let outFile = this.outputDir + (subDir ? subDir + '/' : '') + fileName + '.' + fileExtension;
                        let templateString = fs.readFileSync(this.templateDir + template + '.mustache', 'utf8');
                        let output = Mustache.render(templateString, context, (partialName) => { return fs.readFileSync(this.templateDir + partialName + '.mustache', 'utf8'); });
                        this.fs.write(outFile, output);
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
            };
            let apis = yield this._parseOpenapiSpecs();
            processor.process(this, apis, renderTemplate);
        });
    }
    _promptForLanguage() {
        let question = {
            name: 'language',
            type: 'list',
            message: 'Select a language',
            choices: Object.keys(Language),
            default: this.selectedLanguage,
        };
        return question;
    }
    _promptForDestination() {
        let question = {
            name: 'destination',
            message: 'Enter destination path',
            default: this.destinationDirectory,
        };
        return question;
    }
    _parseOpenapiSpecs() {
        return __awaiter(this, void 0, void 0, function* () {
            let schemaDir = path.resolve(__dirname, '../../specifications/');
            let specificationFiles = [];
            fs.readdirSync(schemaDir).forEach((file) => {
                let schemaPath = path.join(schemaDir, file);
                let stats = fs.statSync(schemaPath);
                if (stats.isFile() && file !== 'responses.yaml' && path.extname(schemaPath) === '.yaml') {
                    specificationFiles.push(schemaPath);
                }
                else if (stats.isDirectory()) {
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
            let specsToProcess = specificationFiles.map((schemaPath) => __awaiter(this, void 0, void 0, function* () {
                return yield openApiParser_1.openApiParser(this, schemaPath);
            }));
            return yield Promise.all(specsToProcess);
        });
    }
}
exports.default = SdkGenerator;
