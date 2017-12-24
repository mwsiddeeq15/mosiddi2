import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import OS from './OS';
// import config from './TerminalConfig';
import './Terminal.less';

// splits input value into html elements to animate
function splitInput(input) {
  return input.split('').map((s, i) => (
    <span className="Terminal-splitInput-section" key={ i }>
      { s === ' ' ? <span className="white-space">_</span> : s }
    </span>
  ));
}

// textarea grows and expands with input text
function autoGrow(element) {
  element.style.height = (element.scrollHeight)+"px";
}

const Shell = ({ type, decorator, path }) => (
  <span className="Terminal-shell">
    <span className="white-space">_</span>
    {
      type === "INPUT" ? (
        <b>{ splitInput(`${ decorator } ${ path }`) }</b>
      ) : ''
    }
    &nbsp;
  </span>
);

class TerminalInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { input, history, path, decorator, className, onChange, ...props } = this.props;

    return (
      <div className={ ClassNames('Terminal-input', className) }>
        {
          [
            ...history.map((hist, index) => (
              <div key={ index } className={ `input input-history type-${ hist.type } ${ ClassNames({ 'archive': hist.archive }) }` }>
                <Shell type={ hist.type } decorator={ decorator } path={ hist.path } />
                <span className="textarea-wrapper">
                {
                  splitInput(hist.value)
                }
              </span>
              </div>
            )),
            <div key={ history.length } className="input input-current">
              <Shell type="INPUT" decorator={ decorator } path={ path } />
              <span className="textarea-wrapper">
              {
                splitInput(input)
              }
                <textarea
                  ref={ (ref) => { this.textarea = ReactDOM.findDOMNode(ref); } }
                  className="Terminal-textarea"
                  spellCheck="false"
                  onChange={ (e) => {
                    onChange(e);
                    autoGrow(e.target);
                  }}
                  { ...props }
                />
            </span>
            </div>
          ]
        }
      </div>
    );
  };
}

export class Terminal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      history: [],
      path: '/',
      traverseHistory: {
        input: '', // holds current input while traversing
        position: 0
      },
      keysDown: new Set()
    };

    this.read = this.read.bind(this);
    this.write = this.write.bind(this);

    //Bind OS to Interface
    this.OS = new OS(this);
  }

  read() {
    return this.state.input
  }

  write(text, options={}, cb) {
    const { history } = this.state;
    const { value } = this.textarea;
    const output = {
      archive: false,
      type: 'LOG',
      ...options,
      value: text
    };

    this.setState({
      history: [ ...history, output ],
      input: output.type === 'INPUT' ? '' : value
    }, () => {
      this.textarea.value = output.type === 'INPUT' ? '' : value;
      this.textarea.focus();
      cb && cb();
    });
  }

  log(text) {
    this.write(text, { type: 'LOG' });
  }

  traverseHistory(e, incr) {
    const { history, traverseHistory: { position, input } } = this.state;
    const inputHistory = history.filter((h) => h.type === 'INPUT').map((h) => h.value);
    const newPosition = Math.max(0, Math.min(position + incr, inputHistory.length)) - 1;
    const newInput = inputHistory.reverse()[newPosition] || input;

    e.preventDefault();

    this.state.traverseHistory.position = newPosition + 1;
    this.textarea.value = newInput;
    this.setState({ input: newInput }, () => this.textarea.focus());
  }

  clear() {
    console.log('Clear!!')
    this.setState({
      history: this.state.history.map((h) => ({ ...h, archive: true }))
    });
  }

  onEnter(e) {
    const { path } = this.state;
    const { value } = e.target;
    const SystemParser = this.OS.parse.bind(this, value, this);

    e.preventDefault();

    this.state.traverseHistory.position = 0;
    this.write(value, { type: 'INPUT', path }, SystemParser);
  }

  onChange(e) {
    this.state.traverseHistory.input = e.target.value;
    this.setState({ input: e.target.value });
  }

  onKeyDown(e) {
    this.state.keysDown.add(e.keyCode);

    switch(e.keyCode) {
      case 13: // Enter
        this.onEnter(e);
        break;
      case 38: // Up Arrow
        this.traverseHistory(e, +1);
        break;
      case 40: // Down Arrow
        this.traverseHistory(e, -1);
        break;
      // case 220: // '\' key
      //   SystemFunctions.OnClear.call(this, e);
      //   break;
      // case 9: // Tab
      //   SystemFunctions.OnAutoComplete.call(this, e);
      //   break;
      default:
        if(this.state.keysDown.size === 2
        && this.state.keysDown.has(91) || this.state.keysDown.has(93)) {
          e.preventDefault();
          console.log("Down:: ", e.keyCode, this.state.keysDown)
          if(this.state.keysDown.has(75)){ this.clear(e); return false;}
        }

        // console.log("Key: ", e.key, e.keyCode);
        // console.log("KeyDown....event: ", e);
    }
  }

  onKeyUp(e) {
    // this.keyDown
    // this.state.keysDown.clear();
    this.state.keysDown.delete(e.keyCode);
    console.log("UP:: ", e.keyCode)
  }

  render() {
    const { input, history, path } = this.state;

    return (
      <div className='Terminal'>
        <TerminalInput
          ref={ (ref) => { this.textarea = ref && ref.textarea; } }
          decorator={ this.OS.configs.shellDecorator }
          history={ history }
          input={ input }
          path={ path }
          onKeyDown={ this.onKeyDown.bind(this) }
          onKeyUp={ this.onKeyUp.bind(this) }
          onChange={ this.onChange.bind(this) }
        />
      </div>
    );
  }
};

// keyBindings.down.bind(this)