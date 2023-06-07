import {useQuery} from 'react-query';
import { fetchWrapper } from '../../api/restApi';
import { API_BASE_URL, GET_DONTAION_LOCATION_ENDPOINT } from '../../constants';
  
export const useGetLocations = () => {

  return useQuery(
    ['locations'],
    () => fetchWrapper('GET', `${API_BASE_URL}${GET_DONTAION_LOCATION_ENDPOINT}`),
  );
}