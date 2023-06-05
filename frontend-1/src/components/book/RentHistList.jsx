import React, { useState } from "react"

const RentList = ({rent, index}) => {        
    return (
        <>
            <tr key={index} className="">
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rent.book.title}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rent.user.nama}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{rent.borrowedAt}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">Belum dikembalikan</td>
            </tr>
        </>
    );
}

export default RentList;