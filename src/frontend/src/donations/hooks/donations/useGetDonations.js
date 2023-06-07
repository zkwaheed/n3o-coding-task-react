import {useQuery} from 'react-query';
import { fetchWrapper } from '../../api/restApi';
import { API_BASE_URL, GET_ALL_DONTAION_ENDPOINT } from '../../constants';
  
export const useGetDonations = () => {

  return useQuery(
    ['donations'],
    () => fetchWrapper('GET', `${API_BASE_URL}${GET_ALL_DONTAION_ENDPOINT}`),
  );
}