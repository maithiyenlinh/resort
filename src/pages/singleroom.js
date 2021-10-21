import React, {useState, useContext} from "react";
import {RoomContext} from "../context";
import Banner from '../components/banner';
import {Link, useParams} from 'react-router-dom';
import StyledHero from '../components/styleHero';
import defaultImg from '../images/room-1.jpeg'

const SingleRoom = () => {
    const {getRoom} = useContext(RoomContext);
    const [params, setParams] = useState(useParams());
    const room = getRoom(params.slug);
    if (!room) {
        return (
            <div className="error">
                <h3>no such room could be found...</h3>
                <Link to="/room" className="btn-primary" >back to rooms</Link>
            </div>
        )
    }
    const [mainImg, ...images] = room.images;
    return (
        <>
            <StyledHero img={mainImg || defaultImg}>
                <Banner title={`${room.name} room`} >
                    <Link to="/rooms" className="btn-primary" >back to rooms</Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {images.map((item, index) => <img key={index} src={item} alt={room.name} />)}
                </div>
                <RoomInfo room={room} />
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {room.extras.map((item, index) => <li key={index}>- {item}</li>)}
                </ul>
            </section>
        </>
    )
}

const RoomInfo = ({room}) => {
    return (
        <div className="single-room-info">
            <article className="desc">
                <h3>details</h3>
                <p>{room.description}</p>
            </article>
            <article className="info">
                <h3>info</h3>
                <h6>price : ${room.price}</h6>
                <h6>size : {room.size} SQFT</h6>
                <h6>max capacity : {room.capacity} {room.capacity > 1 ? "people" : "person"}</h6>
                <h6>{room.pets ? "" : "no "}pets allowed</h6>
                <h6>{room.breakfast && "free breakfast included"}</h6>
            </article>
        </div>
    )
}


export default SingleRoom;