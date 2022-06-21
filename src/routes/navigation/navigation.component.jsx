import React, { Fragment } from 'react'
import './navigation.styles.scss'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { Link, Outlet } from 'react-router-dom'
function Navigation() {
  return (
    <>
        <div className='navigation'>
            <Link className='logo-container' to ="/" >
                <CrwnLogo className='logo'/>
                </Link>
                <div className="nav-links-container">
                <Link className='nav-link' to ="/
                ">HOME</Link>
                    <Link className='nav-link' to ="/shop">SHOP</Link>
                    <Link className='nav-link' to ="/signin">SIGNIN</Link>
                    </div>
        </div>
        <Outlet/>
    </>
  )
}

export default Navigation