import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

const Page = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Page;
