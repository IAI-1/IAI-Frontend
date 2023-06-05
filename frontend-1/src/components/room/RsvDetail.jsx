import React, { useState } from "react";

const RsvDetail = ({ rsv, selfPopUp }) => {
    const [konfirmasi, setKonfirmasi] = useState("")
    const handleConfirm=(e)=>{
        setKonfirmasi(e.target.value)
    }

    return (
        <>
            <div className="overlay z-20"></div>
            <div className="container w-fit mx-auto absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <div className="text-left w-screen max-w-xl mx-8 bg-white shadow-xl rounded-3xl px-6 py-6">
                    <div className="flex justify-end">
                        <button className="" onClick={(e) => selfPopUp(false)} >x</button>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold">{rsv.kode}</h3>
                        <label className="">{rsv.borrowedAt}</label>
                    </div>
                    <div className="mb-2 flex flex-row gap-2">
                        <label className="">Ruang : </label>
                        <label className="">{rsv.room.name}</label>
                    </div>
                    <div className="mb-2 flex flex-row gap-2">
                        <label className="">Lokasi : </label>
                        <label className="">{rsv.room.location}</label>
                    </div>
                    <div className="mb-2 flex flex-row gap-2">
                        <label className="">Peminjam : </label>
                        <label className="">{rsv.user.nama}</label>
                    </div>
                    <div className="mt-6 flex flex-col">
                        <label className="">Konfirmasi Peminjaman : </label>
                        <div className="flex flex-row gap-4">
                            <label>
                                <input
                                    type="radio"
                                    value="Ditolak"
                                    checked={konfirmasi==="Ditolak"}
                                    onChange={handleConfirm}
                                />Ditolak
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Disetujui"
                                    checked={konfirmasi==="Disetujui"}
                                    onChange={handleConfirm}
                                />Disetujui
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button
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

export default RsvDetail;