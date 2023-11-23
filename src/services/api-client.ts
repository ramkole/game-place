import axios, { AxiosRequestConfig } from "axios";

export interface FetchResposne <T>{
    count: number;
    results: T[];
  }

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '57a2df3edc764061bd7032067707c2d0'
    }
})

class APIClient<T> {
  endpoint: string;
  
  constructor(endpoint:string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResposne<T>>(this.endpoint, config)
    .then(res => res.data)
  }
}

export default APIClient