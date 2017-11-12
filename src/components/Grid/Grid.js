import React from 'react';
import ClassNames from 'classnames';
import './Grid.less';

// export const Grid = ({ className, ...props }) => {
//   const classNames = ClassNames('Grid', className);
//
//   return <div className={ classNames } { ...props } />;
// };
//
//  const GridCell = ({ className, ...props }) => {
//   const classNames = ClassNames('GridCell', className);
//
//   return <div className={ classNames } { ...props } />;
// };
//
//  const GridRow = ({ className, ...props }) => {
//   const classNames = ClassNames('GridRow', className);
//
//   return <div className={ classNames } { ...props } />;
// };
//
//  const GridColumn = ({ className, ...props }) => {
//   const classNames = ClassNames('GridColumn', className);
//
//   return <div className={ classNames } { ...props } />;
// };
export const Grid = ({ className, ...props }) => {
  const classNames = ClassNames('Grid', className);

  return <div className={ classNames } { ...props } />;
};
