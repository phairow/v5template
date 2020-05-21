import { OpenAPIV3 } from 'openapi-types';
import SdkGenerator from '../index';
import { RenderTemplate } from '../index';
import { SdkApiDefinition } from '../../definition/format/SdkApiDefinition';
import { apiConvert } from '../convert/typescript/api';
import { endpointConvert } from '../convert/typescript/endpoint';
import { SdkEndpoint } from '../../definition/format/SdkEndpoint';

export function process(generator: SdkGenerator, apis: SdkApiDefinition[], renderTemplate: RenderTemplate) {
  // generator.log(generator.selectedLanguage + ' selected typescript');
  // generator.log(generator.outputDir);
  // generator.log(generator.templateDir);

  let sdkApi = apiConvert(apis);

  renderTemplate.mustache('api', sdkApi, 'api', 'ts');

  sdkApi.endpoints.forEach((sdkEndpoint: SdkEndpoint) => {
    renderTemplate.mustache('endpoint', endpointConvert(sdkEndpoint), sdkEndpoint.title, 'ts', 'endpoints');
  });

  try {
    sdkApi.parameters.forEach((parameter: OpenAPIV3.ParameterObject) => {
      renderTemplate.mustache('parameter', parameter, parameter.name, 'ts', 'parameter');
    });
  } catch (e) {
    console.log('parameters fail');
  }
  try {
    sdkApi.schemas.forEach((schema: OpenAPIV3.SchemaObject) => {
      if (schema.title) {
        renderTemplate.ejs('schema', schema, schema.title || 'unknownschema', 'ts', 'schema');
      }
    });
  } catch (e) {
    console.log('schemas fail');
  }
}