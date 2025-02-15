import {useEffect} from "react"
import { useAuthContext } from "./auth/useAuthContext";

const useFetch = ({url, type, dispatch, setError, setLoading, })=>{
    const {user} = useAuthContext();
    useEffect(()=>{
        setLoading(true);
        const getData =  async()=>{
            try{
                const response = await fetch(url,{
                    headers:{
                        'Authorization': `Bearer ${user.accessToken}`
                    },
                    user:{
                        id: user.user._id,
                        role: user.user.role
                    }
                });
                const json = await response.json();

                if(json.success){
                    dispatch({type, payload: json.data});
                    setLoading(false);
                    setError(null);
                }
                if(!json.success){
                    setLoading(false);
                    setError(json.error);
                }
            }
            catch(err){
                setLoading(false);
                setError(err)
            }
        }
        getData();
    },[dispatch])
}

export default useFetch;