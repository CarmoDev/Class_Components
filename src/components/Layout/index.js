import React from "react";

import Header from "../Header";
import PostsList from "../PostsList";
import Footer from "../Footer";

export default class Layout extends React.Component {
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  }
  
  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
    console.log('component vai desmontar')
  }

  handleScroll = () => {
    console.log('Scrolled')
  }

  render() {
    return (
      <>
        <Header />
        <PostsList />
        <Footer />
      </>
    );
  }
}
