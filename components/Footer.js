import Socials from './Socials';

const Footer = () => {
  return (
    <>
      <footer>
        <Socials />

        <div className="whatisthis">Next.js Starter App</div>
        <div className="madein">
          Packaged with ♡ at{' '}
          <a href="https://ijs.to/" rel="noopener noreferrer" target="_blank">
            iJS.to
          </a>
        </div>
      </footer>
      <style jsx>{`
        footer div {
          color: white;
        }
        footer {
          background: #776677;
          bottom: 0;
          left: 0;
          padding: 1.5em;
          position: absolute;
          text-align: center;
          width: 100%;
        }

        a {
          color: white;
        }
        a:hover {
          color: orange;
        }
        .whatisthis {
          margin-top: 3em;
        }
        .madein {
          font-size: 0.75em;
        }
      `}</style>
    </>
  );
};

export default Footer;
