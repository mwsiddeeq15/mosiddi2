import keyBindings from './keyBindings';
import * as SystemConfig from './systemConfigs';
import SystemParser from './parser';

// To be bound/loaded to the interface(terminal) by which it is being used
export class OS {
  constructor(context) {
    this.context = context;
    this.configs = SystemConfig;
    this.keyBindings = keyBindings;
  }

  parse(inputString, context=this.context) {
    SystemParser.call(context, inputString);
  }
}

export default OS;
