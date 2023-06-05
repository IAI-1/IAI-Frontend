import React, { useState } from "react";
import Searchbar from "../../components/public/searchbar"
import AddRoom from "../../components/room/AddRoom";
import RoomRow from "../../components/room/RoomList";
import useFetch from "../../hooks/useFetch";
import { useRoomContext } from '../../hooks/room/useRoomContext'
import { useDisplayContext } from "../../hooks/useDisplayContext";
import { useSearch } from "../../hooks/useSearch";

const RoomList = () => {
  // const rooms = [
  //   { nama: 'Ruang A', tipe: 'Tipe A', lokasi: 'Gedung A' },
  //   { nama: 'Ruang B', tipe: 'Tipe B', lokasi: 'Gedung A' },
  //   { nama: 'Ruang C', tipe: 'Tipe A', lokasi: 'Gedung B' },
  // ];
  const { rooms, dispatch } = useRoomContext()
  const { notify, isPending, error, setLoading, setError } = useDisplayContext();
  const url = 'http://localhost:5002/campus/rooms';
  useFetch({ url, dispatch, setError, setLoading, type: 'GET_ROOM' });
  console.log(rooms)

  const [addModal, setAddModal] = useState(false)
  const viewAdd = (state) => {
    setAddModal(state)
  }

  const { searchResult, getSearchTerm, inputEl, searchTerm } = useSearch(rooms);
  const roomList = searchTerm < 1 ? rooms : searchResult;

  return (
    <>
      {addModal && <AddRoom setAdd={viewAdd} setLoading={setLoading} setError={setError} />}
      <div className="justify-center items-center py-20 lg:py-10 px-3 lg:px-28 h-full" >
        <div className="mb-12">
          <h1 className="text-4xl font-bold">Data Ruangan</h1>
        </div>
        <div className="justify-between sm:justify-between flex-row sm:flex" >
          <button
            type="button"
            className="button p-3 mt-2 mb-10 sm:mb-12 mr-7 relative bg-orange text-white font-bold"
            onClick={(e) => (viewAdd(true))}
          > Tambah Ruangan + </button>
          <Searchbar
            term={searchTerm}
            getSearchTerm={getSearchTerm}
            inputEl={inputEl}
          />
        </div>

        <table className="shadow-2xl border-2 border-dark-blue-200 text-center w-full" >
          <thead className="bg-dark-blue text-white" >
            <tr >
              <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > No </th>
              <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Nama </th>
              <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Tipe </th>
              <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Lokasi </th>
              <th className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide" > Act </th>
            </tr>
          </thead>
          <tbody>
            {roomList && roomList.map((room, index) => (
              <RoomRow room={room} index={index} setLoading={setLoading} setError={setError} />
            ))}
          </tbody>
        </table>
        <div className="flex-row">

        </div>

      </div>
    </>
  );
}

export default RoomList;