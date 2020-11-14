import { MainTemplate } from "@/components/base/template";
import protocol from "@/setting/protocol.js";

export default function Home() {
  const brandName = protocol.brandname || "";
  return (
    <div className="container">
      <MainTemplate
        title={`${brandName.toUpperCase()} - Home`}
        faviconsrc="/favicon.ico"
      >
        Home
      </MainTemplate>
    </div>
  );
}
