import React from 'react';
import ClassNames from 'classnames';

export const Cell = ({ className, ...props }) => {
  const classNames = ClassNames('GridCell', className);

  return <div className={ classNames } { ...props } />;
};
