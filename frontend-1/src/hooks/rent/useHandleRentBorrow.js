import { useAuthContext } from "../auth/useAuthContext";
export const useHandleRentBorrow = ({url, data, type, dispatch, setLoading, setError, closePopUp, notify}) => {
    const user = useAuthContext();
    
    const add = async()=>{
        setLoading(true);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.user.accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            user: {
                id: user.user._id
            }
        })

        const json = await response.json();

        if (json.success) {
            console.log(json.data)
            dispatch({ type: type, payload: json.data.borrow });
            closePopUp(false);
            setLoading(false);
            setError(null);
            // notify.info(json.message);
        }
        if (!json.success) {
            setLoading(false);
            // setError(json.error);
            // notify.error(json.error);
        }
    }

    const handleAdd = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        await add();
    }

    return {add, handleAdd};
}