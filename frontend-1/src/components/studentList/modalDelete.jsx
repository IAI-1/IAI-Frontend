const ModalDelete = ({setPopUp, handleRemove}) => {
    return (
        <>
            <div className="overlay z-50"></div>
            <div className="mx-auto absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-700">
                <div className="w-max max-w-xl mx-8 bg-white shadow-xl rounded-3xl px-8 pt-6 pb-8 mb-4">
                    <h3 className="font-semibold">Hapus Data Mahasiswa?</h3>
                    <div className="flex justify-center mt-4">
                        <div className="inline-block mr-3">
                            <button
                                className="bg-slate-300 hover:bg-slate-100 mr-3 text-white font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline"
                                onClick={(e)=>setPopUp(false)}>
                                Tidak
                            </button>
                        </div>
                        <div className="inline-block mr-3">
                            <button
                            onClick={handleRemove}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus :outline-none focus:shadow-outline">
                                Iya
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalDelete;