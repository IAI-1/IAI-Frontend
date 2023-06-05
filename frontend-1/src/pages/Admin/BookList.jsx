import React, { useState } from "react";
import Searchbar from "../../components/public/searchbar"
import BookDisplayAdm from "../../components/book/BookDisplayAdm";
import AddBook from "../../components/book/AddBook";
import {useBookContext} from '../../hooks/book/useBookContext';
import useFetch from '../../hooks/useFetch';
import { useDisplayContext } from "../../hooks/useDisplayContext";

const BookList = () => {
    // const books = [
    //     { title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', synopsis: 'lorem ipsum sir dolor amet', isFiction: "true", numOfBooks: 5, genres: ['gen1', 'gen2', 'gen3'], cover: 'book1.jpg' },
    //     { title: 'Book 2', author: 'Author 2', publisher: 'Publisher 2', synopsis: 'lorem ipsum sir dolor amet', isFiction: "true", numOfBooks: 8, genres: ['gen1', 'gen2', 'gen3'], cover: 'book2.jpg' },
    //     { title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', synopsis: 'lorem ipsum sir dolor amet', isFiction: "true", numOfBooks: 11, genres: ['gen1', 'gen2', 'gen3'], cover: 'book3.jpg' },
    // ];
    const {books, dispatch} = useBookContext()
    const { notify, isPending, error, setLoading, setError } = useDisplayContext();
    const url = 'http://localhost:5001/library/books';
    useFetch({ url, dispatch, setError, setLoading, type: 'GET_BOOK' });

    const [addModal, setAddModal] = useState(false)
    const viewAdd = (state) => {
        setAddModal(state)
    }

    return (
        <>
            {addModal && <AddBook setAdd={viewAdd} setLoading={setLoading} setError={setError} />}
            <div className="justify-center items-center py-20 lg:py-10 px-3 lg:px-28 h-full" >
                <div className="mb-12">
                    <h1 className="text-4xl font-bold">Data Buku</h1>
                </div>
                <div className="justify-between sm:justify-between flex-row sm:flex" >
                    <button
                        type="button"
                        className="button p-3 mt-2 mb-10 sm:mb-12 mr-7 relative bg-orange text-white font-bold"
                        onClick={(e)=>{viewAdd(true)}}
                    > Tambah Buku + </button>
                    <Searchbar />
                </div>
                <div className="flex flex-wrap gap-4">
                    {books && books.map((book, index) => (
                        <BookDisplayAdm book={book} index={index} setLoading={setLoading} setError={setError} />
                    ))}
                </div>

                <div className="flex-row">

                </div>

            </div>
        </>
    );
}

export default BookList;