import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {FaBars } from 'react-icons/fa';
import { social } from '../assets/data';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    }

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
          linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
          linksContainerRef.current.style.height = '0px';
        }
      }, [showLinks]);

    return (
        <nav className='navbar'>
          <div className='nav-center'>
          <div className='nav-header'>
          <img src='' className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
            <div className='links-container' ref={linksContainerRef}>
            <ul className='links' ref={linksRef}>
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/AboutUs">About us</Link>
              </li>
              <li>
              <Link to="/Exercises">ExerciseList</Link>
              </li>
              <li>
              <Link to="/recipes">RecipesList</Link>
              </li>
              <li>
              <Link to="/groceryList">groceryList</Link>
              </li>
            </ul>
            </div>
            <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
          </div>
        </nav>
  )};

export default Navbar




