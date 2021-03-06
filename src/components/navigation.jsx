import Logout from './Logout';
import { Link } from "react-router-dom";
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <img src='img/logo.png' style={{width:'50px',height:'50px',float:'left' }} />
         <a className='navbar-brand page-scroll' href='#page-top'>

            first step
          </a>  {' '}
        </div>
        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            {/* <li>
              <a href='#portfolio' className='page-scroll'>
              our partners
              </a>
            </li> */}
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                feedback
              </a>
            </li> */}
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
            
            <li>
            {/* <Link to="/profile">Profile</Link>  */}
              {/* <a style={{ color: "#608CFD", fontWeight: "bold" ,}} href='#contact' className='page-scroll'>
               
              </a> */}
              <Logout/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
