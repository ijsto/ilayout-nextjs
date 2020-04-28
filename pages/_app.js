import App from 'next/app';

import DefaultLayout from '../layouts/DefaultLayout';
import Meta from '../components/Meta';

class AppWrapper extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // expose query to the user
    pageProps.query = ctx.query;

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;

    return (
      <Layout>
        <Meta />
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default AppWrapper;
