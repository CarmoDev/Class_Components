import React from "react";

import { ThemeContext } from "../../Contexts/ThemeContext";

import { Container } from "./styles";

function HOC(HeaderComponent) {
  return class Component extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {(value) => <HeaderComponent {...value} />}
        </ThemeContext.Consumer>
      );
    }
  };
}

// render props
class Header extends React.Component {
  render() {
    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button type="button" onClick={this.props.handleToggleTheme}>
          {this.props.theme === "dark" ? "🌝" : "🌚"}
        </button>
      </Container>
    );
  }
}

export default HOC(Header);
