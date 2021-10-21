import React from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import {Link} from "react-router-dom";
import Service from "../components/service"
import data from '../data';
import FeaturedRoom from "../components/featuredroom";

const minimumPrice = (kind, data) => {
    const rooms = data.filter(item => item.fields.name.indexOf(kind) !== -1)
    return (
        rooms.reduce((total, item) => {
            const price = item.fields.price;
            if (price <= total) {
                total = price;
            }
            return total;
        }, rooms[0].fields.price) - 1
    )
}
const Home = () => {
    const kind = 'deluxe';
    const minPrice = minimumPrice(kind, data);
    const text = `${kind} rooms starting at $${minPrice}`;
    return (
        <>
            <Hero>
                <Banner 
                    title="luxurious rooms"
                    subtitle={text}
                >
                    <Link 
                        to="/rooms" 
                        className="btn-primary"
                    >
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Service />
            <FeaturedRoom />
        </>
    );
}



export default Home;