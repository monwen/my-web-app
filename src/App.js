import logo from './logo.svg';
import Home from './components/home';
import Projects  from './projects';
import'./css/styles.css'
import NavBar from './components/navbar';
import Icons from './components/icons';
import Playground from './components/playground';
import { Component } from 'react';
import { Route, Routes} from 'react-router-dom';
import Split from './components/split';
import About from './components/about';
import Portfolio from './components/portfolio';
import Blog from './components/blog';
import Contact from './components/contact';

function App() {
  return (
    <div >
      {/* <Playground /> */}
      {/* <Icons /> */}
      {/* <NavBar />   */}
      {/* <Home /> */}
      
      <div className="content">
        <header>
          <NavBar nav="nav" navIcon="nav__icon" navList="nav__list" navItem="nav__item" hasIcon={true}/>
        </header>
        
        <Routes>
          {/* <Route path="/home" element={<Home />}/> */}
          <Route path="/about" element={<About />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/" exact element={<Home />}/>
        </Routes>

        <footer>
          <NavBar nav="nav__footer" navIcon="nav__icon__footer" navList="nav__list__footer" navItem="nav__item__footer" hasIcon={false}/>
        </footer>
      </div>
     
    </div>
  );
}

export default App;
