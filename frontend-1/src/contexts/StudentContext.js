import { createContext, useReducer } from "react";

export const StudentContext = createContext();

export const studentReducer = (state, action) => {
    switch(action.type){
        case 'GET_STUDENT':
            return{
                students: action.payload
            }
        case 'ADD_STUDENT':
            return{
                students:[action.payload, ...state.students]
            }
        case 'EDIT_STUDENT':
            return{
                students: state.students.students.map((item)=>{
                    return item.id !== action.payload.id ? item:action.payload
                })
            }
        case 'DELETE_STUDENT':
            return{
                students: state.students.filter((item)=>{
                    return item.id !== action.payload.id
                })
            }
        default:
            return state
    }
}

const StudentContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(studentReducer, {
        students: null
    })

    return(
        <StudentContext.Provider value={{ ...state, dispatch}}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentContextProvider