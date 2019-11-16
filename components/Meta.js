import Head from "next/head";

export const Meta = () => {
  return (
    <>
      <Head>
        <title>iJS.to - Modern Javascript Courses</title>

        <link
          href="https://fonts.googleapis.com/css?family=Space+Mono|Source+Sans+Pro:700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4 {
          font-family: "Source Sans Pro", sans-serif;
        }

        body {
          min-height: 100vh;
          padding-top: 64px;
          position: relative;
        }

        p {
          margin: 1em auto;
        }

        * {
          font-family: "Space Mono", sans-serif;
          box-sizing: border-box;
          color: #776677;
          margin: 0;
          padding: 0;
          transition: 0.3s all;
        }

        a:hover {
          color: orange;
        }
      `}</style>
    </>
  );
};

export default Meta;
