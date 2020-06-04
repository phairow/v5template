import { OpenAPIV3 } from 'openapi-types';
import SdkGenerator from '../index';
import { RenderTemplate } from '../index';
import { SdkApiDefinition } from '../../definition/format/SdkApiDefinition';
import { apiConvert } from '../convert/typescript/api';
import { endpointConvert } from '../convert/typescript/endpoint';
import { schemaConvert } from '../convert/typescript/schema';
import { SdkEndpoint } from '../../definition/format/SdkEndpoint';

export function process(generator: SdkGenerator, apis: SdkApiDefinition[], renderTemplate: RenderTemplate) {
  // generator.log(generator.selectedLanguage + ' selected typescript');
  // generator.log(generator.outputDir);
  // generator.log(generator.templateDir);

  let sdkApi = apiConvert(apis);

  renderTemplate.mustache('api', sdkApi, 'Api', 'ts');

  sdkApi.endpoints.forEach((sdkEndpoint: SdkEndpoint) => {
    renderTemplate.mustache('endpoint', endpointConvert(sdkEndpoint), sdkEndpoint.title, 'ts', 'endpoint');
  });

  try {
    sdkApi.schemas.forEach((schema: OpenAPIV3.SchemaObject) => {
      if (schema.title) {
        renderTemplate.mustache('schema', schemaConvert(schema), schema.title || 'unknownschema', 'ts', 'schema');
      }
    });
  } catch (e) {
    console.log('schemas fail');
  }
}