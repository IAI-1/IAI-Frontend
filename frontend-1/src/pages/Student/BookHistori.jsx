import React from "react";
import Searchbar from "../../components/public/searchbar";
import { Link } from "react-router-dom";
import {useRentContext} from '../../hooks/rent/useRentContext'
import useFetch from '../../hooks/useFetch';
import { useDisplayContext } from "../../hooks/useDisplayContext";
import RentHistList from '../../components/book/RentHistList'

const BookHistori = () => {
    const {rents, dispatch} = useRentContext()
    const { notify, isPending, error, setLoading, setError } = useDisplayContext();
    const url = 'http://localhost:5001/library/borrows/';
    useFetch({ url, dispatch, setError, setLoading, type: 'GET_RENT' });

    console.log(rents)

    return (
        <>
            <div className="justify-center items-center py-20 lg:py-10 px-3 lg:px-28 h-full" >
                <div className="mb-12">
                    <h1 className="text-4xl font-bold">Histori Peminjaman Buku</h1>
                </div>
                <div className="justify-between sm:justify-between flex-row sm:flex items-center mb-2">
                    <Link className="text-sm text-blue-700 font-bold cursor-pointer" to="/book/rent">Cari Buku</Link>
                    <Searchbar />
                </div>

                <table className="shadow-2xl border-2 border-dark-blue-200 text-center w-full" >
                    <thead className="bg-dark-blue text-white" >
                        <tr >
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Judul Buku </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Peminjam </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Tanggal Pengembalian </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Status </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rents && rents.map((rent, index)=>{
                            return <RentHistList rent={rent} index={index} />
                        })}
                    </tbody>
                </table>
                <div className="flex-row">

                </div>

            </div>
        </>
    );
}

export default BookHistori;