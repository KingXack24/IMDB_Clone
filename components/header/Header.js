

import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
// import IMDB from "../../assets/imdb.pn"

const Header = () => {
  return (
    <div className='header'>
    <div className='headerLeft'>

    <Link to="/"><img className="header__icon" src="https://en.wikipedia.org/wiki/IMDb#/media/File:IMDB_Logo_2016.svg" /></Link>
    {/* <Link to="/"><section className="header__icon">  <img src={IMDB}/></section> </Link> */}
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
    

    </div>
    
  </div>
  )
}

export default Header