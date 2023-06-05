import { useState } from "react"
import InputGenre from "./InputGenre"
import {useHandleBookAdd} from '../../hooks/book/useHandleBookAdd'
import { useBookContext } from "../../hooks/book/useBookContext"

const AddBook = ({ setAdd, setLoading, setError }) => {
    const {dispatch} = useBookContext()

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [publisher, setPublisher] = useState("")
    const [imageUrl, setImageUrl] = useState("test")
    const [genres, setGenres] = useState([])
    const [synopsis, setSynopsis] = useState("")
    const [isFiction, setIsFiction] = useState("")
    const [numOfBooks, setNumOfBooks] = useState(0)

    const handleConfirm=(state)=>{
        setIsFiction(state)
    }

    const handleClose = (state) => {
        setAdd(state)
    }

    const newBook = {title, author, publisher, imageUrl, synopsis, isFiction, numOfBooks, genres}
    const {handleAdd:handleSubmit}=useHandleBookAdd({url:'http://localhost:5001/library/books', type:'ADD_BOOK', dispatch, data:newBook, setLoading, setError, closePopup: handleClose})

    return (
        <>
            <div className="overlay z-20"></div>
            <div className="container w-fit mx-auto absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <div className="w-screen max-w-xl mx-8 bg-white shadow-xl rounded-3xl px-8 pt-6 pb-8 mb-4">
                    <div className="flex justify-end">
                        <button className="" onClick={(e) => handleClose(false)} >x</button>
                    </div>
                    <h3 className="text-center text-2xl font -bold mb-12">Tambah Buku</h3>
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
                                    onChange={(e)=>{handleConfirm(e.target.value)}}
                                />Non-Fiksi
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="true"
                                    checked={isFiction == "true"}
                                    onChange={(e)=>{handleConfirm(e.target.value)}}
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
                            onClick={handleSubmit}
                            className="bg-orange mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddBook;