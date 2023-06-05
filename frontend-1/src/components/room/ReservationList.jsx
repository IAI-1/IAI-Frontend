import React, { useState } from "react";
import RsvDetail from "./RsvDetail";

const ReservationList = ({rsv, index}) => {
    const [detail, setDetail] = useState(false)
    const viewDetail =(state)=>{
        setDetail(state)
    }

    return (
        <>
            {detail && <RsvDetail rsv={rsv} selfPopUp={viewDetail} />}
            <tr key={index} className="">
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{index+1}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rsv.room.name}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rsv.room.location}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rsv.user.nama}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rsv.borrowedAt}</td>
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

export default ReservationList;