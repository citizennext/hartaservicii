import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { AfterHeader } from '../components/AfterHeader';
import { navigate } from '@reach/router';

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
                <h1 style={{ marginTop: 100 }}>Am Întâmpinat o problemă de conexiune</h1>
              </div>
              <div className="content" style={{ marginBottom: 100 }}>
                <p>E posibil să nu mai fi conectat la internet. Mai incearcă incă odată.</p>
                <button className="btn btn-celeste" onClick={() => navigate(-1)}>
                  Reîncarcă pagina
                </button>
              </div>
            </div>
          </div>
        </Layout>
        <Footer />
      </div>
    );
  }
}
