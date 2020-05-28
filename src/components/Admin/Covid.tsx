import React, { useRef, useState } from 'react';
import { AlertDialog, AlertDialogLabel, AlertDialogDescription } from '@reach/alert-dialog';
import { Trash2, Edit } from 'react-feather';
import { Link } from '@reach/router';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
// @ts-ignore
import { NotificationManager } from 'react-notifications';
import { isEmpty } from 'ramda';
import { GET_COVID_NEEDS } from './CovidList';
const DELETE = gql`
  mutation DeleteCovidNeeds($id: uuid!) {
    delete_provider_covid_needs(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
const Covid = ({ covid, providerId }: any) => {
  const userStorage = localStorage.getItem('gatsbyUser');
  const userId = userStorage && !isEmpty(userStorage) && JSON.parse(userStorage).username;
  const token = userStorage && !isEmpty(userStorage) && JSON.parse(userStorage).token;
  const [showDialog, setShowDialog] = useState<string>('');
  const cancelRef = useRef();
  const open = (id: string) => setShowDialog(id);

  const close = () => setShowDialog('');
  const [deleteCovidNeeds, { loading: deleting, error: deleteError }] = useMutation(DELETE, {
    update(cache) {
      const existingCovids: any = cache.readQuery({ query: GET_COVID_NEEDS, variables: { provider: providerId, userId } });
      const newCovids = existingCovids.provider_covid_needs.filter((need: any) => need.id !== covid.id);
      cache.writeQuery({
        query: GET_COVID_NEEDS,
        variables: { provider: providerId, userId },
        data: { provider_covid_needs: newCovids },
      });
    },
  });
  function deleteCovid(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    deleteCovidNeeds({
      variables: {
        id: covid.id,
      },
      context: {
        headers: {
          'x-hasura-role': userId === process.env.GATSBY_ADMIN_USER ? 'admin' : 'user',
          'x-hasura-user-id': userId,
          authorization: `Bearer ${token}`,
        },
      },
    });
    NotificationManager.success('Sters cu success');
    setShowDialog('');
    if (deleteError) {
      NotificationManager.error(deleteError.message);
    }
  }

  return (
    <li key={covid.id} className="border-b border-leaf mb-4 flex items-baseline">
      <span>
        <strong className="text-celeste">Creat: </strong> {new Date(covid.created_at).toLocaleString('ro-RO')}
        <br />
        <strong className="text-celeste">Actualizat: </strong> {new Date(covid.updated_at).toLocaleString('ro-RO')}
      </span>
      <span className="mx-6">
        {covid.verified ? <span className="text-celeste">Verificat</span> : <span className="text-error">Neverificat</span>}
      </span>
      <button onClick={() => open(covid.id)} className="mr-6 ml-auto" disabled={deleting}>
        <Trash2 size={16} strokeWidth={3} className="text-error" />
      </button>
      <Link to={`nevoi-covid/edit/${covid.id}`}>
        <Edit size={16} strokeWidth={3} className="text-celeste" />
      </Link>
      {showDialog !== '' && (
        <AlertDialog onDismiss={close} leastDestructiveRef={cancelRef}>
          <AlertDialogLabel>
            <h2 className="font-display text-error ">Confirmare stergere!</h2>
          </AlertDialogLabel>
          <AlertDialogDescription>Ești sigur ca vrei să ștergi această intrare?</AlertDialogDescription>
          <div className="alert-buttons flex mt-10">
            <button className="btn bg-error text-white" onClick={deleteCovid}>
              Da, șterge
            </button>
            <button className="btn btn-celeste ml-auto" ref={cancelRef} onClick={close}>
              Nu șterge
            </button>
          </div>
        </AlertDialog>
      )}
    </li>
  );
};
export { Covid };
