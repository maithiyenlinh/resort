import React, {useState, useEffect} from 'react'
import items from './data';
const RoomContext = React.createContext();

const RoomProvider = ({children}) => {
    const [value, setValue] = useState({
        rooms: [], 
        sortedRooms: [], 
        featuredRooms: [], 
        loading: true, 
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        breakfast: false,
        pets: false
    });  

    const [selected, setSelected] = useState('');

    useEffect(()=> {
        let rooms = formatData(items);
        let featuredRooms = rooms.filter(room => room.featured);
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
        setValue(prevValue => ({
            ...prevValue,
            rooms, 
            sortedRooms: rooms, 
            featuredRooms, 
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        }));
    }, []);

    const formatData = items => {
        return items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            return {...item.fields, images, id};
        })
    };

    const getRoom = slug => {
        const rooms = [...value.rooms]
        return rooms.find(room => room.slug === slug)
    }

    const handleChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setValue(prevValue => ({...prevValue, [name]: value}));
        setSelected(value);
    }

    useEffect(() => {
        if (selected !== '') {
            filterRooms(value);
        }
    }, [selected])   
    
    const filterRooms = (value) => {
        let tempRooms = [...value.rooms];   
        if(value.type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === value.type);
        }
        if(parseInt(value.capacity) !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= parseInt(value.capacity));
        }
        tempRooms = tempRooms.filter(room => room.price <= parseInt(value.price));
        tempRooms = tempRooms.filter(room => room.size >= parseInt(value.minSize) && room.size <= parseInt(value.maxSize));
        if (value.breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast)
        }
        if (value.pets) {
            tempRooms = tempRooms.filter(room => room.pets)
        }

        setValue(prevValue => ({
            ...prevValue, 
            sortedRooms: tempRooms
        }));

    }

    return (
        <RoomContext.Provider value={{...value, getRoom, handleChange}} >
            {children}
        </RoomContext.Provider>
    );
}

const RoomConsumer = RoomContext.Consumer;

export {RoomContext, RoomProvider, RoomConsumer};
