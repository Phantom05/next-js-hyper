import protocol from "@/setting/protocol.js";
import { MainTemplate, AuthTemplate } from "@/components/base/template";
import { SignUpForm } from "@/components/common/form";
import { Footer, AuthFooter } from "@/components/common/footer";

function SignUp(props) {
  const brandName = protocol.brandname || "";
  return (
    <MainTemplate title={`${brandName.toUpperCase()} - Sign up`}>
      <AuthTemplate title="Sign Up" footer={<AuthFooter />} width="400">
        <SignUpForm />
      </AuthTemplate>
    </MainTemplate>
  );
}

export default SignUp;
