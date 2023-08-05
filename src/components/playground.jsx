import React, { Component } from 'react';
import NavBar from './navbar';
import Split from './split';
import '../css/styles.css';
const Playground = () => {
    return (  
        <div>
            <header>
             <NavBar nav="nav" navIcon="nav__icon" navList="nav__list" navItem="nav__item" hasIcon={true}/>
            </header>
             <section>
                <Split/>
             </section>
             <footer>
                <NavBar nav="nav__footer" navIcon="nav__icon__footer" navList="nav__list__footer" navItem="nav__item__footer" hasIcon={false}/>
             </footer>
        </div>
    );
}
 
export default Playground;