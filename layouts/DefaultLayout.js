import Header from "../components/Header";

const DefaultLayout = ({ children }) => (
  <>
    <Header />
    <div className="page-content-wrapper">
      <div className="page-content">{children}</div>

      <style jsx global>{`
        .page-content-wrapper {
          display: flex;
          justify-content: center;
        }
        .page-content {
          display: grid;
          grid-template-columns: 1fr;
          width: 1280px;
          max-width: 80%;
        }
      `}</style>
    </div>
  </>
);

export default DefaultLayout;
