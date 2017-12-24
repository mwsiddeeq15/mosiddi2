import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import { getRandomInt } from './utils';


// export const Read = (inputString) => {};

// export function OnEnter(e) {
//   const { history, input } = this.state;
//
//   e.preventDefault();
//   // e.target.value = '';
//
//   this.setState({
//     history: [ ...history, input ],
//     input: e.target.value
//   }, () => {
//     // const terminalHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
//     // const historyHeight = ReactDOM.findDOMNode(this).querySelector('.Terminal-historyInput').getBoundingClientRect().height
//     // const bottom = terminalHeight - historyHeight;
//     // const speed = bottom/terminalHeight;
//     //
//     // console.log("Enter!! ", bottom);
//     // // jQuery('.Terminal-historyInput .last .Terminal-splitInput-section').css('bottom', 0);
//     // jQuery('.Terminal-historyInput .last .Terminal-splitInput-section').each((i, el) => {
//     //   jQuery(el).animate({bottom: bottom}, 1000 * speed + (10/getRandomInt(1,11) * 75), 'swing', () => {
//     //     // setTimeout(() => {
//     //     //   jQuery('.Terminal-historyInput .last .Terminal-splitInput-section').removeClass('last');
//     //     // }, 5000);
//     //   });
//     // });
//     jQuery('.input-current .Terminal-textarea').focus();
//   });
// };


// export function OnClear(e) {
//   const { history, input } = this.state;
//
//   e.preventDefault();
//   e.target.value = '';
//
//   // const terminalHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
//   // const historyHeight = ReactDOM.findDOMNode(this).querySelector('.Terminal-historyInput').getBoundingClientRect().height
//   // const bottom = terminalHeight - historyHeight;
//   // const speed = bottom/terminalHeight;
//   //
//   // console.log("Enter!! ", bottom);
//   // // jQuery('.Terminal-historyInput .Terminal-splitInput-section').css('bottom', 0);
//   // jQuery('.Terminal-historyInput .Terminal-splitInput-section').each((i, el) => {
//   //   jQuery(el).animate({bottom: "120%"}, 1000 * speed + (10/getRandomInt(1,11) * 75), 'swing', () => {
//   //     this.setState({
//   //       history: []
//   //     });
//   //   });
//   // });
// };


export function OnAutoComplete(e) {

}

export function TrackCursor(e) {
  console.log("Cursor ", e,target.selectionStart)
}