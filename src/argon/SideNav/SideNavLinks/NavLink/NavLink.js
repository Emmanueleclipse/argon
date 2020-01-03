import React, { useRef } from 'react';
import './NavLink.css';

const NavLink = props => {
    const SideNavLink = useRef();
    const rightArrow = useRef();
    let check = {
        check: true,
        id: Math.random()
    }
    let checking = () => {
        if (props.clicked !== undefined) {
            props.clicked(SideNavLink.current, rightArrow.current, check);
        }
    };
    return (
        <div>
            <div className='SideNavLinks' ref={SideNavLink}>
                <div className={'AragonFlex ' + props.className}
                    onClick={checking}>
                    <i className='material-icons' style={{ color: props.iconColor }}>{props.icon}</i>
                    <span className='hideText'>
                        {props.title}
                    </span>
                    {props.clicked !== undefined ? <span className='material-icons ml-a arrows' ref={rightArrow}>keyboard_arrow_right</span> : null}
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default NavLink;