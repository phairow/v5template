import { OpenAPIV3 } from 'openapi-types';
import SdkGenerator from './index';
import { RenderTemplate } from './index';
import { SdkApiDefinition } from '../definition/format/SdkApiDefinition';
import { SdkRequest } from '../definition/format/SdkRequest';
import { Command } from './command.enum.js';

export async function processOpenApi(
  generator: SdkGenerator,
  apis: SdkApiDefinition[],
  renderTemplate: RenderTemplate
) {
  let apis = await parseOpenapiSpecs(generator);
  let sdkApi = apiConvert(apis);

  renderTemplate('api', sdkApi, 'Api', 'ts');

  sdkApi.endpoints.forEach((sdkEndpoint: SdkRequest) => {
    renderTemplate('endpoint', endpointConvert(sdkEndpoint), sdkEndpoint.title, 'ts', 'endpoint');
  });

  try {
    sdkApi.schemas.forEach((schema: OpenAPIV3.SchemaObject) => {
      if (schema.title) {
        renderTemplate('schema', schemaConvert(schema), schema.title || 'unknownschema', 'ts', 'schema');
      }
    });
  } catch (e) {
    console.log('schemas fail');
  }
}
