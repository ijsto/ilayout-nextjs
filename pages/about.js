export const About = () => {
  return (
    <div className="content">
      <h1>About Page</h1>
      <p>
        NextJS is a framework that makes it easy to create Universal web apps in
        React. With Next.js, React pages are automatically rendered on both
        client and server side, without the hassle of setting up dependancies
        like webpack or babel and with automatic routing. This is a simple
        starter project that demonstrates how to use NextJS with custom layout
        and some modular styles via <code>{"<style jsx />"}</code> and{" "}
        <code>{"<style global jsx />"}</code> tags.
      </p>
      <h2>Get Started (3 minutes)</h2>
      <ul>
        <li>
          1. Clone the the [starter repo](https://github.com/ijsto/nextjs)
          <code>git clone git@github.com:ijsto/inextjs.git</code>
        </li>
        <li>
          2. Enter the directory
          <code>cd inextjs</code>
        </li>
        <li>
          3. Install project dependencies
          <code>npm install</code> or <code>npm i</code>
          To run the project locally: <code>npm run dev</code>
          Starter project is live at:
          <a href="http://localhost:3000">http://localhost:3000</a>
        </li>
      </ul>
      <h2>The starter is now</h2>
      ready - have fun!
      <div>And bunch of information that we deeply care about</div>
      <style jsx>{`
        * {
          line-height: 1.5;
        }
        code {
          background: #262626;
          border-radius: 0.5em;
          color: beige;
          padding: 0.25em;
        }
      `}</style>
    </div>
  );
};

export default About;
