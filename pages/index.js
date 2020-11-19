import { useEffect } from "react";
import protocol from "@/setting/protocol.js";
import { MainTemplate } from "@/components/base/template";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { HomeContainer } from "@/containers/home";
import { useRouter } from "next/router";
export default function Home() {
  const brandName = protocol.brandname || "";
  const router = useRouter();
  useEffect(() => {
    console.log("샤ㅐ로고침?");
    // router.replace("/");
  }, []);
  return (
    <div className="container">
      <MainTemplate
        title={`${brandName.toUpperCase()} - Home`}
        faviconsrc="/favicon.ico"
        footer={<Footer />}
        header={<Header theme="black" />}
      >
        <HomeContainer />
      </MainTemplate>
    </div>
  );
}
