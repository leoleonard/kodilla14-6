var Counter = React.createClass({

    getInitialState: function() {
    return {
      counter: 0
    };
  },

    decrement: function() {
    this.setState({
      counter: this.state.counter -1
    });
  },

    increment: function () {
      this.setState({
        counter: this.state.counter +1
      });
    },

    getDefaultProps: function() {
    console.log('Wartości domyślne');
  },

  componentWillMount() {
      console.log('Przed przyłączeniem komponentu');
    },

    componentDidMount() {
      console.log("Po przyłączeniu kompenentu");
    },

    componentWillReceiveProps() {
      console.log("aktualizwanie stanu komponentu na podstawie nadchodzących wiadomości");
    },

    shouldComponentUpdate() {
      console.log("czy faktycznie trzeba nadpisac komponent?");
      return true;
    },

    componentDidUpadete() {
      console.log("nadpisanie DOM");
    },

    componentWillUnmount() {
      console.log("odpinanie zdarzeń z DOM");
    },



    render: function() {
      return React.createElement("div", {className: "container"},
        React.createElement("span", {}, "Licznik: " + this.state.counter),
        React.createElement("button", {onClick: this.increment}, "Plus"),
        React.createElement("button", {onClick: this.decrement}, "Minus"),
      );
    }
});
