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
  countPlusAction,
  countMinusAction,
  countSetPlusAction,
  countSetMinusAction,
} from "@/store/actions";

const HomeState = {
  setCount: 0,
};
function Home() {
  const brandName = protocol.brandname || "";
  // const router = useRouter();
  const { count, users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [values, setValues] = useImmer(HomeState);
  const handleClick = (config) => {
    const { type } = config;
    if (type === "up") {
      const setCount = values.setCount === 0 ? 1 : values.setCount;
      dispatch(countSetPlusAction(setCount));
    }
    if (type === "down") {
      const setCount = values.setCount === 0 ? 1 : values.setCount;
      dispatch(countSetMinusAction(setCount));
    }
  };
  const handleChange = (config) => {
    const { e } = config;
    const value = +e.target.value;
    setValues((draft) => {
      draft.setCount = value;
    });
  };
  return (
    <div className="container">
      <MainTemplate
        title={`${brandName.toUpperCase()} - Home`}
        faviconsrc="/favicon.ico"
        footer={<Footer />}
        header={<Header theme="black" />}
      >
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
          </div>
        </div>

        {/* <HomeContainer /> */}
      </MainTemplate>
    </div>
  );
}

export default Home;
