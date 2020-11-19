import { Header } from "@/components/common/header";
import { Page } from "@/components/base/page";

function MainTemplate(props) {
  const { title = "", children = "", faviconsrc = "", footer, header } = props;
  return (
    <>
      <Page title={title} faviconsrc={faviconsrc} />
      {header ? header : <Header />}
      <main>{children}</main>
      {footer && footer}
    </>
  );
}

export default MainTemplate;
