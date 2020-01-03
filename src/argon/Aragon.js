import React, { Component } from 'react';
import './Aragon.css';
import SideNav from './SideNav/SideNav';
import ArgonDashboard from './ArgonDashboard/ArgonDashboard';

class Aragon extends Component {
    SideNav = {
        elmRef: ''
    }
    check = true;
    SideNavHandler = (elm) => {
        if (this.check) {
            elm[0].style.width = '16px';
            elm[2].style.width = '16px';
            this.refs.AragonRight.style.marginLeft = '70px';
            SideNav.elmRef.setAttribute("class", "AragonLeft SideNavWidth");
        } else {
            elm[0].style.width = '11px';
            elm[2].style.width = '11px';
            this.refs.AragonRight.style.marginLeft = '250px';
            SideNav.elmRef.setAttribute("class", "AragonLeft");
        }
        this.check = !this.check;
    }
    checkForSmallDevices = true;
    elm;
    SideNavHandlerForSmallDevices = elm => {
        if (this.checkForSmallDevices) {
            elm[0].style.width = '11px';
            elm[2].style.width = '11px';
            SideNav.elmRef.setAttribute('class', 'AragonLeft AragonLeftForSmall');
            this.checkForSmallDevices = false;
            this.refs.AragonBlur.style.display = 'block';
            this.elm = elm;
        }
        else {
            this.HideSideNavForSmallDevices();
        }
    }
    HideSideNavForSmallDevices = () => {
        this.elm[0].style.width = '16px';
        this.elm[2].style.width = '16px';
        SideNav.elmRef.setAttribute('class', 'AragonLeft');
        this.checkForSmallDevices = true;
        this.refs.AragonBlur.style.display = 'none';
    }
    render() {
        return (
            <div className='Aragon'>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <div className='AragonBlur' ref='AragonBlur' onClick={this.HideSideNavForSmallDevices}></div>
                <SideNav clicked={this.SideNavHandler} elmRef={SideNav} />
                <div className='AragonRight' ref='AragonRight'>
                    <ArgonDashboard clicked={this.SideNavHandlerForSmallDevices} />
                </div>
            </div>
        )
    }
}

export default Aragon;