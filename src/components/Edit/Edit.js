import React from 'react';
import lodash from 'lodash';
import ClassNames from 'classnames';
import { Grid, Col, Cell, Row } from '../Grid';
import './Edit.less';

export class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { ...props } = this.props;

    return (
      <div className='Edit' { ...props }>
        { "YOLO!!!" }
      </div>
    );
  }
};

// Edit.defaultProps = {};

export const hello = "HELLO";
// export const editable = (Component, { ...config }) => (
//   class extends React.Component {
//     constructor(props) {
//       super(props);
//
//       this.state = {
//         editable: !!config.editable
//       };
//     }
//
//     render() {
//       const { editable } = this.state;
//       const { className, ...props } = this.props;
//       const classNames = ClassNames({ className, 'is-editable': editable });
//
//       return (
//         <Component className={ classNames } { ...props }/>
//       );
//     }
//   }
// );
