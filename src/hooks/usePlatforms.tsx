import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResposne } from "../services/api-client";

const apiCLient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery<FetchResposne<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiCLient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
    // initialData: genresData save in const and use fixed Data
  });

export default usePlatform;
