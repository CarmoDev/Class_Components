import React from 'react';

import { Container } from './styles';

export default class Footer extends React.Component {
  render() {
  const { selectedTheme, onToggleTheme } = this.props;

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={onToggleTheme}>
        {selectedTheme === "dark" ? "🌝" : "🌚"}
      </button>
    </Container>
  );}
}