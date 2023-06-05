import { createContext, useReducer } from "react";

export const RoomContext = createContext();

export const roomReducer = (state, action) => {
    console.log(state.rooms)
    console.log(action.payload)
    switch(action.type){
        case 'GET_ROOM':
            return{
                rooms: action.payload.rooms
            }
        case 'ADD_ROOM':
            return{
                rooms:[action.payload, ...state.rooms]
            }
        case 'EDIT_ROOM':
            return{
                rooms: state.rooms.map((item)=>{
                    return item.id !== action.payload.id ? item:action.payload
                })
            }
        case 'DELETE_ROOM':
            return{
                rooms: state.rooms.filter((item)=>{
                    return item.id !== action.payload.id
                })
            }
        default:
            return state
    }
}

const RoomContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(roomReducer, {
        rooms: null
    })

    return(
        <RoomContext.Provider value={{ ...state, dispatch}}>
            {children}
        </RoomContext.Provider>
    )
}

export default RoomContextProvider