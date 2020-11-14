import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Page } from "@/components/base/page";

function MainTemplate(props) {
  const { title = "", children = "", faviconsrc = "" } = props;
  return (
    <>
      <Page title={title} faviconsrc={faviconsrc} />
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MainTemplate;
