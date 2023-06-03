import React from "react";
import BookDisplay from "../../components/book/BookDisplay";
import Searchbar from "../../components/public/searchbar";

const BookBooking = () => {
    const books = [
        { title: 'Book 1', author: 'Author 1', publisher:'Publisher 1', synopsis:'lorem ipsum sir dolor amet', isFiction:true, numOfBooks:5, genres:['gen1','gen2', 'gen3'], cover: 'book1.jpg' },
        { title: 'Book 2', author: 'Author 2', publisher:'Publisher 2', synopsis:'lorem ipsum sir dolor amet', isFiction:true, numOfBooks:8, genres:['gen1','gen2', 'gen3'], cover: 'book2.jpg' },
        { title: 'Book 3', author: 'Author 3', publisher:'Publisher 3', synopsis:'lorem ipsum sir dolor amet', isFiction:true, numOfBooks:11, genres:['gen1','gen2', 'gen3'], cover: 'book3.jpg' },
    ];

    return (
        <>
            <div className="justify-center items-center py-20 lg:py-10 px-3 lg:px-28 h-full" >
                <div className="mb-12">
                    <h1 className="text-4xl font-bold">E-Library</h1>
                </div>
                <div className="justify-between sm:justify-end flex-row sm:flex mb-6" >
                    <Searchbar />
                </div>
                <div className="flex gap-4">
                    {books && books.map((book, index) => (
                        <BookDisplay book={book} index={index} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default BookBooking;