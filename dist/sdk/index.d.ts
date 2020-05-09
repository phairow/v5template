/**
 * The generator entry point. Process the inputs.
 */
import * as Generator from 'yeoman-generator';
declare enum Language {
    JavaScript = "javascript",
    TypeScript = "typescript",
    Java = "java",
    Python = "python",
    Ruby = "ruby",
    Go = "go",
    CSharp = "csharp",
    ObjectiveC = "objectivec",
    CCore = "ccore",
    Swift = "swift",
    PHP = "php",
    Rust = "rust"
}
export declare type RenderTemplate = (template: string, context: object, fileName: string, extension: string, subDir?: string) => void;
export default class SdkGenerator extends Generator {
    selectedLanguage: Language;
    destinationDirectory: string;
    outputDir: string;
    templateDir: string;
    default(): Promise<void>;
    private _promptForLanguage;
    private _promptForDestination;
    private _parseOpenapiSpecs;
}
export {};
