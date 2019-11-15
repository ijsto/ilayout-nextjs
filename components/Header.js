import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <a className="ijs-link">
            <span className="ijs">
              i<span className="js-font">JS</span>
            </span>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/books">
          <a>Books</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>

      <style jsx>{`
        header {
          align-items: center;
          background: #ff6666;
          border-color: white;
          display: flex;
          height: 64px;
          justify-content: space-between;
          left: 0;
          padding: 0 2em;
          position: fixed;
          top: 0;
          width: 100%;
        }
        header div,
        header a {
          text-transform: uppercase;
          font-size: 0.9em;
          letter-spacing: 1px;
          padding: 2rem;
          text-decoration: none;
        }
        header a:hover {
          color: #1c2b6d;
          text-shadow: 1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 10px #fff,
            1px 1px 0 #fff;
          font-weight: 800;
        }

        .ijs-link {
          text-decoration: none;
        }

        .js-font {
          font-family: "Source Sans Pro", sans-serif;
          color: #776677;
          font-size: 2rem;
          margin-right: 4px;
        }
        .js-font:hover {
          color: white;
        }

        .ijs {
          font-weight: 700;
          font-size: 1.25rem;
          color: white;
          background-color: #ff8866;
          margin: 0.75rem 0;
          padding: 1.55rem 0 0 0.75rem;
        }

        .ijs:hover .js-font {
          color: white;
        }
        .ijs:hover {
          background-color: #776677;
        }
      `}</style>
    </header>
  );
};

export default Header;
