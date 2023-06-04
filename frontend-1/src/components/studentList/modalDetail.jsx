import { useState } from "react"
import ModalDelete from "./modalDelete"
import { Link } from "react-router-dom"
import { useHandleStudentUpdate } from "../../hooks/student/useHandleStudentEdit"
import { useStudentContext } from "../../hooks/student/useStudentContext"

const ModalDetail = ({ student, setDetail, setLoading, setError }) => {
    const [editMode, setEditMode] = useState(false)
    const setEditView = (state) => {
        setEditMode(state)
    }

    const [deleteModal, setDeleteModal] = useState(false)
    const setDeleteView = (state) => {
        setDeleteModal(state)
    }

    const [account, setAccount] = useState(false)

    const [nama, setNama] = useState(student.nama)
    const [nim, setNIM] = useState(student.nim)
    const [prodi, setProdi] = useState(student.prodi)
    const [fakultas, setFakultas] = useState(student.fakultas)
    const [email, setEmail] = useState(student.email)

    const handleClose = (state) => {
        setDetail(state)
    }

    const {dispatch} = useStudentContext();

    const updated = {nama, nim, prodi, fakultas, email}
    const {handleUpdate:handleEdit}=useHandleStudentUpdate({url: 'http://localhost:5000/students/', type: 'EDIT_STUDENT', dispatch, data: student, updatedData: updated, setLoading, setError, closeDetailPopup: handleClose})

    return (
        <>
            {deleteModal && <ModalDelete setPopUp={setDeleteView} />}
            <div className="overlay z-20"></div>
            <div className="container w-fit mx-auto absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <div className="flex flex-col justify-start text-left w-screen max-w-xl mx-8 bg-white shadow-xl rounded-3xl px-8 pt-6 pb-8 mb-4">
                    <div className="flex justify-end">
                        <button className="" onClick={(e) => handleClose(false)} >x</button>
                    </div>
                    <h3 className="text-2xl font -bold mb-12">Detail Data Mahasiswa</h3>
                    {editMode ?
                        <>
                            <div className="mb-4">
                                {nama != "" && <label className="">Nama : </label>}
                                <input
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nama"
                                    type="text"
                                    placeholder="Nama mahasiswa"
                                    onChange={(e) => setNama(e.target.value)}
                                    value={nama}
                                />
                            </div>
                            <div className="mb-4">
                                {nim != "" && <label className="">NIM : </label>}
                                <input
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nim"
                                    type="text"
                                    placeholder="NIM mahasiswa"
                                    onChange={(e) => setNIM(e.target.value)}
                                    value={nim}
                                />
                            </div>
                            <div className="mb-4">
                                {prodi != "" && <label className="">Prodi : </label>}
                                <input
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="prodi"
                                    type="text"
                                    placeholder="Prodi mahasiswa"
                                    onChange={(e) => setProdi(e.target.value)}
                                    value={prodi}
                                />
                            </div>
                            <div className="mb-4">
                                {fakultas != "" && <label className="">Fakultas : </label>}
                                <input
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="fakultas"
                                    type="text"
                                    placeholder="Fakultas mahasiswa"
                                    onChange={(e) => setFakultas(e.target.value)}
                                    value={fakultas}
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
                            <div className="mb-4">
                                <label className="">Nama : </label>
                                <label className="">{student.nama}</label>
                            </div>
                            <div className="mb-4">
                                <label className="">NIM : </label>
                                <label className="">{student.nim}</label>
                            </div>
                            <div className="mb-4">
                                <label className="">Prodi : </label>
                                <label className="">{student.prodi}</label>
                            </div>
                            <div className="mb-4">
                                <label className="">Fakultas : </label>
                                <label className="">{student.fakultas}</label>
                            </div>

                            <div className="mb-4 mt-6">
                                <label className="">Akun : </label>
                                {email !== "" ?
                                    <label className="">{email}</label>
                                    :
                                    <button
                                        className="p-2 bg-blue-600 text-white"
                                    >
                                        <Link to="/admin/regist">Buat Akun</Link>
                                    </button>
                                }

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
                                    onClick={(e) => setEditView(true)}
                                >
                                    Edit
                                </button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default ModalDetail;