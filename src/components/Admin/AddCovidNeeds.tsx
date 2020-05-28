import React from 'react';
// @ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Formik, Field } from 'formik';
import { useParams, Link } from '@reach/router';
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { isEmpty } from 'ramda';
import Footer from '../Footer';
import Seo from '../Seo';
import Header from '../Header';
import Layout from '../Layout';
import { AfterHeader } from '../AfterHeader';
import { SidebarAccount } from '../SidebarAccount';
import { Ripple } from '../Ripple';
import { CovidList, CovidPreview } from './CovidPreview';

interface Values {
  chlor: string;
  handDesinfectant: string;
  masks: string;
  protectionGlasses: string;
  protectionHood: string;
  sanitaryAlchohol: string;
  surfaceDesinfectant: string;
  surgicalGown: string;
  surgicalGownSingleUse: string;
  surgicalHandgloves: string;
  surgicalMasks: string;
  surgicalShoeProtection: string;
  visors: string;
}
const initialValues: Values = {
  chlor: '',
  handDesinfectant: '',
  masks: '',
  protectionGlasses: '',
  protectionHood: '',
  sanitaryAlchohol: '',
  surfaceDesinfectant: '',
  surgicalGown: '',
  surgicalGownSingleUse: '',
  surgicalHandgloves: '',
  surgicalMasks: '',
  surgicalShoeProtection: '',
  visors: '',
};
const covidNeedsMutation = gql`
  mutation AddCovidNeeds(
    $provider: uuid!
    $chlor: Int
    $handDesinfectant: Int
    $masks: Int
    $protectionGlasses: Int
    $protectionHood: Int
    $sanitaryAlchohol: Int
    $surfaceDesinfectant: Int
    $surgicalGown: Int
    $surgicalGownSingleUse: Int
    $surgicalHandgloves: Int
    $surgicalMasks: Int
    $surgicalShoeProtection: Int
    $visors: Int
    $message: String!
  ) {
    insert_provider_covid_needs_one(
      object: {
        provider_id: $provider
        chlor: $chlor
        handDesinfectant: $handDesinfectant
        masks: $masks
        protectionGlasses: $protectionGlasses
        protectionHood: $protectionHood
        sanitaryAlchohol: $sanitaryAlchohol
        surfaceDesinfectant: $surfaceDesinfectant
        surgicalGown: $surgicalGown
        surgicalGownSingleUse: $surgicalGownSingleUse
        surgicalHandgloves: $surgicalHandgloves
        surgicalMasks: $surgicalMasks
        surgicalShoeProtection: $surgicalShoeProtection
        visors: $visors
      }
    ) {
      surgicalMasks
      surgicalHandgloves
      handDesinfectant
      surfaceDesinfectant
      masks
      visors
      chlor
      surgicalGown
      sanitaryAlchohol
      protectionGlasses
      surgicalShoeProtection
      protectionHood
      surgicalGownSingleUse
    }
    sendEmail(message: $message, subject: "Un furnizor a introdus nevoi COVID19", toEmails: ["contact@serviciisociale.ro"]) {
      success
    }
  }
`;
const providerQuery = gql`
  query Provider($id: uuid!) {
    providers_by_pk(id: $id) {
      name
      supplier {
        name
      }
    }
  }
`;
function AddCovidNeeds() {
  const params = useParams();
  const userStorage = localStorage.getItem('gatsbyUser');
  const userId = userStorage && !isEmpty(userStorage) && JSON.parse(userStorage).username;
  const token = userStorage && !isEmpty(userStorage) && JSON.parse(userStorage).token;
  const [addCovidNeeds, { data, loading, error }] = useMutation<{ insert_provider_covid_needs_one: CovidList }>(
    covidNeedsMutation
  );

  const provider = useQuery<{ providers_by_pk: { name: string; supplier: { name: string } } }>(providerQuery, {
    variables: { id: params.id },
  });
  if (provider.loading) <Ripple />;
  if (provider.error) {
    NotificationManager.error(provider.error.message);
  }
  return (
    <div className="needs">
      <Seo isRepeatable={false} postTitle="Nevoi COVID19" bodyClassName="page-needs" summary="Adauga nevoile serviciului tau" />
      <Header />
      <AfterHeader header="nevoi" />
      <NotificationContainer />
      <Layout left={<SidebarAccount />}>
        <div className="wrapper">
          <div className="contact-wrapper">
            {!data ? (
              <>
                <h1 className="mt-4 xl:mt-24 mb-4">Adaugă nevoile de protecție impotriva COVID19 pentru:</h1>
                <h2 className="mt-4">
                  Serviciul: <span className="text-celeste">{provider?.data?.providers_by_pk?.name}</span>
                </h2>
                <h3 className="mb-12">
                  Furnizat de: <span className="text-burg">{provider?.data?.providers_by_pk?.supplier?.name}</span>
                </h3>
                <p className="mb-4">Adaugă numarul de itemi pentru fiecare obiect necesar.</p>
                <Formik
                  initialValues={initialValues}
                  onSubmit={async (values, actions) => {
                    const message = `
                    Un nou serviciu a adaugat nevoi covid. \nvezi mai multe aici: https://serviciisociale.ro/harta/serviciu/${
                      params.provider
                    }/${params.id}/administrare \n\n
                    surgicalMasks: ${values.surgicalMasks}\n
                    surgicalHandgloves: ${values.surgicalHandgloves}\n
                    handDesinfectant: ${values.handDesinfectant}\n
                    surfaceDesinfectant: ${values.surfaceDesinfectant}\n
                    masks: ${values.masks}\n
                    visors: ${values.visors}\n
                    chlor: ${values.chlor}\n
                    surgicalGown: ${values.surgicalGown}\n
                    sanitaryAlchohol: ${values.sanitaryAlchohol}\n
                    protectionGlasses: ${values.protectionGlasses}\n
                    surgicalShoeProtection: ${values.surgicalShoeProtection}\n
                    protectionHood: ${values.protectionHood}\n
                    surgicalGownSingleUse: ${values.surgicalGownSingleUse}\n\n
                    de catre userul: ${userId} cu token ${token.substring(0, 10)}...
                    `;
                    try {
                      addCovidNeeds({
                        variables: {
                          provider: params.id,
                          message: message,
                          surgicalMasks: values.surgicalMasks === '' ? null : values.surgicalMasks,
                          surgicalHandgloves: values.surgicalHandgloves === '' ? null : values.surgicalHandgloves,
                          handDesinfectant: values.handDesinfectant === '' ? null : values.handDesinfectant,
                          surfaceDesinfectant: values.surfaceDesinfectant === '' ? null : values.surfaceDesinfectant,
                          masks: values.masks === '' ? null : values.masks,
                          visors: values.visors === '' ? null : values.visors,
                          chlor: values.chlor === '' ? null : values.chlor,
                          surgicalGown: values.surgicalGown === '' ? null : values.surgicalGown,
                          sanitaryAlchohol: values.sanitaryAlchohol === '' ? null : values.sanitaryAlchohol,
                          surgicalShoeProtection: values.surgicalShoeProtection === '' ? null : values.surgicalShoeProtection,
                          protectionGlasses: values.protectionGlasses === '' ? null : values.protectionGlasses,
                          protectionHood: values.protectionHood === '' ? null : values.protectionHood,
                          surgicalGownSingleUse: values.surgicalGownSingleUse === '' ? null : values.surgicalGownSingleUse,
                        },
                        context: {
                          headers: {
                            'x-hasura-role': userId === process.env.GATSBY_ADMIN_USER ? 'admin' : 'user',
                            'x-hasura-user-id': userId,
                            authorization: `Bearer ${token}`,
                          },
                        },
                      });
                      if (error) {
                        NotificationManager.error(error.message);
                      }
                    } catch (err) {
                      NotificationManager.error(err.message);
                    }
                    actions.resetForm({ values: initialValues, errors: {}, touched: {} });
                  }}>
                  {({ values, errors, touched, handleSubmit }) => (
                    <form className="w-full md:w-2/3 grid" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-2  gap-4 items-center border-dotted border-celeste mb-5 border-b">
                        <label htmlFor="surgicalMasks" className="mb-5 text-burg font-semibold">
                          Măști chirurgicale (buc):
                        </label>
                        <Field
                          id="surgicalMasks"
                          name="surgicalMasks"
                          type="number"
                          placeholder="ex: 10"
                          value={values.surgicalMasks}
                          className={`w-32 ml-auto mb-0 ${errors.surgicalMasks ? 'field-validation-error' : ''}`}
                        />
                      </div>
                      {touched.surgicalMasks && errors.surgicalMasks && (
                        <span className={`block absolute validation-error`}>{errors.surgicalMasks}</span>
                      )}
                      <div className="grid grid-cols-2  gap-4 items-center border-dotted border-celeste mb-5 border-b">
                        <label htmlFor="surgicalHandgloves" className="mb-5 text-burg font-semibold">
                          Mănuși chirurgicale (buc):
                        </label>
                        <Field
                          id="surgicalHandgloves"
                          name="surgicalHandgloves"
                          type="number"
                          placeholder="ex: 10"
                          value={values.surgicalHandgloves}
                          className={`w-32 ml-auto mb-0 ${errors.surgicalHandgloves ? 'field-validation-error' : ''}`}
                        />
                      </div>
                      {touched.surgicalHandgloves && errors.surgicalHandgloves && (
                        <span className={`block absolute validation-error`}>{errors.surgicalHandgloves}</span>
                      )}
                      <div className="grid grid-cols-2  gap-4 items-center border-dotted border-celeste mb-5 border-b">
                        <label htmlFor="handDesinfectant" className="mb-5 text-burg font-semibold">
                          Dezinfectant mâini (litri):
                        </label>
                        <Field
                          id="handDesinfectant"
                          name="handDesinfectant"
                          type="number"
                          placeholder="ex: 10"
                          value={values.handDesinfectant}
                          className={`w-32 ml-auto mb-0 ${errors.handDesinfectant ? 'field-validation-error' : ''}`}
                        />
                      </div>
                      {touched.handDesinfectant && errors.handDesinfectant && (
                        <span className={`block absolute validation-error`}>{errors.handDesinfectant}</span>
                      )}
                      <div className="grid grid-cols-2  gap-4 items-center border-dotted border-celeste mb-5 border-b">
                        <label htmlFor="surfaceDesinfectant" className="mb-5 text-burg font-semibold">
                          Dezinfectant suprafețe (litri):
                        </label>
                        <Field
                          id="surfaceDesinfectant"
                          name="surfaceDesinfectant"
                          type="number"
                          placeholder="ex: 10"
                          value={values.surfaceDesinfectant}
                          className={`w-32 ml-auto mb-0 ${errors.surfaceDesinfectant ? 'field-validation-error' : ''}`}
                        />
                      </div>
                      {touched.surfaceDesinfectant && errors.surfaceDesinfectant && (
                        <span className={`block absolute validation-error`}>{errors.surfaceDesinfectant}</span>
                      )}
                      <div className="grid grid-cols-2  gap-4 items-center border-dotted border-celeste mb-5 border-b">
                        <label htmlFor="masks" className="mb-5 text-burg font-semibold">
                          Măști filtru FFP2-3 (buc):
                        </label>
                        <Field
                          id="masks"
                          name="masks"
                          type="number"
                          placeholder="ex: 10"
                          value={values.masks}
                          className={`w-32 ml-auto mb-0 ${errors.masks ? 'field-validation-error' : ''}`}
                        />
                      </div>
                      {touched.masks && errors.masks && <span className={`block absolute validation-error`}>{errors.masks}</span>}
                      <div className="grid grid-cols-2  gap-4 items-center border-dotted border-celeste mb-5 border-b">
                        <label htmlFor="visors" className="mb-5 text-burg font-semibold">
                          Viziere protecție (buc):
                        </label>
                        <Field
                          id="visors"
                          name="visors"
                          type="number"
                          placeholder="ex: 10"
                          value={values.visors}
                          className={`w-32 ml-auto mb-0 ${errors.visors ? 'field-validation-error' : ''}`}
                        />
                      </div>
                      {touched.visors && errors.visors && (
                        <span className={`block absolute validation-error`}>{errors.visors}</span>
                      )}
                      <div className="grid grid-cols-2  gap-4 items-center border-dotted border-celeste mb-5 border-b">
                        <label htmlFor="chlor" className="mb-5 text-burg font-semibold">
                          Clor (litri):
                        </label>
                        <Field
                          id="chlor"
                          name="chlor"
                          type="number"
                          placeholder="ex: 10"
                          value={values.chlor}
                          className={`w-32 ml-auto mb-0 ${errors.chlor ? 'field-validation-error' : ''}`}
                        />
                      </div>
                      {touched.chlor && errors.chlor && <span className={`block absolute validation-error`}>{errors.chlor}</span>}
                      <div className="grid grid-cols-2  gap-4 items-center border-dotted border-celeste mb-5 border-b">
                        <label htmlFor="surgicalGown" className="mb-5 text-burg font-semibold">
                          Combinezoane protecție (buc)
                        </label>
                        <Field
                          id="surgicalGown"
                          name="surgicalGown"
                          type="number"
                          placeholder="ex: 10"
                          value={values.surgicalGown}
                          className={`w-32 ml-auto mb-0 ${errors.surgicalGown ? 'field-validation-error' : ''}`}
                        />
                      </div>
                      {touched.surgicalGown && errors.surgicalGown && (
                        <span className={`block absolute validation-error`}>{errors.surgicalGown}</span>
                      )}
                      <div className="grid grid-cols-2  gap-4 items-center border-dotted border-celeste mb-5 border-b">
                        <label htmlFor="sanitaryAlchohol" className="mb-5 text-burg font-semibold">
                          Alcohol sanitar (litri)
                        </label>
                        <Field
                          id="sanitaryAlchohol"
                          name="sanitaryAlchohol"
                          type="number"
                          placeholder="ex: 10"
                          value={values.sanitaryAlchohol}
                          className={`w-32 ml-auto mb-0 ${errors.sanitaryAlchohol ? 'field-validation-error' : ''}`}
                        />
                      </div>
                      {touched.sanitaryAlchohol && errors.sanitaryAlchohol && (
                        <span className={`block absolute validation-error`}>{errors.sanitaryAlchohol}</span>
                      )}
                      <div className="grid grid-cols-2  gap-4 items-center border-dotted border-celeste mb-5 border-b">
                        <label htmlFor="surgicalShoeProtection" className="mb-5 text-burg font-semibold">
                          Botoși unică folosință (buc)
                        </label>
                        <Field
                          id="surgicalShoeProtection"
                          name="surgicalShoeProtection"
                          type="number"
                          placeholder="ex: 10"
                          value={values.surgicalShoeProtection}
                          className={`w-32 ml-auto mb-0 ${errors.surgicalShoeProtection ? 'field-validation-error' : ''}`}
                        />
                      </div>
                      {touched.surgicalShoeProtection && errors.surgicalShoeProtection && (
                        <span className={`block absolute validation-error`}>{errors.surgicalShoeProtection}</span>
                      )}
                      <div className="grid grid-cols-2  gap-4 items-center border-dotted border-celeste mb-5 border-b">
                        <label htmlFor="protectionGlasses" className="mb-5 text-burg font-semibold">
                          Ochelari protecție (buc)
                        </label>
                        <Field
                          id="protectionGlasses"
                          name="protectionGlasses"
                          type="number"
                          placeholder="ex: 10"
                          value={values.protectionGlasses}
                          className={`w-32 ml-auto mb-0 ${errors.protectionGlasses ? 'field-validation-error' : ''}`}
                        />
                      </div>
                      {touched.protectionGlasses && errors.protectionGlasses && (
                        <span className={`block absolute validation-error`}>{errors.protectionGlasses}</span>
                      )}
                      <div className="grid grid-cols-2  gap-4 items-center border-dotted border-celeste mb-5 border-b">
                        <label htmlFor="protectionHood" className="mb-5 text-burg font-semibold">
                          Bonete (buc)
                        </label>
                        <Field
                          id="protectionHood"
                          name="protectionHood"
                          type="number"
                          placeholder="ex: 10"
                          value={values.protectionHood}
                          className={`w-32 ml-auto mb-0 ${errors.protectionHood ? 'field-validation-error' : ''}`}
                        />
                      </div>
                      {touched.protectionHood && errors.protectionHood && (
                        <span className={`block absolute validation-error`}>{errors.protectionHood}</span>
                      )}
                      <div className="grid grid-cols-2  gap-4 items-center border-dotted border-celeste mb-5 border-b">
                        <label htmlFor="surgicalGownSingleUse" className="mb-5 text-burg font-semibold">
                          Halate unică folosință (buc)
                        </label>
                        <Field
                          id="surgicalGownSingleUse"
                          name="surgicalGownSingleUse"
                          type="number"
                          placeholder="ex: 10"
                          value={values.surgicalGownSingleUse}
                          className={`w-32 ml-auto mb-0 ${errors.surgicalGownSingleUse ? 'field-validation-error' : ''}`}
                        />
                      </div>
                      {touched.surgicalGownSingleUse && errors.surgicalGownSingleUse && (
                        <span className={`block absolute validation-error`}>{errors.surgicalGownSingleUse}</span>
                      )}
                      <div className="flex flex-wrap">
                        <Link className={`btn btn-outline btn-arrow-back w-full md:w-1/3 md:ml-0`} to="../../">
                          Înapoi
                        </Link>
                        <button
                          className={`btn btn-celeste w-full md:w-1/3 md:ml-auto md:mr-0 mt-6 md:mt-0 ld-ext-left ${
                            loading ? 'running' : ''
                          }`}
                          type="submit"
                          disabled={loading}>
                          Trimite
                          <div className="ld ld-ring ld-spin"></div>
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </>
            ) : (
              <CovidPreview {...data.insert_provider_covid_needs_one} />
            )}
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}

export default AddCovidNeeds;
