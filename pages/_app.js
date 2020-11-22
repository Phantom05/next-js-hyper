import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import "styles/global.scss";
import withRedux, { createWrapper } from "next-redux-wrapper";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "@/store/reducers/rootReducer";
import withReduxSaga from "next-redux-saga";
import rootSaga from "@/store/sagas/rootSaga";
import createSagaMiddleware from "redux-saga";

const configureSotre = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureSotre, {
  debug: process.env.NODE_ENV === "development,",
});

class RootApp extends App {
  static async getInitialProps(context) {
    const { Component, ctx } = context;
    const { store, isServer } = ctx; // next의 context에서 store를 받을 수 있게된다.

    const pageProps = (await Component.getInitialProps?.(ctx)) || {};
    return { pageProps };
  }
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
      <>
        <Component {...other} />
      </>
    );
  }
}

export default wrapper.withRedux(withReduxSaga(RootApp));

// const RootApp = ({ Component, ...others }) => <Component {...others} />;

// const Test = ({ Component, store, ...other }) => {
//   return (
//     <Provider store={store}>
//       <Container>
//         <Component {...other} />
//       </Container>
//     </Provider>
//   );
// };

// const configureStore = (initialState, options) => {
//   const middlewares = []; // 미들웨어들을 넣으면 된다.
//   const enhancer =
//     process.env.NODE_ENV === "production"
//       ? compose(applyMiddleware(...middlewares))
//       : composeWithDevTools(applyMiddleware(...middlewares));
//   const store = createStore(reducer, initialState, enhancer);
//   return store;
// };

// export default withRedux(configureStore)(Test);

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

// const createStore = intialState =>{
//   const sagaMiddleware = createSagaMiddleware();

//   const store = createStore(
//     reducer,
//     intialState,
//     applyMiddleware(sagaMiddleware)
//   );

//   sagaMiddleware.run(rootSaga);

//   return store;
// }
