import { SystemCommands } from './systemCommands';

export const SystemParser = function(inputString) {
  const inputChunks = inputString.split(' ');
  const mainCmd = inputChunks[0];

  try {
    SystemCommands[mainCmd].apply(this, inputChunks.slice(1));
  } catch(e) {

  }
};