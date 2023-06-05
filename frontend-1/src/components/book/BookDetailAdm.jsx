import React, { useState } from "react";
import InputGenre from "./InputGenre";
import BookDelete from "./DeleteBook";
import { useBookContext } from "../../hooks/book/useBookContext";
import { useHandleBookUpdate } from "../../hooks/book/usehandleBookEdit";
import { useHandleBookDelete } from "../../hooks/book/useHandleBookDelete";

const BookDetailAdm = ({ book, handleClose, setLoading, setError }) => {
    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)
    const [publisher, setPublisher] = useState(book.publisher)
    const [genres, setGenres] = useState(book.genres)
    const [synopsis, setSynopsis] = useState(book.synopsis)
    const [isFiction, setIsFiction] = useState(book.isFiction)
    const [numOfBooks, setNumOfBooks] = useState(book.numOfBooks)
    const [imageUrl, setImageUrl] = useState(book.imageUrl)

    const [editMode, setEditMode] = useState(false)
    const setEditView = (state) => {
        setEditMode(state)
    }

    const [deleteModal, setDeleteModal] = useState(false)
    const setDeleteView = (state) => {
        setDeleteModal(state)
    }

    const handleConfirm = (state) => {
        setIsFiction(state)
    }

    const {dispatch} = useBookContext();

    const updated = {title, author, publisher, imageUrl, synopsis, isFiction, numOfBooks, genres}
    console.log(updated)
    const {handleUpdate:handleEdit}=useHandleBookUpdate({url: 'http://localhost:5001/library/books/', type: 'EDIT_BOOK', dispatch, data: book, updatedData: updated, setLoading, setError, closeDetailPopup: handleClose})
    const {handleRemove:handleRemove}= useHandleBookDelete({url: 'http://localhost:5001/library/books/', type: 'DELETE_BOOK', dispatch, data: book, setLoading, setError, closeDetailPopup: handleClose})

    return (
        <>
            {deleteModal && <BookDelete setPopUp={setDeleteView} handleRemove={handleRemove} />}
            <div className="overlay z-20"></div>
            <div className="container w-fit mx-auto absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <div className="w-screen max-w-xl mx-8 bg-white shadow-xl rounded-3xl px-6 py-6">
                    <div className="flex justify-end">
                        <button className="" onClick={(e) => handleClose(false)} >x</button>
                    </div>
                    {editMode ?
                        <>
                            <div className="mb-2">
                                {title != "" && <label className="">Judul : </label>}
                                <input
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="judul"
                                    type="text"
                                    placeholder="Judul"
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                />
                            </div>
                            <div className="mb-2">
                                {author != "" && <label className="">Author : </label>}
                                <input
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="author"
                                    type="text"
                                    placeholder="Author"
                                    onChange={(e) => setAuthor(e.target.value)}
                                    value={author}
                                />
                            </div>
                            <div className="mb-2">
                                {publisher != "" && <label className="">Publisher : </label>}
                                <input
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="publisher"
                                    type="text"
                                    placeholder="Publisher"
                                    onChange={(e) => setPublisher(e.target.value)}
                                    value={publisher}
                                />
                            </div>
                            <div className="mb-2">
                                <InputGenre genres={genres} setGenres={setGenres} />
                            </div>
                            <div className="mb-2">
                                {synopsis != "" && <label className="">Sinopsis : </label>}
                                <textarea
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="sinopsis"
                                    type=""
                                    placeholder="Sinopsis"
                                    onChange={(e) => setSynopsis(e.target.value)}
                                    value={synopsis}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="">Tipe Buku : </label>
                                <div className="flex flex-row gap-4">
                                    <label>
                                        <input
                                            type="radio"
                                            value="false"
                                            checked={isFiction == "false"}
                                            onChange={(e) => { handleConfirm(e.target.value) }}
                                        />Non-Fiksi
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            value="true"
                                            checked={isFiction == "true"}
                                            onChange={(e) => { handleConfirm(e.target.value) }}
                                        />Fiksi
                                    </label>
                                </div>
                            </div>
                            <div className="mb-2">
                                {numOfBooks != "" && <label className="">Total Stok : </label>}
                                <input
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="numOfBooks"
                                    type="number"
                                    placeholder="numOfBooks"
                                    onChange={(e) => setNumOfBooks(e.target.value)}
                                    value={numOfBooks}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="bg-white mt-3 hover:bg-red-600 hover:text-white text-red-600 border-red-600 font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline"
                                    onClick={(e) => setEditView(false)}
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={handleEdit}
                                    className="bg-orange mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline"
                                >
                                    Submit
                                </button>
                            </div>
                        </>
                        :
                        <>
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
                                    className="bg-white mt-3 hover:bg-red-600 hover:text-white text-red-600 border-red-600 font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline"
                                    onClick={(e) => { setDeleteView(true) }}
                                >
                                    Hapus
                                </button>
                                <button
                                    className="bg-orange mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline"
                                    onClick={(e) => { setEditView(true) }}
                                >
                                    Edit Buku
                                </button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default BookDetailAdm;