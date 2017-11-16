import React from 'react';
import ClassNames from 'classnames';
import { shellDecorator } from './OS/systemConfigs';
import keyBindings from './OS/keyBindings';
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

const Shell = ({ decorator, path }) => (
  <span className="Terminal-shell">
    <span className="white-space">_</span>
    <b>{ splitInput(`${ decorator } ${ path }`) }</b>&nbsp;
  </span>
);

const TerminalInput = ({ input, history, decorator, path, className, onChange, ...props }) => {
  return (
    <div className={ ClassNames('Terminal-input', className) }>
      {
        [
          ...history.map((hist, index) => (
            <div key={ index } className="input input-history">
              <Shell decorator={ decorator } path={ path } />
              <span className="textarea-wrapper">
                {
                  splitInput(hist)
                }
              </span>
            </div>
          )),
          <div key={ history.length } className="input input-current">
            <Shell decorator={ decorator } path={ path } />
            <span className="textarea-wrapper">
              {
                splitInput(input)
              }
              <textarea
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

export class Terminal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      history: [],
      workPath: '/'
    };
  }

  onChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    const { input, history, workPath } = this.state;

    return (
      <div className='Terminal'>
        <TerminalInput
          decorator={ shellDecorator }
          path={ workPath }
          history={ history }
          input={ input }
          onKeyDown={ keyBindings.down.bind(this) }
          onChange={ this.onChange.bind(this) }
        />
      </div>
    );
  }
};
