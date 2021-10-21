import React from 'react';
import Title from './title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";

const services = [
    {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem beatae dolore expedita aperiam voluptatibus architecto vero alias est pariatur nostrum?"
    },
    {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem beatae dolore expedita aperiam voluptatibus architecto vero alias est pariatur nostrum?"
    },
    {
        icon: <FaShuttleVan />,
        title: "Free Shuttles",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem beatae dolore expedita aperiam voluptatibus architecto vero alias est pariatur nostrum?"
    },
    {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem beatae dolore expedita aperiam voluptatibus architecto vero alias est pariatur nostrum?"
    }
]

const Service = () => {
    
    return (
        <section className="services">
            <Title title="services" />
            <div className="services-center">
                {services.map((item, index) => <ItemService key={index} item={item} />)}
            </div>
        </section>
    )
}

const ItemService = ({item}) => {
    return (
        <article className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
        </article>
    )
}

export default Service;