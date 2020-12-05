import { useEffect } from "react";
import protocol from "@/setting/protocol.js";
import { MainTemplate } from "@/components/base/template";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { HomeContainer } from "@/containers/home";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useImmer } from "use-immer";
import {
  countSetPlusAction,
  countSetMinusAction,
  sagaTestAction,
} from "@/store/actions";
import axios from "axios";
import { Home as apiHome } from "@/lib/api";

const HomeState = {
  setCount: 0,
};
function Home(props) {
  const { pageProps: serverState } = props;
  console.log(props);
  const brandName = protocol.brandname || "";
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);
  const [values, setValues] = useImmer(HomeState);

  // NOTE: click event
  const handleClick = (config) => {
    const { type } = config;
    if (type === "up") {
      // dispatch(countSetPlusAction(values.setCount));
      dispatch(sagaTestAction({ what: "the hell" }));
    }
    if (type === "down") {
      dispatch(countSetMinusAction(values.setCount));
    }
  };
  // NOTE: change event
  const handleChange = (config) => {
    const { e } = config;
    const value = +e.target.value;
    setValues((draft) => {
      draft.setCount = value;
    });
  };

  console.log(serverState, "serverState");
  console.log(count, "countReducer");
  const isLoading = count.sagaTest.pending === true;

  return (
    <div className="container">
      <MainTemplate
        title={`${brandName.toUpperCase()} - Home`}
        faviconsrc="/favicon.ico"
        footer={<Footer />}
        header={<Header theme="black" />}
      >
        {/* {isLoading && <div>Loading...</div>}
        <div style={{ height: "200px", textAlign: "center" }}>
          <div style={{ marginTop: "130px" }}>
            <input
              type="text"
              value={values.setCount}
              onChange={(e) => handleChange({ e })}
            />
            <button onClick={() => handleClick({ type: "up" })}>+</button>
            <button onClick={() => handleClick({ type: "down" })}>-</button>
            <div>
              count : <span>{count.number}</span>
            </div>
            <div>{JSON.stringify(serverState.data)}</div>
          </div>
        </div> */}

        <HomeContainer />
      </MainTemplate>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const { count } = ctx.store.getState();

  const { data } = await apiHome.test();
  const test = await apiHome.main();
  console.log(test, "test");
  // console.log(data);

  return { count, data };
};
export default Home;

// const router = useRouter();
