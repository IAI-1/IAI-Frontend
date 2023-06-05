import { createContext, useReducer } from "react";

export const RsvContext = createContext();

export const rsvReducer = (state, action) => {
    console.log(action.payload.bookings)
    console.log(state)
    switch(action.type){
        case 'GET_RSV':
            return{
                rsvs: action.payload.bookings
            }
        case 'ADD_RSV':
            return{
                rsvs:[action.payload, ...state.rsvs]
            }
        case 'EDIT_RSV':
            return{
                rsvs: state.rsvs.map((item)=>{
                    return item.id !== action.payload.id ? item:action.payload
                })
            }
        case 'DELETE_RSV':
            return{
                rsvs: state.rsvs.filter((item)=>{
                    return item.id !== action.payload.id
                })
            }
        default:
            return state
    }
}

const RsvContextProvider = ({children})=>{
    const [state, dispatch2] = useReducer(rsvReducer, {
        rsvs: null
    })

    return(
        <RsvContext.Provider value={{ ...state, dispatch2}}>
            {children}
        </RsvContext.Provider>
    )
}

export default RsvContextProvider