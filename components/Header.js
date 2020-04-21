import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>
          <span className="logo">
            <span className="i">i</span>
            <span className="js">JS</span>
          </span>
        </a>
      </Link>

      <div>
        <Link href="/">
          <a className="menu-item">Home</a>
        </Link>
        <Link href="/books">
          <a className="menu-item">Books</a>
        </Link>
        <Link href="/about">
          <a className="menu-item">About</a>
        </Link>
      </div>

      <style jsx>{`
        header {
          align-items: center;
          background: white;
          border-bottom: 2px solid #333644;
          display: flex;
          height: 64px;
          justify-content: space-between;
          left: 0;
          padding: 0 2em;
          position: fixed;
          top: 0;
          width: 100%;
        }
        header * {
          text-decoration: none;
        }
        header div,
        .menu-item {
          text-transform: uppercase;
          font-size: 0.9em;
          letter-spacing: 1px;
          padding: 2rem;
        }
        .menu-item:hover {
          color: #1c2b6d;
          text-shadow: 1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 10px rgba(119, 102, 119, 0.25),
            1px 1px 0 orange;
          font-weight: 800;
        }
        
        .logo {
          background-color: #B838F0;
          font-size: 1.25rem;
          letter-spacing: 0px;
          padding: 0.76rem 0 0 0.75rem;
          position: absolute;
          top: 16px;
        }
        .logo:hover {
          background: #333644;
        }
        .logo:hover .js{
          color: #B838F0;
        }
        .i {
          color: #f7f7f7;
          font-weight: bolder;
          text-transform: lowercase;
        }
        .js {
          font-family: "Source Sans Pro", sans-serif;
          color: white;
          font-size: 2rem;
          margin-right: 4px;
        }
        .js:hover {
          color: #333644;
        }
        
      `}</style>
    </header>
  );
};

export default Header;
