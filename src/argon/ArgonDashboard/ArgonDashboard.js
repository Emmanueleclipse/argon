import React, { useRef, useState, useEffect } from 'react';
import './ArgonDashboard.css';
import avtar from './../assets/team-4.jpg';
import Notification from './Notification/Notification';
import AragonApps from './AragonApps/AragonApps';
import AragonBody from './AragonBody/AragonBody'

const ArgonDashboard = props => {
    const menuIcon = useRef();
    const AragonSearchForSmall = useRef();
    const MainIcons = useRef();
    const [notify, setNotify] = useState({ className: '', check: true });
    const notifyShow = () => {
        notify.check ? setNotify({
            className: 'ArgonShow',
            check: false
        }) : notifyHide();
    }
    const notifyHide = () => {
        setNotify({
            className: '',
            check: true
        })
    }
    const [apps, setApps] = useState({ className: '', check: true });
    const appsShow = () => {
        apps.check ?
            setApps({
                className: 'ArgonShow',
                check: false
            }) :
            appsHide();
    }
    const appsHide = () => {
        setApps({
            className: '',
            check: true
        })
    }
    const showSearchBox = () => {
        AragonSearchForSmall.current.style.display = 'block';
        MainIcons.current.style.left = '100vh';
        setTimeout(() => {
            AragonSearchForSmall.current.style.left = '0';
            MainIcons.current.style.display = 'none';
        }, 100)
    }
    const hideSearchBox = () => {
        AragonSearchForSmall.current.style.left = '-100%';
        MainIcons.current.style.display = 'flex';
        setTimeout(() => {
            MainIcons.current.style.left = '0';
            AragonSearchForSmall.current.style.display= 'none'
        }, 100)
    }
    useEffect(() => {
        window.onclick = (event) => {
            if (event.target.innerHTML !== 'notifications') {
                notifyHide();
            }
            if (event.target.innerHTML !== 'apps') {
                appsHide();
            }
        }
    }, [])
    return (
        <div className='ArgonDashboard'>
            <div className='argonblueBackground'></div>
            <div className='ArgonDashMain'>
                <div className='ArgonHeader'>
                    <div className='AragonFlex' ref={MainIcons}>
                        <label className='AragonSearch AragonFlex'>
                            <i className='material-icons'>search</i>
                            <input type='text' placeholder='Search' />
                        </label>
                        <div className='ArgonRightHeader'>
                            <div className='argonMenu' ref={menuIcon} onClick={() => { props.clicked(menuIcon.current.childNodes) }}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className='searchIcon'>
                                <i className='material-icons' onClick={showSearchBox}>zoom_in</i>
                            </div>
                            <div>
                                <i className='material-icons' onClick={notifyShow}>notifications</i>
                                <Notification className={notify.className} />
                            </div>
                            <div>
                                <i className='material-icons' onClick={appsShow}>apps</i>
                                <AragonApps className={apps.className} />
                            </div>
                        </div>
                        <div className='profileIcon'>
                            <img src={avtar} alt='' />
                        </div>
                        <div className='profileName'>John Snow</div>
                    </div>
                    <div className='AragonSearchForSmall' ref={AragonSearchForSmall}>
                        <label className='AragonSearch'>
                            <i className='material-icons SearchMinWIdth'>search</i>
                            <input type='text' placeholder='Search' />
                            <i className='material-icons' onClick={hideSearchBox}>close</i>
                        </label>
                    </div>
                </div>
                <AragonBody />
            </div>
        </div>
    )
}

export default ArgonDashboard;