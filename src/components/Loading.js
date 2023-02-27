import React from "react";
import Main from "./Main";
import About from "./About";
import Work from "./Work";
import Head from "./Head";
import "./Loading.css";
class LoadingScreen extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="loading-screen">
          <img src="./image/logo.png" alt="로고" className="logo" />
        </div>
      );
    }

    return (
      <>
        <Head />
        <main>
          <Main />
          <About />
          <Work />
        </main>
      </>
    );
  }
}

export default LoadingScreen;
