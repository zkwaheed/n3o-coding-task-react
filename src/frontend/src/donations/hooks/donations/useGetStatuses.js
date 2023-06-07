import {useQuery} from 'react-query';
import { fetchWrapper } from '../../api/restApi';
import { API_BASE_URL, GET_DONTAION_STATUS_ENDPOINT } from '../../constants';
  
export const useGetStatuses = () => {

  return useQuery(
    ['statuses'],
    () => fetchWrapper('GET', `${API_BASE_URL}${GET_DONTAION_STATUS_ENDPOINT}`),
  );
}