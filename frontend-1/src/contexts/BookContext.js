import { createContext, useReducer } from "react";

export const BookContext = createContext();

export const bookReducer = (state, action) => {
    switch(action.type){
        case 'GET_BOOK':
            return{
                books: action.payload.books
            }
        case 'ADD_BOOK':
            return{
                books:[action.payload, ...state.books]
            }
        case 'EDIT_BOOK':
            return{
                books: state.books.map((item)=>{
                    return item._id !== action.payload._id ? item:action.payload
                })
            }
        case 'DELETE_BOOK':
            return{
                books: state.books.filter((item)=>{
                    return item._id !== action.payload
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