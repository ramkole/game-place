import { useQuery } from '@tanstack/react-query';
import APIClient, { FetchResposne } from '../services/api-client';

const apiCLient = new APIClient<Genre>('/genres')

export interface Genre {
  id: number,
  name: string,
  image_background: string
}


const useGenres = () => useQuery<FetchResposne<Genre>, Error>({
  queryKey: ['genres'],
  queryFn:  apiCLient.getAll,
  staleTime: 24*60*60*1000, //24hrs
  // initialData: genresData save in const and use fixed Data
})

export default useGenres