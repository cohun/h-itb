import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Gutman emelőgépek</title>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="emelés, rakományrögzítés, anyagmozgatás, daru, lánc, poliészter, heveder, drótkötél, emelőgép, lemezmegfogó, vákuumos emelő, emelődob"
        />
        <meta name="author" content="Attila Horvath" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
