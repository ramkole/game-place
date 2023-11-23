import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { Platform } from "../hooks/usePlatforms";
import APIClient, {FetchResposne} from '../services/api-client';

const apiCLient = new APIClient<Game>('/games')

export interface Game {
    id: number;
    name: string;
    background_image: string
    parent_platforms: { platform: Platform } []
    metacritic: number
  }
  

const useGames = (gameQuery: GameQuery | null) =>  useQuery<FetchResposne<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () => apiCLient.getAll({params: {
     genres: gameQuery?.genre?.id, 
     parent_platforms: gameQuery?.platform?.id, 
     ordering: gameQuery?.sortOrder,
     search: gameQuery?.searchText
   }})

})

export default useGames