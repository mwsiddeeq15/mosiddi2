import React from 'react';
import './TextArea.less';


export class TextArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionStart: 0,
      value: 'Some Text...'
    };
  }

  onKeyDown(e) {
    const char = e.key;
    const { value, selectionStart } = this.state;
    let newValue = value.slice(0);
    let newSelectionStart = selectionStart;

    switch(e.keyCode) {
      case 8: // Backspace
        newValue = newValue.split('');
        newValue.splice(selectionStart-1, selectionStart > 0 ? 1 : 0);
        newValue = newValue.join('');
        newSelectionStart = Math.max(selectionStart-1, 0);
        break;
      case 37: newSelectionStart = Math.max(selectionStart-1, 0); break; // Left Arrow
      case 39: newSelectionStart = Math.min(selectionStart+1, value.length); break; // Right Arrow
      default: // Character Enter
        newValue = newValue.split('')
        newValue.splice(selectionStart, 0, char.length === 1 ? char : '');
        newValue = newValue.join('');
        newSelectionStart = selectionStart + 1;
    }

    console.log("Selection start: ", newSelectionStart)
    this.setState({ value: newValue, selectionStart: newSelectionStart });
  }

  render() {
    const { value } = this.state;

    return (
      <div tabIndex="0"
        onKeyDown={ this.onKeyDown.bind(this) }
      >
        { value }
      </div>
    );
  }
}

export default TextArea;
