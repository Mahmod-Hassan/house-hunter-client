import axios from "axios";
import { useEffect, useState } from "react";


const useGetRequest = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        setLoading(true);
        axios
           .get(url)
           .then(({data}) => {
              setData(data)
              setLoading(false);
           })
           .catch(err => setError(err.message))
    },[url])

    const refetch = () => {
        setLoading(true);
        axios
           .get(url, {
            headers: {
             authorization: `bearer ${localStorage.getItem('access_token')}`
            }
        })
           .then(({data}) => {
              setData(data)
              setLoading(false);
           })
           .catch(err => setError(err.message))
    }
    return {data, loading, error, refetch}
}

export default useGetRequest;