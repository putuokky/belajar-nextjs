import Head from 'next/head';
import Footer from "../Footer";
import Header from "../Header";

export default function Layout(props) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>{pageTitle} | Belajar NextJS</title>
        <meta name="description" content="Belajar NextJS" />
      </Head>
      <div>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  )
}
