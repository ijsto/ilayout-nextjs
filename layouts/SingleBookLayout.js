import Header from "../components/Header";
import Footer from "../components/Footer";

const SingleBookLayout = ({ children }) => (
  <>
    <Header />

    <div className="jumbo">
      <h1>Single Book View</h1>
    </div>
    <div className="single-book-wrapper">
      <div className="single-book-content">{children}</div>

      <style jsx global>{`
        .jumbo {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 150px;
          background: #6bcd9b;
        }
        .jumbo h1 {
          color: white;
        }
        .single-book-wrapper {
          display: flex;
          justify-content: center;
        }
        .single-book {
          display: grid;
          grid-template-columns: 1fr;
          max-width: 680px;
        }
      `}</style>
      <Footer></Footer>
    </div>
  </>
);

export default SingleBookLayout;
