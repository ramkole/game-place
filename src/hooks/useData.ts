import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';


  interface FetchResposne <T>{
    count: number;
    results: T[];
  }

const useData = <T>( endpoint :string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {

    const [data, setData] = useState<T[]>([]);
    const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        apiClient
          .get<FetchResposne<T>>(endpoint, {signal: controller.signal, ...requestConfig})
          .then((res) => {setData(res.data.results)
            setLoading(false)
          })
          .catch((err) => {
            if(err instanceof CanceledError) return
            setErrors(err.message)
            setLoading(false)
         });

          return () => controller.abort()
      }, deps ? [...deps]: []);
    
      return {data, errors, isLoading}
}

export default useData