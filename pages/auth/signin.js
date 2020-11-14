import protocol from "@/setting/protocol.js";
import { MainTemplate, AuthTemplate } from "@/components/base/template";
import { SignInForm } from "@/components/common/form";
import { Footer } from "@/components/common/footer";

function Signin() {
  const brandName = protocol.brandname || "";
  return (
    <MainTemplate title={`${brandName.toUpperCase()} - Sign in`}>
      <AuthTemplate title="Sign In" footer={<Footer />} width="400">
        <SignInForm />
      </AuthTemplate>
    </MainTemplate>
  );
}

export default Signin;
