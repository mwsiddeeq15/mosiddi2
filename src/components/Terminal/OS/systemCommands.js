import jQuery from 'jquery';

export const SystemCommands = {
  cd: function (args) {
    this.setState({ workPath: args[0] });
  },

  // echo: function (args) {
  //   const { history, input } = this.state;
  //
  //   this.setState({
  //     history: [ ...history, input ],
  //     input: e.target.value
  //   }, () => {
  //     jQuery('.input-current .Terminal-textarea').focus();
  //   });
  // }
};
