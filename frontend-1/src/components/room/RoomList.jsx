import React, { useState } from "react";
import RoomDetail from "./RoomDetail";

const RoomRow = ({ room, index }) => {
    const [detail, setDetail] = useState(false)
    const viewDetail =(state)=>{
        setDetail(state)
    }

    return (
        <>
            {detail && <RoomDetail room={room} handleClose={viewDetail} />}
            <tr key={index} className="">
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{index+1}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{room.name}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{room.type}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{room.location}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">
                    <p 
                        className="cursor-pointer text-orange hover:text-yellow-300"
                        onClick={(e)=>{viewDetail(true)}}
                    >Open</p>
                </td>
            </tr>
        </>
    );
}

export default RoomRow;