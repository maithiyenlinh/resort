import React, {useContext} from 'react';
import RoomFilter from './roomFilter';
import RoomList from './roomList';
import {RoomContext} from '../context';
import Loading from './loading';

function RoomContainer() {
    const {loading, sortedRooms, rooms} = useContext(RoomContext);
    if (loading) {
        return <Loading />
    }
    return (
        <>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </>
    )
}

export default RoomContainer;