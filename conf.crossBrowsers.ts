import { Config } from 'protractor';
import { config as baseConfig} from './conf';

// Modify browsers used for testing
baseConfig.capabilities = undefined;
baseConfig.multiCapabilities = [
  {'browserName': 'chrome'},
  {'browserName': 'firefox'}
];

// Use modifed base log4js.json as protractor log4js.json
export let config: Config = baseConfig;
