import React, { useState } from "react";
import { useAuthContext } from "../../hooks/auth/useAuthContext";

const StudentProfile = () => {
    const {user} = useAuthContext();

    const [imgProfile, setImgProfile] = useState("")

    const [name, setName] = useState(user.user.nama)
    const [nim, setNim] = useState(user.user.nim)
    const [prodi, setProdi] = useState(user.user.prodi)
    const [fakultas, setFakultas] = useState(user.user.fakultas)
    const [email, setEmail] = useState(user.user.email)

    const [password, setPassword] = useState("")
    const [newPass, setNewPass] = useState("")
    const [confirm, setConfirm] = useState("")

    const [manage, setManage] = useState(false);
    const manageView = (state) => {
        setManage(state)
    }

    return (
        <>
            <section className=' body-font w-screen my-8 text-black flex'>
                <div className='container px-5 mx-auto flex flex-col'>
                    {/* Judul Aplikasi */}
                    <div className='mb-5'>
                        <p className='title-font font-medium text-4xl mb-4'>
                            Profil Akun Mahasiswa
                        </p>
                    </div>
                    <div className="w-full flex flex-row justify-start gap-6">
                        <div className='bg-gray-200 rounded-lg py-8 px-8 pr-36 flex flex-col'>
                            <div className="mt-3">
                                <img
                                    src={imgProfile}
                                    alt={name}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                            </div>
                            <div className="mt-3">
                                <p>Nama :</p>
                                <p>{name}</p>
                            </div>
                            <div className="mt-3">
                                <p>NIM :</p>
                                <p>{nim}</p>
                            </div>
                            <div className="mt-3">
                                <p>Prodi :</p>
                                <p>{prodi}</p>
                            </div>
                            <div className="mt-3">
                                <p>Fakultas :</p>
                                <p>{fakultas}</p>
                            </div>
                            <div className="mt-12">
                                <button>
                                    <p
                                        className="bg-blue-700 text-white px-4 py-2"
                                        onClick={(e) => { manageView(true) }}
                                    >Manage Akun</p>
                                </button>
                            </div>
                        </div>
                        {manage &&
                            <div>
                                <div className='bg-gray-200 rounded-lg py-8 px-8 flex flex-col'>
                                    <div className="mt-3 mb-6">
                                        <p>Email :</p>
                                        <p>{email}</p>
                                    </div>
                                    <div className="mt-3">
                                        <p>Konfigurasi Password :</p>
                                    </div>
                                    <div className="mt-3 mb-6">
                                        {password != "" && <label className="">Old Password : </label>}
                                        <input
                                            required
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            placeholder="Old Password..."
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        {newPass != "" && <label className="">New Password : </label>}
                                        <input
                                            required
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="newPass"
                                            type="password"
                                            placeholder="New Password"
                                            onChange={(e) => setNewPass(e.target.value)}
                                            value={newPass}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        {confirm != "" && <label className="">Konfirmasi Password : </label>}
                                        <input
                                            required
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="confirm"
                                            type="password"
                                            placeholder="Konfirmasi Password"
                                            onChange={(e) => setConfirm(e.target.value)}
                                            value={confirm}
                                        />
                                    </div>
                                    <div className="mt-12 flex flex-row justify-end w-full gap-4">
                                        <button>
                                            <p
                                                className="bg-white hover:bg-red-700 hover:text-white text-red-700 px-4 py-2"
                                                onClick={(e) => { manageView(false) }}
                                            >Batal</p>
                                        </button>
                                        <button>
                                            <p
                                                className="bg-orange hover:bg-blue-700 text-white px-4 py-2"
                                            >Simpan</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default StudentProfile;