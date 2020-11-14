import protocol from "@/setting/protocol.js";
import { MainTemplate, AuthTemplate } from "@/components/base/template";
import { ResetPasswordForm } from "@/components/common/form";
import { Footer } from "@/components/common/footer";

function ResetPassword() {
  const brandName = protocol.brandname || "";
  return (
    <MainTemplate title={`${brandName.toUpperCase()} - ResetPassword`}>
      <AuthTemplate title="Reset Password" footer={<Footer />} width="400">
        <ResetPasswordForm />
      </AuthTemplate>
    </MainTemplate>
  );
}

export default ResetPassword;
