import React, { useState } from "react"
import RentDetail from "./RentDetail"

const RentList = ({rent, index}) => {
    const [detail, setDetail] = useState(false)
    const viewDetail =(state)=>{
        setDetail(state)
    }
        
    return (
        <>
            {detail && <RentDetail rent={rent} selfPopUp={viewDetail} />}
            <tr key={index} className="">
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rent.kode}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rent.judul}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rent.peminjam}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rent.deadline}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rent.status}</td>
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

export default RentList;