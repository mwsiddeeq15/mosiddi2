export const SystemCommands = {
  cd: function (args) {
    this.setState({ path: args[0] || '/' }); //TODO:: no state reference in here
  },

  echo: function (args) {
    this.write(args.join(' '));
  }
};
