import React, {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

function RoomFilter({rooms}) {
    const value = useContext(RoomContext);
    const {handleChange, ...context} = value;
    let types = ['all', ...getUnique(rooms, 'type')];
    let people = getUnique(rooms, 'capacity');

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <Selected 
                    value={context.type}
                    kind='type'
                    label='room type'
                    dataRender={types}
                    onChange={handleChange}
                />
                {/* end select tyoe */}
                {/* guest */}
                <Selected 
                    value={context.capacity}
                    kind='capacity'
                    label='guests'
                    dataRender={people}
                    onChange={handleChange}
                />
                {/* end guest */}
                {/* room price */}
                <Ranged 
                    context={context}
                    onChange={handleChange}
                />
                {/* end room price */}
                {/* size */}
                <ChooseSize 
                    context={context}
                    onChange={handleChange}
                />
                {/* end of size */}
                {/* extras */}
                <div className="form-group">
                    <Checkbox 
                        context={context.breakfast}
                        kind='breakfast'
                        onChange={handleChange}
                    
                    />
                    <Checkbox 
                        value={context.pets}
                        kind='pets'
                        onChange={handleChange}
                    />
                </div>
                {/* end of extras */}
            </form>
        </section>
    )
}

const Selected = ({value, kind, label, dataRender, onChange}) => {
    return (
        <div className="form-group">
            <label htmlFor={kind}>{label}</label>
            <select name={kind} id={kind} value={value} className="form-control" onChange={onChange}>
                {dataRender.map((item, index) => <option value={item} key={index}>{item}</option>)}
            </select>
        </div>
    )
}

const Ranged = ({context, onChange}) => {
    return (
        <div className="form-group">
            <label htmlFor="price">room price ${context.price}</label>
            <input type="range" name="price" id="price" className="form-control" 
                    value={context.price} min={context.minPrice} max={context.maxPrice} 
                    onChange={onChange}>
            </input>
        </div>
    )
}

const ChooseSize = ({context, onChange}) => {
    return (
    <div className="form-group">
        <label htmlFor="size">room size</label>
        <div className="size-inputs">
            <input type="number" name="minSize" id="size" value={context.minSize} onChange={onChange} className="size-input" />
            <input type="number" name="maxSize" id="size" value={context.maxSize} onChange={onChange} className="size-input" />
        </div>
    </div>
    )
}

const Checkbox = ({value, kind, onChange}) => {
    return (
        <div className="single-extra">
            <input type="checkbox" name={kind} id={kind} checked={value} onChange={onChange} />
            <label htmlFor={kind}>{kind}</label>
        </div>
    )
}

export default RoomFilter;
