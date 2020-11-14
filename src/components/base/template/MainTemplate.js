import { Header } from "@/components/common/header";
import { Page } from "@/components/base/page";

function MainTemplate(props) {
  const { title = "", children = "", faviconsrc = "", footer } = props;
  return (
    <>
      <Page title={title} faviconsrc={faviconsrc} />
      <header>
        <Header />
      </header>
      <main>{children}</main>
      {footer && footer}
    </>
  );
}

export default MainTemplate;
