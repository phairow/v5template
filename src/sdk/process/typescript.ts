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

  renderTemplate('api', sdkApi, 'api', 'js');

  sdkApi.endpoints.forEach((sdkEndpoint: SdkEndpoint) => {
    renderTemplate('endpoint', endpointConvert(sdkEndpoint), sdkEndpoint.title, 'ts', 'endpoints');
  });
}