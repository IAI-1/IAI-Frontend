import React, { useState } from "react"

const RentDetail = ({ rent, selfPopUp }) => {
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
                        <h3 className="text-xl font-bold">{rent.kode}</h3>
                        <div className="flex flex-row gap-2">
                            <label className="">{rent.borrowedAt}</label>
                        </div>
                        <label className="">{rent.status}</label>
                    </div>
                    <div className="mb-2 flex flex-row gap-2">
                        <label className="">Peminjam : </label>
                        <label className="">{rent.user.nama}</label>
                    </div>
                    <div className="mb-2 flex flex-row gap-2">
                        <label className="">Judul Buku : </label>
                        <label className="">{rent.book.title}</label>
                    </div>
                    <div className="mt-6 flex flex-col">
                        <label className="">Konfirmasi Pengembalian : </label>
                        <div className="flex flex-row gap-4">
                            <label>
                                <input
                                    type="radio"
                                    value="Belum"
                                    checked={konfirmasi === "Belum"}
                                    onChange={handleConfirm}
                                />Belum
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Sudah"
                                    checked={konfirmasi === "Sudah"}
                                    onChange={handleConfirm}
                                />Sudah
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

export default RentDetail;