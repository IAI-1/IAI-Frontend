import { createContext, useReducer } from "react";

export const BookContext = createContext();

export const bookReducer = (state, action) => {
    switch(action.type){
        case 'GET_BOOK':
            return{
                books: action.payload
            }
        case 'ADD_BOOK':
            return{
                books:[action.payload, ...state.books.books]
            }
        case 'EDIT_BOOK':
            return{
                books: state.books.map((item)=>{
                    return item.id !== action.payload.id ? item:action.payload
                })
            }
        case 'DELETE_BOOK':
            return{
                books: state.books.filter((item)=>{
                    return item.id !== action.payload.id
                })
            }
        default:
            return state
    }
}

const BookContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(bookReducer, {
        books: null
    })

    return(
        <BookContext.Provider value={{ ...state, dispatch}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider