import React, { useRef, useEffect } from 'react';
import './SideNav.css';
import logo from './../assets/blue.png';
import SideNavLinks from './SideNavLinks/SideNavLinks';

const SideNav = props => {
    const AragonLeft = useRef();
    const MenuIcon = useRef();
    useEffect(() => {
        props.elmRef.elmRef = AragonLeft.current;
    }, [])
    return (
        <div className='AragonLeft' ref={AragonLeft}>
            <div className='aragonSideNav'>
                <div className='aragonhead'>
                    <div className='AragonHide'>
                        <img src={logo} alt='' />
                    </div>
                    <i className='argonMenu' ref={MenuIcon}
                        onClick={() => { props.clicked(MenuIcon.current.childNodes) }}>
                        <span className='ArgonhalfIcon'></span>
                        <span></span>
                        <span className='ArgonhalfIcon'></span>
                    </i>
                </div>
                <SideNavLinks />
            </div>
        </div>
    )
}

export default SideNav;