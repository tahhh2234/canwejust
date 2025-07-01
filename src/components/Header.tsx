import '../scss/App.scss'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";

function Header() {
    //dropdown state
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    //close dropdown when clicking outside
    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: { target: unknown; }) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="header-container">
            <div className="header">
                <div className="header-title">
                    <a href="/" className="title">canwejust</a>
                </div>

                <div className="header-links">
                    <a href="/" className="links-menu">Home</a>

                    <div className="dropdown" ref={dropdownRef}>
                        <div className="dropdown-toggle" onClick={toggleDropdown}>
                            just <RiArrowDropDownLine />
                        </div>
                        <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                            <a href="/watch" className="dropdown-list">Watch</a>
                            <a href="/listen" className="dropdown-list">Listen</a>
                            <a href="/eat" className="dropdown-list">Eat</a>
                            <a href="/travel" className="dropdown-list">Travel</a>
                            <a href="/play" className="dropdown-list">Play</a>
                        </div>
                    </div>

                    <a href="/about" className="links-menu">About me</a>
                </div>
            </div>
        </div>
    )
}

export default Header
