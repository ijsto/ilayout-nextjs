import Link from "next/link";
import Socials from "./Socials";

export const Footer = () => {
  return (
    <>
      <footer>
        <Socials />

        <div className="whatisthis">NextJS Starter App</div>
        <div className="madein">
          Packaged with ♡ at{" "}
          <Link href="https://ijs.to/">
            <a target="_blank">iJS.to</a>
          </Link>
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
