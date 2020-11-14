import "styles/global.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
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
