import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import { useDisplayContext } from "../../hooks/useDisplayContext";
import { useRoomContext } from '../../hooks/room/useRoomContext'
import { useRsvContext } from '../../hooks/rsv/useRsvContext'
import {useHandleRsvBorrow} from '../../hooks/rsv/useHandleRsvBorrow'

import RoomOption from '../../components/room/RoomOption'

import {useAuthContext} from '../../hooks/auth/useAuthContext'

const RoomBooking = () => {
    const {user} = useAuthContext()
    const [userName, setUserName] = useState(user.user.nama)
    const [userId, setUserId] = useState(user.user._id)
    const [email, setEmail] = useState(user.user.email)

    const [roomId, setRoomId] = useState("");
    const chooseRoom = (id) =>{
        setRoomId(JSON.parse(id))
    }

    const rules = [
        { description: 'Maksimal Peminjaman dilakukan dalam 1 hari sebelum penggunaan ruangan.' },
        { description: 'Pengguna yang sudah memesan tapi tidak hadir, maka dikenakan sanksi pemblokiran sampai 3 hari. Kecuali melakukan pembatalan pemesanan maksimal 1 hari sebelum waktu jam buka pada periode dan hari yang ditentukan.' },
        { description: 'Apabila mahasiswa melakukan 2 kali pemesanan kursi dalam 1 hari yang sama dan tidak hadir pada periode 1 tanpa pembatalan, maka sistem akan membatalkan pesanan periode 2 secara otomatis.' },
        { description: 'Pemesanan tempat tidak dapat dilakukan pada waktu periode berjalan.' }
    ];

    const [formData, setFormData] = useState({
        location: '',
    });

    const { rooms, dispatch } = useRoomContext();
    const { notify, isPending, error, setLoading, setError } = useDisplayContext();
    const url = 'http://localhost:5002/campus/rooms';
    useFetch({ url, dispatch, setError, setLoading, type: 'GET_ROOM' });

    const handleChange = (e, index) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const listRules = rules.map(rules =>
        <li>{rules.description}</li>
    );

    const newRsv = {userId, roomId}
    console.log(newRsv)
    const { rsvs, dispatch2 } = useRsvContext();
    useFetch({ url:'http://localhost:5002/campus/bookings/', dispatch:dispatch2, setError, setLoading, type: 'GET_RSV' });
    const {handleAdd:handleSubmit}=useHandleRsvBorrow({url:'http://localhost:5002/campus/bookings/booking', type:'ADD_RSV', dispatch:dispatch2, data:newRsv, setLoading, setError})

    return (
        <>
            <div className="bg-blue flex py-5 px-16 text-xl">
                <div className="bg-white h-full flex flex-col gap-5 w-full pr-5 rounded-lg">
                    <div className="mb-6 ml-8">
                        <h1 className="text-4xl font-bold">Form Reservasi Ruangan</h1>
                    </div>
                    <div className="bg-lightblue h-fit w-fit px-10 py-3 ml-8 mr-4 text-black border-solid border-2 border-blue">
                        <h5 className="font-medium">
                            Aturan Peminjaman oleh Pengguna
                        </h5>
                        <ol
                            style={{ listStyleType: 'decimal' }}
                            className="pt-2 text-justify text-sm">
                            {listRules}
                        </ol>
                    </div>
                    <form className="text-sm grid grid-cols-2 gap-x-16 gap-y-4 pb-5 items-center bg-graylight border-solid border-2 border-gray px-10 py-3 ml-8 mr-4">
                        <div className="w-full  flex gap-4">
                            <label htmlFor="name">
                                Peminjam :
                            </label>
                            <label>
                                {userName}
                            </label>
                        </div>
                        <div className="bw-full flex flex-col">
                            <label htmlFor="email">
                                Email UGM
                            </label>
                            <label>
                                {email}
                            </label>
                        </div>
                        <div className="bw-full">
                            <label htmlFor="needs">
                                Keperluan
                            </label>
                            <input
                                type="text"
                                id="need"
                                className="w-full mt-2 bg-white border border-graydark rounded"
                            >
                            </input>
                        </div>
                        <div>
                            <label htmlFor="room" className="block mb-1">
                                Ruangan:
                            </label>
                            <select
                                id="location"
                                name="location"
                                onChange={(e)=>{chooseRoom(e.target.value)}}
                                className="w-full border border-gray-300 px-3 py-2 rounded"
                            >
                                {rooms && rooms?.map(room=>{
                                    return <RoomOption room={room} />
                                })}
                            </select>
                        </div>
                        <div className="bw-full">
                            <label>
                                Tanggal Peminjaman
                            </label>
                            <input
                                type="date"
                                id="date"
                                className="w-full mt-2 bg-white border border-graydark rounded"
                            >
                            </input>
                        </div>
                        <div className="bw-full">
                            <label>
                                Waktu Peminjaman
                            </label>
                            <div className="flex gap-2  items-center">
                                <input
                                    type="time"
                                    id="time_start"
                                    className="w-full mt-2 bg-white border border-graydark rounded"
                                >
                                </input>
                                s.d
                                <input
                                    type="time"
                                    id="time_end"
                                    className="w-full mt-2 bg-white border border-graydark rounded"
                                >
                                </input>
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-end mx-4 gap-4 items-center">
                        <Link className="text-sm text-blue-700 font-bold cursor-pointer" to="/reservation/history">Lihat Riwayat Reservasi</Link>
                        <button 
                            onClick={handleSubmit}
                            className="h-fit w-fit bg-orange text-white font py-2 px-4 flex rounded"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomBooking;