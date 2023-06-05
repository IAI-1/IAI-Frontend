import React, { useState } from "react"
import RoomDelete from "./DeleteRoom"
import {useHandleRoomUpdate} from '../../hooks/room/useHandleRoomEdit'
import {useRoomContext} from '../../hooks/room/useRoomContext'

const RoomDetail = ({ room, handleClose, setLoading, setError }) => {
    const [name, setNama] = useState(room.name)
    const [type, setTipe] = useState(room.type)
    const [location, setLokasi] = useState(room.location)

    const [editMode, setEditMode] = useState(false)
    const setEditView = (state) => {
        setEditMode(state)
    }

    const [deleteModal, setDeleteModal] = useState(false)
    const setDeleteView = (state) => {
        setDeleteModal(state)
    }

    const {dispatch} = useRoomContext();

    const updated = {name, type, location }
    const {handleUpdate:handleEdit}=useHandleRoomUpdate({url: 'http://localhost:5002/campus/rooms/', type: 'EDIT_ROOM', dispatch, data: room, updatedData: updated, setLoading, setError, closeDetailPopup: handleClose})

    return (
        <>
            {deleteModal && <RoomDelete setPopUp={setDeleteView}/> }
            <div className="overlay z-20"></div>
            <div className="container w-fit mx-auto absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <div className="text-left w-screen max-w-xl mx-8 bg-white shadow-xl rounded-3xl px-6 py-6">
                    <div className="flex justify-end">
                        <button className="" onClick={(e) => handleClose(false)} >x</button>
                    </div>
                    {editMode ?
                        <>
                            <div className="mb-2">
                                {name != "" && <label className="">Nama Ruangan : </label>}
                                <input
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nama"
                                    type="text"
                                    placeholder="Nama Ruangan"
                                    onChange={(e) => setNama(e.target.value)}
                                    value={name}
                                />
                            </div>
                            <div className="mb-2">
                                {type != "" && <label className="">Tipe : </label>}
                                <input
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="tipe"
                                    type="text"
                                    placeholder="Tipe ruangan"
                                    onChange={(e) => setTipe(e.target.value)}
                                    value={type}
                                />
                            </div>
                            <div className="mb-2">
                                {location != "" && <label className="">Lokasi : </label>}
                                <input
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="lokasi"
                                    type="text"
                                    placeholder="Lokasi ruangan"
                                    onChange={(e) => setLokasi(e.target.value)}
                                    value={location}
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
                                <h3 className="text-2xl font-bold">{room.name}</h3>
                            </div>
                            <div className="mb-3 flex flex-col">
                                <label className="text-sm">Tipe : </label>
                                <label className="">{room.type}</label>
                            </div>
                            <div className="mb-3 flex flex-col">
                                <label className="text-sm">Lokasi : </label>
                                <label className="">{room.location}</label>
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
                                    Edit Ruangan
                                </button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default RoomDetail;