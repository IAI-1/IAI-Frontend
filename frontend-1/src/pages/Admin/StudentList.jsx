import { useState } from "react";
import useFetch from "../../hooks/useFetch";

import { useStudentContext } from "../../hooks/student/useStudentContext";
import { useDisplayContext } from "../../hooks/useDisplayContext";

import Searchbar from "../../components/public/searchbar";
import Pagination from "react-js-pagination";
import ModalAdd from "../../components/studentList/modalAdd";
import StudentRow from "../../components/studentList/StudentRow";
import { useSearch } from '../../hooks/useSearch'

const StudentList = () => {
    const { students, dispatch } = useStudentContext();
    const { notify, isPending, error, setLoading, setError } = useDisplayContext();
    const url = 'http://localhost:5000/students';
    useFetch({ url, dispatch, setError, setLoading, type: 'GET_STUDENT' });

    const [add, setAdd] = useState(false)
    const setAddModal = (state) => {
        setAdd(state)
    }
    console.log(students)

    const { searchResult, getSearchTerm, inputEl, searchTerm } = useSearch(students);
    const studList = searchTerm < 1 ? students : searchResult;

    return (
        <>
            {add && <ModalAdd setAdd={setAdd} setLoading={setLoading} setError={setError} />}
            <div className="justify-center items-center py-20 lg:py-10 px-3 lg:px-28 h-full" >
                <div className="mb-12">
                    <h1 className="text-4xl font-bold">Data Mahasiswa</h1>
                </div>
                <div className="justify-between sm:justify-between flex-row sm:flex" >
                    <button
                        type="button"
                        className="button p-3 mt-2 mb-10 sm:mb-12 mr-7 relative bg-orange text-white font-bold"
                        onClick={(e) => setAddModal(true)}
                    > Tambah Mahasiswa + </button>
                    <Searchbar
                        term={searchTerm}
                        getSearchTerm={getSearchTerm}
                        inputEl={inputEl}
                    />
                </div>

                <table className="shadow-2xl border-2 border-dark-blue-200 text-center w-full" >
                    <thead className="bg-dark-blue text-white" >
                        <tr >
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Nama </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > NIM </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Prodi </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Fakultas </th>
                            <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Act </th>
                        </tr>
                    </thead>
                    <tbody>
                        {studList && studList.map((student, index) => (
                            <StudentRow student={student} index={index} setLoading={setLoading} setError={setError} />
                        ))}
                    </tbody>
                </table>
                <div className="flex-row">

                </div>

            </div>
        </>
    );
}

export default StudentList;