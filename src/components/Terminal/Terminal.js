import React from 'react';
import ClassNames from 'classnames';
import keyBindings from './OS/keyBindings';
import './Terminal.less';


function splitInput(input) {
  return input.split('').map((s, i) => (
    <span className="Terminal-splitInput-section" key={ i }>
      { s === ' ' ? <span className="white-space">_</span> : s }
    </span>
  ));
}

function autoGrow(element) {
  element.style.height = (element.scrollHeight)+"px";
}

const Shell = ({ decorate }) => (
  <span className="Terminal-shell">
    <span className="white-space">_</span>
    <b>{ splitInput('$Mosi') }</b>&nbsp;
  </span>
);

const TerminalInput = ({ input, history, className, onChange, ...props }) => {
  return (
    <div className={ ClassNames('Terminal-input', className) }>
      {
        [
          ...history.map((hist, index) => (
            <div key={ index } className="input input-history">
              <Shell />
              <span className="textarea-wrapper">
                {
                  splitInput(hist)
                }
              </span>
            </div>
          )),
          <div key={ history.length } className="input input-current">
            <Shell />
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
    };
  }

  onChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div className='Terminal'>
        <TerminalInput
          history={ this.state.history }
          input={ this.state.input }
          onKeyDown={ keyBindings.down.bind(this) }
          onChange={ this.onChange.bind(this) }
        />
      </div>
    );
  }
};
