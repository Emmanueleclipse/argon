import React, { Component } from 'react';
import './SideNavLinks.css'
import NavLink from './NavLink/NavLink';
import {Link} from 'react-router-dom';

class SideNavLinks extends Component {
    render() {
        let activeRoute = {
            check: true,
            id: ''
        }
        const NavLinkHandler = (elm, arrow, check) => {
            let elms = document.getElementsByClassName('SideNavLinks');
            let arrows = document.getElementsByClassName('arrows');
            if (activeRoute.id !== check.id) {
                check.check = true;
            }
            for (let i = 0; i < arrows.length; i++) {
                elms[i].style.maxHeight = '45px';
                arrows[i].style.transform = 'rotate(0deg)';
                activeRoute = check;
            }
            if (check.check) {
                elm.style.maxHeight = '300px';
                arrow.style.transform = 'rotate(90deg)';
            }
            else {
                elm.style.maxHeight = '45px';
                arrow.style.transform = 'rotate(0deg)';
            }
            check.check = !check.check;
        }
        return (
            <React.Fragment>
                <NavLink title='Dashboards' icon='home' iconColor='#5E72E4' clicked={NavLinkHandler} className='blueBlur'>
                    <Link to="/">Dashboard</Link>
                    <Link to="/">Alternative</Link>
                </NavLink>
                <NavLink title='Examples' icon='file_copy' iconColor='orange' clicked={NavLinkHandler}>
                    <Link to="/">Pricing</Link>
                    <Link to="/">Login</Link>
                    <Link to="/">Register</Link>
                    <Link to="/">Lock</Link>
                    <Link to="/">Timeline</Link>
                    <Link to="/">Profile</Link>
                </NavLink>
                <NavLink title='Components' icon='dashboard' clicked={NavLinkHandler} iconColor='#11cdef'>
                    <Link to="/">Buttons</Link>
                    <Link to="/">Cards</Link>
                    <Link to="/">Grid</Link>
                    <Link to="/">Notification</Link>
                    <Link to="/">Icons</Link>
                    <Link to="/">Typography</Link>
                    <Link to="/">Multi Level</Link>
                </NavLink>
                <NavLink title='Forms' icon='description' clicked={NavLinkHandler} iconColor='#f3a4b5'>
                    <Link to="/">Elements</Link>
                    <Link to="/">Components</Link>
                    <Link to="/">Validation</Link>
                </NavLink>
                <NavLink title='Tables' icon='format_align_left' clicked={NavLinkHandler}>
                    <Link to="/">Tables</Link>
                    <Link to="/">Sortable</Link>
                    <Link to="/">Datatables</Link>
                </NavLink>
                <NavLink title='Maps' icon='map' iconColor='#5e72e4' clicked={NavLinkHandler}>
                    <Link to="/">Google</Link>
                    <Link to="/">Vector</Link>
                </NavLink>
                <NavLink title='Widgets' icon='widgets' iconColor='#2dce89' />
                <NavLink title='Charts' icon='insert_chart' iconColor='#11cdef' />
                <NavLink title='Calender' icon='today' iconColor='#f5365c' />
                <div className='Argonborder AragonHide'>
                    DOCUMENTATION
            </div>
                <NavLink title='Getting Started' icon='launch' />
                <NavLink title='Foundations' icon='meeting_room' />
                <NavLink title='Components' icon='dashboard' />
                <NavLink title='Plugins' icon='extension' />
            </React.Fragment>
        )
    }
}


export default SideNavLinks;