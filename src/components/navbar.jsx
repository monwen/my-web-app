import React, { Component } from 'react';
import '../css/styles.css';
import Icons from './icons';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    
    render() { 
        const {nav, navIcon, navItem, navList, hasIcon} = this.props;


        const icon_id = 0;
        return ( 
            
                    <nav className={nav}>
                        <div className={navIcon}>
                            {hasIcon && <Icons  icon_id={icon_id}/>}
                        </div>    
                        <ul className={`list ${navList}`}>
                            <li className={navItem}>
                                <Link className="link" to="/">Home</Link>
                            </li>
                            <li className={navItem}>
                                <Link className="link" to="/about">About</Link>
                            </li>
                            <li className={navItem}>
                                <Link className="link" to="/portfolio">Portfolio</Link>
                            </li>
                            <li className={navItem}>
                                <Link className="link" to="/blog">Blog</Link>
                            </li>
                            <li className={navItem}>
                                <Link className="link" to="/contact">contact</Link>
                            </li>
                        </ul>
                    </nav>
        );
    }
}
 
export default NavBar;