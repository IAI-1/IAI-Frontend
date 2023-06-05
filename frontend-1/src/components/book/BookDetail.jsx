import React, { useState } from "react";
import {useRentContext} from '../../hooks/rent/useRentContext'
import { useHandleRentBorrow } from "../../hooks/rent/useHandleRentBorrow";

const BookDetail = ({ book, handleClose, setLoading, setError }) => {
    const {dispatch} = useRentContext();

    const bookId = book._id
    const newRent = {bookId}
    const {handleAdd:handleBorrow}=useHandleRentBorrow({url:'http://localhost:5001/library/borrows/borrow', type:'ADD_RENT', dispatch, data:newRent, setLoading, setError, closePopup: handleClose})

    return (
        <>
            <div className="overlay z-20"></div>
            <div className="container w-fit mx-auto absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <div className="w-screen max-w-xl mx-8 bg-white shadow-xl rounded-3xl px-6 py-6">
                    <div className="flex justify-end">
                        <button className="" onClick={(e) => handleClose(false)} >x</button>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold">{book.title}</h3>
                        <div className="flex flex-row gap-6">
                            <label>{book.author}</label>
                            <label>{book.publisher}</label>
                        </div>
                    </div>
                    <div>
                        <img
                            src={book.cover}
                            alt={book.title}
                            className="w-full h-48 object-cover rounded-md"
                        />
                    </div>
                    <div className="mb-3">
                        {book.genres && book.genres.map((genre) => (
                            <label className="p-1 text-white bg-blue-700 mr-2 text-sm">{genre}</label>
                        ))}
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label className="text-sm">Sinopsis : </label>
                        <label className="">{book.synopsis}</label>
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label className="text-sm">Stok : </label>
                        <label className="">{book.numOfBooks}</label>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button
                            onClick={handleBorrow}
                            className="bg-orange mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline"
                        >
                            Pinjam Buku
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookDetail;