import React, {useContext} from 'react';
import Title from './title';
import { RoomContext } from '../context';
import Loading from './loading';
import Room from './room';
const FeaturedRoom = () => {
    const {loading, featuredRooms : rooms} = useContext(RoomContext);
    return (
        <section className="featured-rooms">
            <Title title="featured rooms" />
            <div className="featured-rooms-center">
                {loading ? <Loading /> : rooms.map(room => <Room key={room.id} room={room} />)}
            </div>
        </section>
    )
}

export default FeaturedRoom;
