import { MainTemplate } from "@/components/base/template";
import protocol from "@/setting/protocol.js";

function SignUp(props) {
  const brandName = protocol.brandname || "";
  return (
    <MainTemplate title={`${brandName.toUpperCase()} - Sign up`}>
      Signup
    </MainTemplate>
  );
}

export default SignUp;
