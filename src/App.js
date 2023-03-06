import React from "react";
import GlobalStyle from "./styles/global";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { ThemeProvider, ThemeContext } from "./Contexts/ThemeContext";

import Layout from "./components/Layout";

import themes from "./styles/themes";

export default class App extends React.Component {
  state = {
    changed: false,
  };

  componentDidMount() {
    console.log("Component montou");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", {
      currentState: this.state,
      prevProps,
      prevState,
    });
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch", { error, info });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", {
      currentState: this.state,
      nextProps,
      nextState,
    });

    return true
  }

  render() {
    return (
      <ThemeProvider>
        <button onClick={() => this.setState({ changed: true })}>
          Change state
        </button>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

// Forma complicado de criar state e function.
// constructor(props) {
//   super(props);

//   this.state = {
//     theme: "dark",
//   };

//   this.handleToggleTheme = this.handleToggleTheme.bind(this)
// }
