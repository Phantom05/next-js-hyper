import Head from "next/head";

function Page(props) {
  const { title = "", faviconsrc = "", children = "" } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        {faviconsrc && <link ref="icon" href={faviconsrc} />}
        <>{children}</>
      </Head>
    </>
  );
}

export default Page;
