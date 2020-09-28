import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/lesson'>Lessons</Link>
            </li>
        </nav>
    )
};
export default Header
