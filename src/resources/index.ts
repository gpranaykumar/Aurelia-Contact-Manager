import {FrameworkConfiguration, PLATFORM} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration): void {
  //config.globalResources([]);
  config.globalResources([PLATFORM.moduleName('./elements/loading-indicator')]);
  config.globalResources([PLATFORM.moduleName('./elements/react-wrapper')]);
  config.globalResources([PLATFORM.moduleName('./elements/react-to-aurelia')]);
}
