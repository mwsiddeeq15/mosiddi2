import React from 'react';
import ClassNames from 'classnames';

export const Row = ({ className, span, ...props }) => {
  const classNames = ClassNames('GridRow', className, { span });

  return <div className={ classNames } { ...props } />;
};
