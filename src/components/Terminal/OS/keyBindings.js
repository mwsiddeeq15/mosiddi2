import * as SystemFunctions from './systemFunctions';

export function down(e) {
  switch(e.keyCode) {
    case 13: // Enter
      SystemFunctions.OnEnter.call(this, e);
      break;
    case 220: //
      SystemFunctions.OnClear.call(this, e);
      break;
    case 9: // Tab
      SystemFunctions.OnAutoComplete.call(this, e);
      break;
    default:
      console.log("Key: ", e.key, e.keyCode)
  }
};

export default {
  down
};
