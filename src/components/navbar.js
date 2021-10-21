import React, {useState, useRef, useEffect} from 'react';
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const refContainer = useRef(null);
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleClickOutside = e => {
        if (refContainer.current && !refContainer.current.contains(e.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }
    }, [isOpen]);

    return (
        <nav ref={refContainer} className="navbar">
            <div className="nav-center">
                <Navheader handleToggle={handleToggle} />
                <NavContent isOpen={isOpen} />
            </div>
        </nav>
    )
};

const Navheader = ({handleToggle}) => {
    return (
        <div className="nav-header">
            <Link to="/" >
                <img src={logo} alt="Beach Resort" />
            </Link>
            <button type="button" className="nav-btn" onClick={handleToggle}>
                <FaAlignRight className="nav-icon" />
            </button>
        </div>
    );
}

const NavContent = ({isOpen}) => {
    return (
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/rooms">Rooms</Link>
            </li>
        </ul>
    );
}

export default Navbar;