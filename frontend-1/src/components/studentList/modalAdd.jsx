import { useState } from "react"
import { useHandleStudentAdd } from "../../hooks/student/useHandleStudentAdd"
import { useStudentContext } from "../../hooks/student/useStudentContext"

const ModalAdd = ({setAdd, setLoading, setError}) => {
    const {dispatch} = useStudentContext();

    const [nama, setNama] = useState("")
    const [nim, setNIM] = useState("")
    const [prodi, setProdi] = useState("")
    const [fakultas, setFakultas] = useState("")
    const [email, setEmail] = useState("");

    const handleClose =(state)=>{
        setAdd(state)
    }
    const url = 'http://localhost:5000/students/';

    const newStudent = {nama, nim, prodi, fakultas, email}
    const {handeAdd:handleSubmit} = useHandleStudentAdd({url:'http://localhost:5000/students/', type:'ADD_STUDENT', dispatch, data:newStudent, setLoading, setError, closeAddPopup: handleClose})

    return (
        <>
            <div className="overlay z-20"></div>
            <div className="container w-fit mx-auto absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <div className="w-screen max-w-xl mx-8 bg-white shadow-xl rounded-3xl px-8 pt-6 pb-8 mb-4">
                    <div className="flex justify-end">
                        <button className="" onClick={(e)=>handleClose(false)} >x</button>
                    </div>
                    <h3 className="text-center text-2xl font -bold mb-12">Tambah Mahasiswa</h3>
                    <div className="mb-4">
                        {nama != "" && <label className="">Nama : </label>}
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
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
                    <div className="mb-4 mt-4">
                        {email != "" && <label className="">Email : </label>}
                        <input
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email mahasiswa"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
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

export default ModalAdd;