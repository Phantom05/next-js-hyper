import protocol from "@/setting/protocol.js";
import { MainTemplate } from "@/components/base/template";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { HomeContainer } from "@/containers/home";
import { PriceContainer } from "@/containers/price";
import { setPriceData } from "@/lib/utils";

export default function Price(props) {
  const { pageProps: serverState } = props;
  const brandName = protocol.brandname || "";
  return (
    <div className="container">
      <MainTemplate
        title={`${brandName.toUpperCase()} - Home`}
        faviconsrc="/favicon.ico"
        footer={<Footer />}
        header={<Header fixed crossEnabled={false} />}
      >
        <PriceContainer data={serverState.data} />
      </MainTemplate>
    </div>
  );
}

Price.getInitialProps = async (ctx) => {
  const { count } = ctx.store.getState();

  // const { data } = await apiHome.test();
  // const test = await apiHome.main();
  // console.log(test, "test");

  let data = [
    {
      id: 1,
      seed: [500, 1000],
      name: "starter",
      grade: "starter",
      label: "club",
      fee: 0,
      info:
        "소액으로 투자에 입문해보시는 분들께 적합한 상품입니다. 큰돈으로 투자하기에 부담되시는분들 위해 쉽게 접근 할 수 있도록 만든 상품입니다. .",
      contractList: ["원금 보장 상품"],
      interestRate: [0.05, 0.07],
      contractPeriod: 1,
      event: 1,
    },
    {
      id: 2,
      seed: [1000, 3000],
      name: "basic",
      grade: "basic",
      label: "club",
      fee: 40,
      info: "시드가 적고 초보자를 위한 상품입니다.",
      contractList: ["원금 보장 상품"],
      interestRate: [0.1, 0.14],
      contractPeriod: 1,
      event: 1,
    },
    {
      id: 3,
      seed: [3000, 10000],
      name: "pro",
      grade: "pro",
      label: "club",
      fee: 90,
      info: "시드가 적고 초보자를 위한 상품입니다.",
      contractList: ["원금 보장 상품"],
      interestRate: [0.1, 0.14],
      event: 1,
      contractPeriod: 1,
    },
    {
      id: 4,
      seed: [10000, 50000],
      name: "Premium",
      grade: "Premium",
      label: "club",
      fee: 790,
      info: "시드가 적고 초보자를 위한 상품입니다.",
      contractList: ["원금 보장 상품"],
      interestRate: [0.15, 0.18],
      event: 1,
      contractPeriod: 1,
    },
    {
      id: 5,
      seed: [50000, 10000],
      name: "Ultra",
      grade: "Ultra",
      label: "club",
      fee: 1990,
      info: "시드가 적고 초보자를 위한 상품입니다.",
      contractList: ["원금 보장 상품"],
      interestRate: [0.12, 0.14],
      event: 1,
      contractPeriod: 1,
    },
    {
      id: 6,
      seed: [100000],
      name: "VIP",
      grade: "VIP",
      label: "club",
      fee: "-",
      info: "시드가 적고 초보자를 위한 상품입니다.",
      contractList: [],
      interestRate: [0.1, 0.14],
      event: 1,
      contractPeriod: 1,
    },
  ];

  // console.log(setPriceData(data), "!!");
  // console.log(data, "da");
  data = setPriceData(data);
  // console.log(data);

  return { data };
};
