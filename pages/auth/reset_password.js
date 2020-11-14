import { MainTemplate } from "@/components/base/template";
import protocol from "@/setting/protocol.js";

function ResetPassword(props) {
  const brandName = protocol.brandname || "";
  return (
    <MainTemplate title={`${brandName.toUpperCase()} - ResetPassword`}>
      ResetPassword
    </MainTemplate>
  );
}

export default ResetPassword;
