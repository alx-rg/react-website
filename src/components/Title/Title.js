
import './Title.css'
import {NavLink} from 'react-router-dom'
import RandomSpace from '../RandomSpace/RandomSpace'

const Title = () => {
  return (
    <div className="Title">
      <header>
        <div className='Header-title'>
          <h1>
          <div id="title1">SF Privately Owned Public Open Spaces</div>
          <div id="title2"> SFPOPS</div>
          </h1>
        </div>
        <div className='Header-container'>
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/">List</NavLink>
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/about">About</NavLink>
          <RandomSpace />
        </div>
      </header>
    </div>
  )
}

export default Title
