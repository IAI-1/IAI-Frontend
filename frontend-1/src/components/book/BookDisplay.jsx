import React, { useState } from "react";
import BookDetail from "./BookDetail";

const BookDisplay = ({ book, index, setLoading, setError }) => {
    const [detail, setDetail] = useState(false)
    const viewDetail=(state)=>{
        setDetail(state)
    }

    return (
        <>
            {detail && <BookDetail book={book} handleClose={viewDetail} />}
            <div key={index} className="p-4 bg-white shadow-md rounded-md">
                <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-48 object-cover rounded-md"
                />
                <div className="mt-2 justify-start">
                    <h3 className="text-xl font-semibold">{book.title}</h3>
                    <p className="text-gray-500">{book.author}</p>
                    <div className="justify-end mt-3 text-xs">
                        <p 
                            className="text-orange cursor-pointer"
                            onClick={(e)=>{viewDetail(true)}}
                        >...klik detail</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookDisplay;