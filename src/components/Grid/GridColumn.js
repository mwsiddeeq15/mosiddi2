import React from 'react';
import ClassNames from 'classnames';

export const Col = ({ className, span, ...props }) => {
  const classNames = ClassNames('GridColumn', className, { span });

  return <div className={ classNames } { ...props } />;
};
