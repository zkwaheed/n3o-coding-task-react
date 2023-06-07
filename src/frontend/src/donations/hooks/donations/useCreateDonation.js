import {useMutation, useQueryClient} from 'react-query';
import { fetchWrapper } from '../../api/restApi';
import { API_BASE_URL, DONTAION_CREATE_ENDPOINT } from '../../constants';
  
export const useCreateDonation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (doantionItem) => {
      return fetchWrapper(
        'POST',
        `${API_BASE_URL}${DONTAION_CREATE_ENDPOINT}`,
        doantionItem
      );
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries('donations');
      },
      
    }
  );
}




