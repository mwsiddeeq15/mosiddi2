import React from 'react';
import ClassNames from 'classnames';
import keyBindings from './OS/keyBindings';
import './Terminal.less';


function splitInput(input, offset=0) {
  return input.split('').map((s, i) => (
    <span className="Terminal-splitInput-section" key={ i }>
      <span className="whiteSpace">{ [ Array(offset + 1).join('_'), ...input.slice(0, i+1) ] }</span>
      { s }
    </span>
  ));
}

const Shell = ({ decorate }) => (
  <span className="Terminal-shell">
    <span className="whiteSpace">_</span>
    <b>{ splitInput('$Mosi') }</b>
  </span>
);

const TerminalInputDisplay = ({ input, className, offset }) => (
  <div className={ ClassNames('Terminal-inputDisplay', className) }>
    <Shell />
    {
      splitInput(input, offset)
    }
  </div>
);

const TerminalHistory = ({ history, className, offset }) => {
  return (
    <div className={ ClassNames('Terminal-historyInput', className) }>
      {
        history.map((input, index) => (
          <div className={ ClassNames(index === history.length-1 && 'last') } key={ index }>
            <Shell />
            {
              splitInput(input, offset)
            }
          </div>
        ))
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
      cursor: 0
    };
  }

  componentDidMount() {
  }

  onChange(e) {
    console.log("Input: ", e.target.value);
    this.setState({ input: e.target.value });
  }

  render() {
    const { ...props } = this.props;

    return (
      <div className='Terminal'
        onClick={ () => {
          console.log("Click");
          document.querySelector('.Terminal-input')
        } }
        { ...props }>
        <TerminalHistory history={ this.state.history } offset={ 6 } />
        <TerminalInputDisplay input={ this.state.input } offset={ 6 } />
        <textarea
          className="Terminal-input"
          rows="1"
          spellCheck="false"
          onKeyDown={ keyBindings.down.bind(this) }
          onChange={ this.onChange.bind(this) }
        >
        </textarea>
      </div>
    );
  }
};
