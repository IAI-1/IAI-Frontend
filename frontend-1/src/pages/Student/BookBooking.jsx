import React from "react";
import BookDisplay from "../../components/book/BookDisplay";
import Searchbar from "../../components/public/searchbar";
import { Link } from "react-router-dom";
import {useBookContext} from '../../hooks/book/useBookContext';
import useFetch from '../../hooks/useFetch';
import { useDisplayContext } from "../../hooks/useDisplayContext";
import {useRentContext} from '../../hooks/rent/useRentContext'

const BookBooking = () => {
    // const books = [
    //     { title: 'Book 1', author: 'Author 1', publisher:'Publisher 1', synopsis:'lorem ipsum sir dolor amet', isFiction:true, numOfBooks:5, genres:['gen1','gen2', 'gen3'], cover: 'book1.jpg' },
    //     { title: 'Book 2', author: 'Author 2', publisher:'Publisher 2', synopsis:'lorem ipsum sir dolor amet', isFiction:true, numOfBooks:8, genres:['gen1','gen2', 'gen3'], cover: 'book2.jpg' },
    //     { title: 'Book 3', author: 'Author 3', publisher:'Publisher 3', synopsis:'lorem ipsum sir dolor amet', isFiction:true, numOfBooks:11, genres:['gen1','gen2', 'gen3'], cover: 'book3.jpg' },
    // ];
    const {books, dispatch} = useBookContext()
    const { notify, isPending, error, setLoading, setError } = useDisplayContext();
    const url = 'http://localhost:5001/library/books';
    useFetch({ url, dispatch, setError, setLoading, type: 'GET_BOOK' });

    const {rents, dispatch2} = useRentContext()
    const url2 = 'http://localhost:5001/library/borrows';
    useFetch({ url:url2, dispatch:dispatch2, setError, setLoading, type: 'GET_RENT' });
    console.log(rents)

    return (
        <>
            <div className="justify-center items-center py-20 lg:py-10 px-3 lg:px-28 h-full" >
                <div className="mb-12">
                    <h1 className="text-4xl font-bold">E-Library</h1>
                </div>
                <div className="justify-between sm:justify-between flex-row sm:flex items-center mb-2" >
                    <Link className="text-sm text-blue-700 font-bold cursor-pointer" to="/book/history">Lihat Riwayat Peminjaman</Link>
                    <Searchbar />
                </div>
                <div className="flex flex-wrap gap-4">
                    {books && books.map((book, index) => (
                        <BookDisplay book={book} index={index} setLoading={setLoading} setError={setError} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default BookBooking;