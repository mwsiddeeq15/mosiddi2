import { SystemCommands } from './systemCommands';

export const SystemParser = function(inputString) {
  const inputChunks = inputString.split(' ');
  const mainCmd = inputChunks[0];

  if(mainCmd) {
    try {
      SystemCommands[mainCmd].call(this, inputChunks.slice(1));
    } catch(e) {
      console.log(`System Parse Error ${ mainCmd }`, e);
      this.write(`[Error] no such command "${ mainCmd }"`, { type: 'ERROR' });
    }
  }
};

export default SystemParser;