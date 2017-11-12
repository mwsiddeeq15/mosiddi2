import React from 'react';
import lodash from 'lodash';
import ClassNames from 'classnames';
import { Grid, Col, Cell, Row } from '../Grid';
import './Edit.less';

/*
  AppStateConfig = { someStateProp: [ ...someConfig ] or { ...someConfigKey: someConfig } }
  * Just pass the relavant state into the editable HOC with a
    corresponding index and/or key
    (key is recommended because the object can found in the appstate no matter the order)

  *'someConfig' Structure
  {
    id: <indexOrKeyOrId>,
    ....

  }


*/
export const editable = (Component, { ...config }) => (
  class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        editable: !!config.editable,
        edit: false
      };
    }

    onSave(config) {
      const { onSave } = this.props;
    }

    onEdit(config) {
      const { onEdit } = this.props;
    }

    onClose() {
      const { onClose } = this.props;
    }

    toggleEdit(editable) {
      editable = typeof editable !== undefined ? editable : !this.state.editable;
      this.setState({ editable });
    }

    // onDelete() {
    //   const { onDelete } = this.props;
    // }
    // renderEditForm() {
    //   return (
    //
    //   );
    // }

    render() {
      const { editable } = this.state;
      const { className, ...props } = this.props;
      const classNames = ClassNames({ className, 'is-editable': editable });

      return (
        <Component className={ classNames } { ...props }/>
      );
    }
  }
);

// module.exports = "CHAMON"
