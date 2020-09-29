import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.less';

const Header = () => {
    return (
        <div className={styles.container}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/lesson'>Lessons</Link>
            </li>
        </div>
    )
};
export default Header
