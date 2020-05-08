import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import HomePageContent from '../components/pages/HomePage/Content';
import Footer from '../components/Footer';
import Amplify from 'aws-amplify';
Amplify.configure({
  Auth: {
    identityPoolId: process.env.GATSBY_IDENTITY_POOL_ID,
    region: process.env.GATSBY_REGION,
    identityPoolRegion: process.env.GATSBY_REGION,
    userPoolId: process.env.GATSBY_USER_POOL_ID,
    userPoolWebClientId: process.env.GATSBY_USER_POOL_WEB_CLIENT_ID,
  },
});
export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Seo isRepeatable={false} postTitle="Îngrijim și suntem îngrijiți mai bine" bodyClassName="page-homepage" />
        <Header />
        <Layout>
          <HomePageContent />
        </Layout>
        <Footer />
      </div>
    );
  }
}
