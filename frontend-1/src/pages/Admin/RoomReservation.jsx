import React from "react";
import Searchbar from "../../components/public/searchbar";
import ReservationList from "../../components/room/ReservationList";
import useFetch from "../../hooks/useFetch";
import {useRsvContext} from '../../hooks/rsv/useRsvContext'
import { useDisplayContext } from "../../hooks/useDisplayContext";

const RoomReservation = () => {
    // const reservations = [
    //     { kode: 'xx-123-abc-123', lokasi: 'Ruang A', peminjam:'si A', tanggal:'20/05/2023' },
    //     { kode: 'xx-124-abc-125', lokasi: 'Ruang B', peminjam:'si B', tanggal:'21/05/2023' },
    //     { kode: 'xx-126-abc-126', lokasi: 'Ruang A', peminjam:'si C', tanggal:'21/05/2023' },
    // ];

    const {rsvs, dispatch} = useRsvContext();
    const { notify, isPending, error, setLoading, setError } = useDisplayContext();
    const url = 'http://localhost:5002/campus/bookings';
    useFetch({ url, dispatch, setError, setLoading, type: 'GET_RSV' });
    console.log(rsvs)

    
    return (
        <>
            <div className="justify-center items-center py-20 lg:py-10 px-3 lg:px-28 h-full" >
                <div className="mb-12">
                    <h1 className="text-4xl font-bold">Data Reservasi Ruangan</h1>
                </div>
                <div className="justify-between sm:justify-end flex-row sm:flex mb-6" >
                    <Searchbar />
                </div>

                <table className="shadow-2xl border-2 border-dark-blue-200 text-center w-full" >
                    <thead className="bg-dark-blue text-white" >
                        <tr >
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > No </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Ruangan </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Lokasi </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Peminjam </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Tanggal </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Act </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rsvs && rsvs.map((rsv, index)=>(
                            <ReservationList rsv={rsv} index={index} />
                        ))}
                    </tbody>
                </table>
                <div className="flex-row">

                </div>

            </div>
        </>
    );
}

export default RoomReservation;