import { MainTemplate } from "@/components/base/template";
import protocol from "@/setting/protocol.js";

function Signin(props) {
  const brandName = protocol.brandname || "";
  return (
    <MainTemplate title={`${brandName.toUpperCase()} - Sign in`}>
      Signin
    </MainTemplate>
  );
}

export default Signin;
