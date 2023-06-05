const RoomOption=({room})=>{
    console.log(room)
    return(
        <>
            <option key={room.name} value={JSON.stringify(room._id)} className="text-sm text-blue bg-white hover:bg-blue">
                {room.name}
            </option>
        </>
    )
}

export default RoomOption;