import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { AfterHeader } from '../components/AfterHeader';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <Seo isRepeatable={false} postTitle="Îngrijim și suntem îngrijiți mai bine" bodyClassName="page-homepage" />
        <Header />
        <AfterHeader header={`hopa...`} />

        <Layout left={true}>
          <div className="wrapper">
            <div className="contact-wrapper">
              <div className="summary">
                <h1 style={{ marginTop: 100 }}>Aceasta pagina nu exista</h1>
              </div>
              <div className="content" style={{ marginBottom: 100 }}>
                Daca e cumva o eroare, scrie-ne un mesaj. Daca ai ajuns aici de altundeva, foloseste cautarea. E foarte buna!
              </div>
            </div>
          </div>
        </Layout>
        <Footer />
      </div>
    );
  }
}
