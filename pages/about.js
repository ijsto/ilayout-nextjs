export const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        Next.js is a framework that makes it easy to create Universal web apps
        in React.
      </p>
      <p>
        With Next.js, React pages are automatically rendered on both client and
        server side, without the hassle of setting up dependancies like webpack
        or babel and with automatic routing.{' '}
      </p>
      <p>
        This is a simple starter project that demonstrates how to use Next.js
        with custom layout and some modular styles via{' '}
        <code>{'<style jsx />'}</code> and <code>{'<style global jsx />'}</code>{' '}
        tags.
      </p>
      <h2>Get Started (3 minutes)</h2>
      <ul>
        <li>
          1. Clone the the{' '}
          <a href="https://github.com/ijsto/ilayout-nextjs">starter repo</a>
          <p>
            <code>git clone git@github.com:ijsto/ilayout-nextjs.git</code>
          </p>
        </li>
        <li>
          2. Enter the directory
          <p>
            <code>cd ilayout-nextjs</code>
          </p>
        </li>
        <li>
          3. Install project dependencies
          <p>
            <code>yarn</code> or <code>npm install</code> or <code>npm i</code>
          </p>
        </li>
        <li>
          To run the project locally:
          <p>
            <code>yarn dev</code> or <code>npm run dev</code>
          </p>
        </li>
        <li>
          Starter project is live at:{' '}
          <a href="http://localhost:3000">http://localhost:3000</a>
        </li>
      </ul>

      <h2>The starter is now ready - have fun!</h2>
      <style jsx>{`
        * {
          line-height: 1.5;
        }
        code {
          padding: 0.2em 0.4em;
          margin: 0;
          font-size: 85%;
          background-color: rgba(27, 31, 35, 0.05);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};

export default About;
