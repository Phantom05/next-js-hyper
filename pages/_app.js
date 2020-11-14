import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import "styles/global.scss";
import CssBaseline from "@material-ui/core/CssBaseline";

// import Layout from "../components/material/Layout";

export default class RootApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, ...other } = this.props;
    return (
      <Container>
        {/* <Head>
                    <title>Static Website</title>
                {/* </Head> */}
        {/* <Layout> */}
        <Component {...other} />
        {/* </Layout> */}
      </Container>
    );
  }
}

{
  /* <style jsx global>{`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
}

* {
  box-sizing: border-box;
}
`}</style> */
}
