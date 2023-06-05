import { createContext, useReducer } from "react";

export const RentContext = createContext();

export const rentReducer = (state, action) => {
    console.log(state)
    switch(action.type){
        case 'GET_RENT':
            return{
                rents: action.payload.borrows
            }
        case 'ADD_RENT':
            return{
                rents:[action.payload, ...state.rents]
            }
        case 'EDIT_RENT':
            return{
                rents: state.rents.map((item)=>{
                    return item.id !== action.payload.id ? item:action.payload
                })
            }
        case 'DELETE_RENT':
            return{
                rents: state.rents.filter((item)=>{
                    return item.id !== action.payload.id
                })
            }
        default:
            return state
    }
}

const RentContextProvider = ({children})=>{
    const [state, dispatch2] = useReducer(rentReducer, {
        rents: null
    })

    return(
        <RentContext.Provider value={{ ...state, dispatch2}}>
            {children}
        </RentContext.Provider>
    )
}

export default RentContextProvider