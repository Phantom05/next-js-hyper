import protocol from "@/setting/protocol.js";
import { MainTemplate } from "@/components/base/template";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { HomeContainer } from "@/containers/home";
import { SupportContainer } from "@/containers/support";

export default function Support() {
  const brandName = protocol.brandname || "";
  return (
    <div className="container">
      <MainTemplate
        title={`${brandName.toUpperCase()} - Home`}
        faviconsrc="/favicon.ico"
        footer={<Footer />}
        header={<Header fixed crossEnabled={false} />}
      >
        <SupportContainer />
      </MainTemplate>
    </div>
  );
}
